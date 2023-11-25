function UserInfoForm({user, userInfo, handleInputEdit}) {
  return (
    <form className="dataForm userInfoForm" onSubmit={(e) => { e.preventDefault() }}>
      <div className="inputContainer fullname">
        <p>First name: {user.firstName}</p>
        <div>
          <input
            type="text"
            maxLength="30"
            minLength="3"
            pattern="^[a-zA-Z\\s ]*$"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleInputEdit}
            required
            placeholder=""
          ></input>
          <label htmlFor="firstName">First Name</label>
        </div>
        <p>Last name: {user.lastName}</p>
        <div>
          <input
            type="text"
            maxLength="30"
            minLength="3"
            pattern="^[a-zA-Z\\s ]*$"
            name="lastName"
            required
            value={userInfo.lastName}
            onChange={handleInputEdit}
            placeholder=""
          ></input>
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>
      <div className="inputContainer ePhone">
        <p>Email address: {user.email}</p>
        <div>
        <input
            type="text"
            maxLength="25"
            minLength="6"
            name="email"
            pattern="^[a-zA-Z0-9+._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
            value={userInfo.email}
            onChange={handleInputEdit}
            required
            placeholder=""
          ></input>

          <label htmlFor="email">Email</label>
        </div>
        <p>Phone number: {user.phoneNumber}</p>
        <div>
          <input
            name="phoneNumber"
            type="text"
            pattern="[0-9+ ]*"
            inputMode="numeric"
            maxLength={20}
            minLength={9}
            value={userInfo.phoneNumber}
            onChange={handleInputEdit}
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
