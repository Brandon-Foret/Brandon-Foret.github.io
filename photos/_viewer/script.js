const photo =
  document.getElementById("photo");

const stored =
  sessionStorage.getItem(
    "photoExplorerCurrentImage"
  );

if (!stored) {
  console.error(
    "Photo viewer was opened without an image."
  );
} else {
  try {
    const data =
      JSON.parse(stored);

    photo.src =
      data.imagePath;

    if (data.title) {
      document.title =
        data.title;

    }
  } catch (error) {
    console.error(
      "Could not read photo information:",
      error
    );
  }
}

photo.addEventListener(
  "error",
  () => {
    console.error(
      "Could not load image:",
      photo.src
    );
  }
);