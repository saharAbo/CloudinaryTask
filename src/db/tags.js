import { writeStorage } from "@rehooks/local-storage";
import { getImages } from "./images";

const TAGS_KEY = "Tags";

function getTags() {
  return localStorage.getItem(TAGS_KEY) || "[]";
}

function add_color() {
  const colors = JSON.parse(get_colors());
  let color = Math.floor(Math.random() * 16777215).toString(16);
  while (colors.indexOf(color) > -1)
    color = Math.floor(Math.random() * 16777215).toString(16);
  colors.push(color);
  writeStorage("Tags_colors", colors);
}

function get_colors() {
  return localStorage.getItem("Tags_colors") || "[]";
}

function remove_color(idx) {
  const colors = JSON.parse(get_colors());
  colors.splice(idx, 1);
  writeStorage("Tags_colors", colors);
}
function addTag(name) {
  let tags = JSON.parse(getTags());

  if (tags.indexOf(name) == -1) {
    tags.push(name);
    add_color();
  }
  setTags(tags);
}

function removeTag(name) {
  const tags = JSON.parse(getTags());
  const images = JSON.parse(localStorage.getItem("Images") || "[]");
  const idx = tags.indexOf(name);
  if (idx >= 0) {
    tags.splice(idx, 1);
    setTags(tags);
    const imgs = [];
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (img.selectedTags && img.selectedTags.indexOf(name) > -1) {
        img.selectedTags = img.selectedTags.filter((t) => t != name);
      }
      imgs.push(img);
    }
    writeStorage("Images", imgs);
  }
}

const updateTag = (oldTag, newTag) => {
  console.log(oldTag, newTag);
  const tags = JSON.parse(getTags());
  const images = JSON.parse(localStorage.getItem("Images") || "[]");
  const idx = tags.indexOf(oldTag);
  if (idx >= 0) {
    tags[idx] = newTag;
    const imgs = [];
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (img.selectedTags) {
        const imgTagIndex = img.selectedTags.indexOf(oldTag);
        if (imgTagIndex > -1) img.selectedTags[imgTagIndex] = newTag;
        imgs.push(img);
      } else imgs.push(img);
    }
    writeStorage("Images", imgs);
    setTags(tags);
  }
};

function setTags(tags) {
  writeStorage(TAGS_KEY, tags);
}

export { setTags, addTag, removeTag, getTags, updateTag, get_colors };
