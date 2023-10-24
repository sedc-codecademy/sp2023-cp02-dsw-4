// import { useState } from "react";
// // import { useSelector } from "react-redux";

// function ProfilePicture() {
// //   const userSettings = useSelector((state) => state.userSettings.userImage);
//   const [base64String, setBase64String] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       console.log("Selected File:", file);

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const base64String = e.target.result;
//         console.log("Base64 String:", base64String);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="user-profile-picture">
//       <img src="/user.png" alt="user" />
//       <input
//         type="file"
//         name="file"
//         // value={userSettings.userImage}
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// }

// export default ProfilePicture;


import React, { useState } from "react";

function ProfilePicture() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    }
  };

  return (
    <div
      className="image-uploader" 
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {selectedFile ? (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Img"
          />
        </div>
      ) : (
        <div>
          <p>Drag and drop an image file here, or</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
          />
        </div>
      )}
    </div>
  );
}

export default ProfilePicture;

