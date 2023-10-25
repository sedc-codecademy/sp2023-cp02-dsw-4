import { useState } from "react";
import { useSelector } from "react-redux";

function AddressInfoForm({ handleAddressInputChange }) {
  const user = useSelector((state) => state.user.user);
  const userSettings = useSelector((state) => state.userSettings.addressInfo);
  const [isExpandedAddress, setIsExpandedAddress] = useState(true);

  const handleExpandAddress = () => {
    setIsExpandedAddress(!isExpandedAddress);
  };

  return (
    <div className="user-settings-address container-div">
      <h2>
        Residence
        <span className="clickable-span" onClick={handleExpandAddress}>
          EDIT
        </span>
      </h2>
      <div className="user-address">
        <p>Address: {user.address}</p>
        <label></label>
        {isExpandedAddress && (
          <input
            className="user-input"
            type="text"
            id="address"
            name="address"
            placeholder="Enter Address"
            value={userSettings.address}
            onChange={(e) => handleAddressInputChange(e)}
          />
        )}
      </div>

      <div className="user-postal-code">
        <p>Postal Code: {user.postalCode}</p>
        <label></label>
        {isExpandedAddress && (
          <input
            className="user-input"
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Enter Postal Code"
            value={userSettings.postalCode}
            onChange={(e) => handleAddressInputChange(e)}
          />
        )}
      </div>

      <div className="user-city">
        <p>City: {user.city}</p>
        <label></label>
        {isExpandedAddress && (
          <input
            className="user-input"
            type="text"
            id="city"
            name="city"
            value={userSettings.city}
            placeholder="Enter City"
            onChange={(e) => handleAddressInputChange(e)}
          />
        )}
      </div>

      <button className="submit-button">SUBMIT</button>
    </div>
  );
}

export default AddressInfoForm;
