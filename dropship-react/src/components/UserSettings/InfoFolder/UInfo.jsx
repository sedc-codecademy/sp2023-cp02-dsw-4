function UserInfoForm({user, userInfo, handleInputEdit}) {
  return (
    <form className="dataForm userInfoForm" onSubmit={(e) => { e.preventDefault() }}>
      <div className="inputContainer fullname">
        <p>First name: {user.firstName}</p>
        <div>
          <input
            type="text"
            maxLength="30"
            minLength="2"
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
            minLength="2"
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
            maxLength="40"
            minLength="9"
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
            type="tel"
            pattern="^0\d+$"
            maxLength={9}
            minLength={9}
            inputMode="numeric"
            value={userInfo.phoneNumber}
            onChange={handleInputEdit}
            required
            placeholder=""
          ></input>
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>
      </div>
    </form>
  )
}

export default UserInfoForm
