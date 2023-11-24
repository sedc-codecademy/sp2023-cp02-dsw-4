import React, { useState } from "react"
import ImageLoader from "../../ImageLoader/ImageLoader"

function ProfilePicture({ image, userInfo, handleInputEdit }) {
  const [drag, setDrag] = useState(false)

  const handleDragOver = () => {
    setDrag(true)
  }

  const handleDragLeave = () => {
    setDrag(false)
  }

  // const handleDrop = (e) => {
  //   e.preventDefault()
  //   const file = e.dataTransfer.files[0]
  //   if (file && file.type.startsWith("image/")) {
  //     const img = new Image()
  //     img.onload = function () {
  //       if (this.width >= 600 && this.width <= 1024 && this.height >= 600 && this.height <= 1024) {
  //         handleInputEdit({ name: 'image', value: file })
  //       } else {
  //         alert("Please select an image of width and height between 600 and 1024 pixels.")
  //       }
  //     }
  //     img.src = URL.createObjectURL(file)
  //   }
  // }

  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0]
  //   if (file && file.type.startsWith("image/")) {
  //     const img = new Image()
  //     img.onload = function () {
  //       if (this.width >= 600 && this.width <= 1024 && this.height >= 600 && this.height <= 1024) {
  //         handleInputEdit({ name: 'image', value: file })
  //       } else {
  //         alert("Please select an image of width and height between 600 and 1024 pixels.")
  //       }
  //     }
  //     img.src = URL.createObjectURL(file)
  //   }
  // }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      const img = new Image()
      img.onload = function () {
        if (this.width >= 600 && this.width <= 1024 && this.height >= 600 && this.height <= 1024) {
          const reader = new FileReader();
          reader.onloadend = function() {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            const byteArray = new Uint8Array(atob(base64String).split("").map(char => char.charCodeAt(0)));
            handleInputEdit({ name: 'image', value: { base64: base64String, byteArray: byteArray, file: file } })
          }
          reader.readAsDataURL(file);
        } else {
          alert("Please select an image of width and height between 600 and 1024 pixels.")
        }
      }
      img.src = URL.createObjectURL(file)
    }
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      const img = new Image()
      img.onload = function () {
        if (this.width >= 600 && this.width <= 1024 && this.height >= 600 && this.height <= 1024) {
          const reader = new FileReader();
          reader.onloadend = function() {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            const byteArray = new Uint8Array(atob(base64String).split("").map(char => char.charCodeAt(0)));
            handleInputEdit({ name: 'image', value: { base64: base64String, byteArray: byteArray, file: file } })
          }
          reader.readAsDataURL(file);
        } else {
          alert("Please select an image of width and height between 600 and 1024 pixels.")
        }
      }
      img.src = URL.createObjectURL(file)
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
        className={`image-uploader ${userInfo?.image?.file && 'noBorder'} ${drag && 'dragged'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {userInfo?.image?.file && <img src={URL.createObjectURL(userInfo?.image?.file)} alt="Selected Img" />}
        {!userInfo?.image?.file &&
          (
            <>
              <h4>Drag and drop an image file here</h4>
              <p>Max size x1024, Min size x600</p>
            </>
          )
        }
        <input type="file" accept="image/*" onChange={handleFileInputChange} />
        {userInfo?.image?.file && <button onClick={() => handleInputEdit({ name: 'image', value: '' })}>Cancel</button>}
      </div>
    </div>
  )
}

export default ProfilePicture

