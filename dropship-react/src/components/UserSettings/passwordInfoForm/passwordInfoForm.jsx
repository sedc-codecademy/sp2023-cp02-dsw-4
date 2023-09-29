import { useState } from "react";
import { useSelector } from "react-redux";

function PasswordInfoForm({ handlePasswordInputChange }) {
  const userSettings = useSelector((state) => state.userSettings.passwordInfo);
  const [isExpandedPassword, setIsExpandedPassword] = useState(true);

  const handleExpandPassword = () => {
    setIsExpandedPassword(!isExpandedPassword);
  };

  return (
    <div className="user-settings-password">
      <h2>Password</h2>
      <span onClick={handleExpandPassword}>EDIT</span>
      <div className="user-password">
        <label></label>
        {isExpandedPassword && (
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={userSettings.password}
            onChange={(e) => handlePasswordInputChange(e)}
          />
        )}
      </div>

      <button>Submit</button>
    </div>
  );
}

export default PasswordInfoForm;
