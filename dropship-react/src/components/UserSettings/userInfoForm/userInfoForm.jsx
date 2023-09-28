import { useState } from "react";
import { useSelector } from "react-redux";

function UserInfoForm({ handleUserInputChange }) {
  const user = useSelector((state) => state.user.user);
  const userSettings = useSelector((state) => state.userSettings.userInfo);
  const [isExpandedUser, setIsExpandedUser] = useState(true);
  // console.log(userSettings)

  const handleExpandUser = () => {
    setIsExpandedUser(!isExpandedUser);
  };

  return (
    <div className="user-settings-info">
      <h2>User Info</h2>
      <span onClick={handleExpandUser}>EDIT</span>
      <div className="user-firstname">
        <h1>Firstname: {user.firstName}</h1>
        <label></label>
        {isExpandedUser && (
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            value={userSettings.firstName}
            // onChange={handleUserInputChange}
            onChange={(e) => handleUserInputChange(e)}
          />
        )}
      </div>

      <div className="user-lastname">
        <h1>Lastname: {user.lastName}</h1>
        <label></label>
        {isExpandedUser && (
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            value={userSettings.lastName}
            onChange={(e) => handleUserInputChange(e)}
          />
        )}
      </div>

      <div className="user-email">
        <h3>Email: {user.email}</h3>
        <label></label>
        {isExpandedUser && (
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={userSettings.email}
            onChange={(e) => handleUserInputChange(e)}
          />
        )}
      </div>

      <div className="user-phone-number">
        <p>Phone Number: {user.phoneNumber}</p>
        <label></label>
        {isExpandedUser && (
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            value={userSettings.phoneNumber}
            onChange={(e) => handleUserInputChange(e)}
          />
        )}
      </div>

      <button>Submit</button>
    </div>
  );
}

export default UserInfoForm;
