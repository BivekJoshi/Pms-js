import Resizer from "react-image-file-resizer";

export function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const fileResize = (file) =>
  new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        const width = image.width;
        const height = image.height;
        const fileSize = Math.ceil(file.size / 1024 / 1024);
        Resizer.imageFileResizer(
          file,
          width / fileSize,
          height / fileSize,
          "JPEG",
          60,
          0,
          (uri) => {
            resolve(uri);
          },
          "file"
        );
      };
    };
  });
