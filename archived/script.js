const photoExplorerFileSystem = {
  name: "Archive",
  type: "folder",

  children: [
    {
      name: "Birthday Bash 2026!",
      type: "link",
      url: "archived/birthday-bash-26/index.html",
      textImageThing: "🎉",
    },
  ],
};

let photoExplorerCurrentFolder = photoExplorerFileSystem;

let photoExplorerHistory = [photoExplorerFileSystem];

let photoExplorerHistoryIndex = 0;

const photoExplorerFileArea = document.getElementById(
  "photo-explorer-file-area",
);

const photoExplorerAddress = document.getElementById(
  "photo-explorer-address-text",
);

const photoExplorerStatus = document.getElementById(
  "photo-explorer-status-text",
);

const photoExplorerBack = document.getElementById("photo-explorer-back");
const photoExplorerForward = document.getElementById("photo-explorer-forward");
const photoExplorerUp = document.getElementById("photo-explorer-up");

function photoExplorerGetPath(target) {
  const path = [];

  function search(folder) {
    if (folder === target) {
      path.push(folder.name);

      return true;
    }

    if (!folder.children) {
      return false;
    }

    for (const child of folder.children) {
      if (child.type !== "folder") {
        continue;
      }

      if (search(child)) {
        path.unshift(folder.name);

        return true;
      }
    }

    return false;
  }

  search(photoExplorerFileSystem);

  return path;
}

function photoExplorerFindParent(target) {
  function search(folder) {
    if (!folder.children) {
      return null;
    }

    for (const child of folder.children) {
      if (child.type === "folder" && child === target) {
        return folder;
      }

      if (child.type === "folder") {
        const result = search(child);

        if (result) {
          return result;
        }
      }
    }

    return null;
  }

  return search(photoExplorerFileSystem);
}

function photoExplorerGetCreateWindow() {
  let currentWindow = window;

  while (true) {
    try {
      if (typeof currentWindow.createWindow === "function") {
        return currentWindow.createWindow.bind(currentWindow);
      }

      if (currentWindow === currentWindow.parent) {
        break;
      }

      currentWindow = currentWindow.parent;
    } catch (error) {
      break;
    }
  }

  return null;
}

function photoExplorerOpen(item) {
  const imageViewer = document.createElement("div");
  imageViewer.className = "photo-explorer-image-viewer";

  const image = document.createElement("img");
  image.className = "photo-explorer-image-viewer-image";
  image.src = item.imagePath;
  image.alt = item.title || item.name || "Photo";

  const closeButton = document.createElement("button");
  closeButton.className = "photo-explorer-image-viewer-close";
  closeButton.textContent = "×";

  closeButton.addEventListener("click", () => {
    imageViewer.remove();
    photoExplorerFileArea.style.display = "";
  });

  imageViewer.appendChild(image);
  imageViewer.appendChild(closeButton);

  photoExplorerFileArea.parentElement.appendChild(imageViewer);
}

function photoExplorerDisplayFolder(folder) {
  photoExplorerCurrentFolder = folder;

  photoExplorerFileArea.innerHTML = "";
  photoExplorerAddress.textContent = photoExplorerGetPath(folder).join(" > ");

  const count = folder.children?.length || 0;

  photoExplorerStatus.textContent = `${count} object${count === 1 ? "" : "s"}`;

  if (!folder.children) {
    return;
  }

  folder.children.forEach((item) => {
    const element = document.createElement("div");
    element.className = "photo-explorer-file-item";

    const icon = document.createElement("div");

    icon.className = "photo-explorer-file-icon";

    if (item.type === "folder") {
      icon.textContent = "📁";
    } else if (item.type == "image") {
      const image = document.createElement("img");
      image.src = item.imagePath;
      image.alt = item.name;

      image.onerror = () => {
        image.remove();
        icon.textContent = "🖼️";
      };

      icon.appendChild(image);
    } else if (item.type == "link") {
      icon.textContent = item.textImageThing;
    }

    const name = document.createElement("div");

    name.className = "photo-explorer-file-name";

    name.textContent =
      item.name ||
      item.title ||
      item.imagePath.split("/")[item.imagePath.split("/").length - 1];

    element.appendChild(icon);

    element.appendChild(name);

    photoExplorerFileArea.appendChild(element);

    element.addEventListener("click", () => {
      document
        .querySelectorAll(".photo-explorer-file-item")
        .forEach((other) => {
          other.classList.remove("selected");
        });

      element.classList.add("selected");
    });

    element.addEventListener("dblclick", () => {
      if (item.type === "folder") {
        photoExplorerNavigate(item);

        return;
      }

      if (item.type === "image") {
        photoExplorerOpen(item);
      }

      if (item.type === "link") {
        const createWindow = photoExplorerGetCreateWindow();

        if (!createWindow) {
          console.error("Photo Explorer: createWindow could not be found.");
          return;
        }

        if (!item.url) {
          console.error("Photo Explorer: Link does not have a URL.", item);
          return;
        }

        createWindow(item.url, item.name);
      }
    });
  });
}

function photoExplorerNavigate(folder) {
  photoExplorerHistory = photoExplorerHistory.slice(
    0,
    photoExplorerHistoryIndex + 1,
  );

  photoExplorerHistory.push(folder);

  photoExplorerHistoryIndex = photoExplorerHistory.length - 1;

  photoExplorerDisplayFolder(folder);
}

photoExplorerBack.addEventListener("click", () => {
  if (photoExplorerHistoryIndex <= 0) {
    return;
  }

  photoExplorerHistoryIndex--;

  photoExplorerDisplayFolder(photoExplorerHistory[photoExplorerHistoryIndex]);
});

photoExplorerForward.addEventListener("click", () => {
  if (photoExplorerHistoryIndex >= photoExplorerHistory.length - 1) {
    return;
  }

  photoExplorerHistoryIndex++;

  photoExplorerDisplayFolder(photoExplorerHistory[photoExplorerHistoryIndex]);
});

photoExplorerUp.addEventListener("click", () => {
  if (photoExplorerCurrentFolder === photoExplorerFileSystem) {
    return;
  }

  const parent = photoExplorerFindParent(photoExplorerCurrentFolder);

  if (parent) {
    photoExplorerNavigate(parent);
  }
});

photoExplorerDisplayFolder(photoExplorerFileSystem);
