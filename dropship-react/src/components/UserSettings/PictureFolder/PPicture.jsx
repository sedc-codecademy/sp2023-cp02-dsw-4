import React, { useState } from "react"
import ImageLoader from "../../ImageLoader/ImageLoader"
import { dataURLtoFile } from "../../UsefullComponents/Usefull"
import { useDispatch } from "react-redux"
import { setNotificationData, setShowNotification } from "../../../store/slices/notificationSlice/notificationSlice"

function ProfilePicture({ image, userInfo, handleInputEdit }) {
  const dispatch = useDispatch()
  const [drag, setDrag] = useState(false)

  const handleDragOver = () => {
    setDrag(true)
  }

  const handleDragLeave = () => {
    setDrag(false)
  }

  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Add a key state

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      const img = new Image()
      img.onload = function () {
        if (this.width >= 600 && this.width <= 1024 && this.height >= 600 && this.height <= 1024) {
          const reader = new FileReader();
          reader.onloadend = function () {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            handleInputEdit({ name: 'image', value: { base64: base64String, name: file.name } })
          }
          reader.readAsDataURL(file);
        } else {
          setFileInputKey(Date.now()) // Reset the key state to clear the file input
          dispatch(setNotificationData({ title: 'Image not compatible', success: '', error: 'Please select an image of width and height between 600 and 1024 pixels.' }))
          dispatch(setShowNotification(true))
        }
      }
      img.src = URL.createObjectURL(file)
    }
  }

  const handleCancel = () => {
    handleInputEdit({ name: 'image', value: '' }); // Clear the image
    setFileInputKey(Date.now()); // Reset the key state to clear the file input
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
        onDrop={handleFileInputChange}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {userInfo?.image?.base64 && <img src={URL.createObjectURL(dataURLtoFile('data:image/png;base64,' + userInfo?.image?.base64, userInfo?.image?.name))} alt="Selected Img" />}
        {!userInfo?.image?.base64 &&
          (
            <>
              <h4>Drag and drop an image file here</h4>
              <p>Max size x1024, Min size x600</p>
            </>
          )
        }
        {!userInfo?.image?.base64 && <input key={fileInputKey} type="file" accept="image/*" onChange={handleFileInputChange} />}
        {userInfo?.image?.base64 && <button onClick={handleCancel}>Cancel</button>}
      </div>
    </div>
  )
}

export default ProfilePicture

