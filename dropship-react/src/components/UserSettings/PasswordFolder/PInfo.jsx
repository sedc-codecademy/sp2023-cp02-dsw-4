import React, { useState } from 'react';

function PasswordInfoForm({handlePasswordChange, passwordInfo}) {
  const [showPassword, setShowPassword] = useState(false)
  const [showCpassword, setShowCpassword] = useState(false)
  const [showOriginalPassword, setShowOriginalPassword] = useState(false)

  return (
    <form className="dataForm" onSubmit={(e) => { e.preventDefault() }}>
      <div className="inputContainer password">
        <div>
          <input
            type={showOriginalPassword ? "text" : "password"}
            maxLength="25"
            minLength="8"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least one special character"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#\\$=+_\-*\.])[A-Za-z\d@$!%*?&^#\\$=+_\-*\.]*$"
            name="originalPassword"
            required
            placeholder=""
            value={passwordInfo.originalPassword}
            onChange={handlePasswordChange}
          ></input>
          <label htmlFor="originalPassword">Current Password</label>
          <span className={showOriginalPassword ? 'active' : ''} onClick={() => setShowOriginalPassword(!showOriginalPassword)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" /></svg></span>
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            maxLength="25"
            minLength="8"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least one special character"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#\\$=+_\-*\.])[A-Za-z\d@$!%*?&^#\\$=+_\-*\.]*$"
            name="password"
            required
            placeholder=""
            value={passwordInfo.password}
            onChange={handlePasswordChange}
          ></input>
          <label htmlFor="password">New Password</label>
          <span className={showPassword ? 'active' : ''} onClick={() => setShowPassword(!showPassword)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" /></svg></span>
        </div>
        <div>
          <input
            type={showCpassword ? "text" : "password"}
            maxLength="25"
            minLength="8"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least one special character"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#\\$=+_\-*\.])[A-Za-z\d@$!%*?&^#\\$=+_\-*\.]*$"
            name="cpassword"
            required
            placeholder=""
            value={passwordInfo.cpassword}
            onChange={handlePasswordChange}
          ></input>
          <label htmlFor="password">Confirm Password</label>
          <span className={showCpassword ? 'active' : ''} onClick={() => setShowCpassword(!showCpassword)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" /></svg></span>
        </div>
      </div>
    </form>
  );
}

export default PasswordInfoForm;
