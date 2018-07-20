import path from 'path'
const ImagePath = (imageName) => {
  return path.join(__dirname, 'public/images/', imageName)
}

export default ImagePath
