import React, { useState } from "react"
import ImageLoader from "../../ImageLoader/ImageLoader"

function ProfilePicture({ image }) {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
    }
  }

  return (
    <div className="photoUploader">
      <div className="imageDiv">
        <ImageLoader
          url={image.url}
          alt={image.alt}
          backupUrl="/imgs/404/user404.png"
          backupAlt="User 404"
        ></ImageLoader>
      </div>
      <div
        className={`image-uploader ${selectedFile && 'noBorder'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Selected Img" />}
        {!selectedFile &&
          (
            <>
              <h4>Drag and drop an image file here</h4>
              <p>Max size x1024, Min size x600</p>
            </>
          )
        }
        <input type="file" accept="image/*" onChange={handleFileInputChange} />
      </div>
    </div>
  )
}

export default ProfilePicture

