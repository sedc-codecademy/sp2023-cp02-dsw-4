function AddressInfoForm() {
  return (
    <form className="dataForm addressInfoFrom" onSubmit={(e) => {e.preventDefault()}}>
      <div className="inputContainer">
        <p>Street: Boulevard Ilinden</p>
        <div>
          <input
            type="text"
            maxLength="22"
            minLength="8"
            name="street"
            required
            placeholder=""
          ></input>
          <label htmlFor="street">Street Address</label>
        </div>
      </div>
      <div className="inputContainer">
        <p>City: Skopje</p>
        <div>
          <input
            type="text"
            maxLength="22"
            minLength="8"
            name="city"
            required
            placeholder=""
          ></input>
          <label htmlFor="city">City</label>
        </div>
      </div>
      <div className="inputContainer">
        <p>Postal Code: 1000</p>
        <div>
          <input
            name="postal"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            required
            placeholder=""
          ></input>
          <label htmlFor="postal">Postal Code</label>
        </div>
      </div>
    </form>
  );
}

export default AddressInfoForm;
