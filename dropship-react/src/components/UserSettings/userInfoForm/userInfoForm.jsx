function UserInfoForm() {
  return (
    <form className="dataForm userInfoForm" onSubmit={(e) => { e.preventDefault() }}>
      <div className="inputContainer fullname">
        <p>First name: Dime</p>
        <div>
          <input
            type="text"
            maxLength="25"
            minLength="4"
            name="fname"
            required
            placeholder=""
          ></input>
          <label htmlFor="fname">First Name</label>
        </div>
        <p>Last name: Dimeski</p>
        <div>
          <input
            type="text"
            maxLength="25"
            minLength="4"
            name="lname"
            required
            placeholder=""
          ></input>
          <label htmlFor="lname">Last Name</label>
        </div>
      </div>
      <div className="inputContainer ePhone">
        <p>Email address: dime@sarf.com</p>
        <div>
          <input
            type="email"
            maxLength="25"
            minLength="8"
            name="email"
            required
            placeholder=""
          ></input>
          <label htmlFor="email">Email</label>
        </div>
        <p>Phone number: 075500000</p>
        <div className="lname">
          <input
            name="phone"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            required
            placeholder=""
          ></input>
          <label htmlFor="phone">Phone Number</label>
        </div>
      </div>
    </form>
  )
}

export default UserInfoForm
