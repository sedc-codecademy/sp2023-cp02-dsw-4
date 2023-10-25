import { useState } from "react";
import { useSelector } from "react-redux";

function PasswordInfoForm({ handlePasswordInputChange }) {
  const userSettings = useSelector((state) => state.userSettings.passwordInfo);
  const [isExpandedPassword, setIsExpandedPassword] = useState(true);

  const handleExpandPassword = () => {
    setIsExpandedPassword(!isExpandedPassword);
  };

  return (
    <div className="user-settings-password container-div">
      <h2>
        Password
        <span className="clickable-span" onClick={handleExpandPassword}>
          EDIT
        </span>
      </h2>

      <div className="user-password">
        <label></label>
        {isExpandedPassword && (
          <input
            className="user-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={userSettings.password}
            onChange={(e) => handlePasswordInputChange(e)}
          />
        )}
      </div>

      <button className="submit-button">SUBMIT</button>
    </div>
  );
}

export default PasswordInfoForm;
