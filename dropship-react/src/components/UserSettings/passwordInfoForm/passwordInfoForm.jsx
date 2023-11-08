function PasswordInfoForm() {
  return (
    <form className="dataForm" onSubmit={(e) => {e.preventDefault()}}>
      <div className="inputContainer">
        <div className="cpass">
          <input
            type="password"
            maxLength="25"
            minLength="8"
            name="cpass"
            required
            placeholder=""
          ></input>
          <label htmlFor="cpass">Current Password</label>
        </div>
        <div className="npass">
          <input
            type="password"
            maxLength="25"
            minLength="8"
            name="npass"
            required
            placeholder=""
          ></input>
          <label htmlFor="npass">New Password</label>
        </div>
      </div>
    </form>
  );
}

export default PasswordInfoForm;
