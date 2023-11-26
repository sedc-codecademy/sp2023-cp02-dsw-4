function AddressInfoForm({user, userInfo, handleInputEdit}) {
  return (
    <form className="dataForm addressInfoFrom" onSubmit={(e) => {e.preventDefault()}}>
      <div className="inputContainer">
        <p>Address: {user.address}</p>
        <div>
          <input
            type="text"
            maxLength="30"
            minLength="3"
            name="address"
            value={userInfo.address}
            onChange={handleInputEdit}
            required
            placeholder=""
          ></input>
          <label htmlFor="address">Address</label>
        </div>
      </div>
      <div className="inputContainer">
        <p>City: {user.city}</p>
        <div>
          <input
            type="text"
            maxLength="30"
            minLength="4"
            pattern="^[a-zA-Z\\s ]*$"
            name="city"
            value={userInfo.city}
            onChange={handleInputEdit}
            required
            placeholder=""
          ></input>
          <label htmlFor="city">City</label>
        </div>
      </div>
      <div className="inputContainer">
        <p>Postal Code: {user.postalCode}</p>
        <div>
          <input
            name="postalCode"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            value={userInfo.postalCode}
            onChange={handleInputEdit}
            required
            maxLength={4}
            minLength={4}
            placeholder=""
          ></input>
          <label htmlFor="postalCode">Postal Code</label>
        </div>
      </div>
    </form>
  )
}

export default AddressInfoForm
