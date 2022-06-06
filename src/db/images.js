import { writeStorage } from "@rehooks/local-storage";

const IMAGES_KEY = "Images";

const getImages = async () => {
  try {
    let images = localStorage.getItem(IMAGES_KEY);
    if (!images) {
      const images_list = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=7"
      );
      images = await images_list.json();
      writeStorage(IMAGES_KEY, images);
    }
  } catch (e) {
    console.log("unable to fetch images from server: " + e);
  }
};

const addTagToImage = (image, tag) => {
  let images = JSON.parse(localStorage.getItem(IMAGES_KEY) || "[]");
  let img = null,
    selectedIndex = null;
  selectedIndex = images.findIndex((img) => img.id == image);

  if (selectedIndex > -1) {
    img = images[selectedIndex];
    img.selectedTags = tag;
    images[selectedIndex] = img;
  }
  if (selectedIndex > -1 && img) {
    images[selectedIndex] = img;
    writeStorage(IMAGES_KEY, images);
  }
};

const removeTagFromImage = (image, tag) => {
  let images = JSON.parse(localStorage.getItem(IMAGES_KEY) || "[]");
  let selectedIndex = images.findIndex((img) => img.id == image);
  if (selectedIndex >= 0) {
    let img = images[selectedIndex];
    if (img.selectedTags) {
      const selectedTagIndex = img.selectedTags.indexOf(tag);
      if (img.selectedTags.indexOf(tag) > -1)
        img.selectedTags.splice(img.selectedTags.indexOf(tag), 1);
    }
    images[selectedIndex] = img;
    writeStorage(IMAGES_KEY, images);
  }
};

export { getImages, addTagToImage, removeTagFromImage };
