import Resizer from "react-image-file-resizer"

export function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result))
  reader.readAsDataURL(img)
}

export const fileResize = (file) =>
  new Promise((resolve) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      const image = new Image()
      image.src = e.target.result
      image.onload = function () {
        const width = image.width
        const height = image.height
        const fileSize = Math.ceil(file.size / 1024 / 1024)
        Resizer.imageFileResizer(
          file,
          width / fileSize,
          height / fileSize,
          "JPEG",
          60,
          0,
          (uri) => {
            resolve(uri)
          },
          "file"
        )
      }
    }
  })

export const base64ToBinary = (base64) => {
  try {
    // Split the base64 string to extract only the data part
    const base64Data = base64.split(",")[1]
    const binaryString = atob(base64Data)
    const len = binaryString.length
    const bytes = new Uint8Array(len)

    for (let i = 0; i < len; ++i) {
      bytes[i] = binaryString.charCodeAt(i)
    }

    return bytes.buffer
  } catch (error) {
    console.error("Error decoding base64 string:", error)
    return null
  }
}

export const handleBlobImg = async (blob) => {
  const fileSize = blob.size / 1024 / 1024

  // Check if the file size is within the desired limit
  if (fileSize <= 0.2) {
    return blob // Return the original blob if within limit
  } else {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        blob,
        300, // Width (in pixels) after resizing
        300, // Height (in pixels) after resizing
        "JPEG", // Output format
        100, // Image quality (0 to 100)
        0, // Rotation angle
        (resizedImage) => {
          const resizedBlob = new Blob([resizedImage])
          resolve(resizedBlob)
        },
        "blob" // Output type
      )
    })
  }
}
