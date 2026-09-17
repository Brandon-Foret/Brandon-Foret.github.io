const backgroundSelect = document.getElementById("backgroundSelect");
const backgroundColor = document.getElementById("backgroundColor");
const colorSetting = document.getElementById("colorSetting");

const backgrounds = {
  kittyWallpaper: "photos/brandon/organize/IMG_2417.PNG",
};

function updateColorSetting(type) {
  if (type === "solid") {
    colorSetting.style.display = "flex";
  } else {
    colorSetting.style.display = "none";
  }
}

function changeBackground(type) {
  let theme;

  if (type === "default") {
    theme = {
      type: "default",
    };
  } else if (type === "solid") {
    theme = {
      type: "solid",
      color: backgroundColor.value,
    };
  } else if (backgrounds[type]) {
    theme = {
      type: "image",
      image: backgrounds[type],
    };
  } else {
    return;
  }

  updateColorSetting(theme.type);

  window.parent.postMessage(
    {
      type: "changeBackground",

      theme: theme,
    },
    "*",
  );
}

backgroundSelect.addEventListener("change", function () {
  changeBackground(this.value);
});

backgroundColor.addEventListener("input", function () {
  if (backgroundSelect.value !== "solid") {
    return;
  }

  changeBackground("solid");
});

window.parent.postMessage(
  {
    type: "requestBackground",
  },
  "*",
);

window.addEventListener("message", function (event) {
  if (!event.data) {
    return;
  }

  if (event.data.type !== "currentBackground") {
    return;
  }

  const theme = event.data.theme;

  if (!theme) {
    return;
  }

  if (theme.type === "default") {
    backgroundSelect.value = "default";

    updateColorSetting("default");
  } else if (theme.type === "solid") {
    backgroundSelect.value = "solid";

    backgroundColor.value = theme.color || "#121212";

    updateColorSetting("solid");
  } else if (theme.type === "image") {
    let foundImage = false;

    for (const key in backgrounds) {
      if (backgrounds[key] === theme.image) {
        backgroundSelect.value = key;

        foundImage = true;

        break;
      }
    }

    if (foundImage) {
      updateColorSetting("image");
    }
  }
});
