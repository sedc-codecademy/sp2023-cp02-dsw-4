import { useSelector } from "react-redux"

function AddressInfoForm({ user, userInfo, handleInputEdit }) {
  const shippingArray = useSelector((state) => state.shipping.shippingArray)
  return (
    <form className="dataForm addressInfoFrom" onSubmit={(e) => { e.preventDefault() }}>
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
        <div className="city">
          <select
            className="citySelect"
            name="city"
            onChange={handleInputEdit}
            value={user.city}
          >
            {shippingArray.map((e, i) => (
              <option key={i} value={e} name={e} >
                {e}
              </option>
            ))}
          </select>
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
