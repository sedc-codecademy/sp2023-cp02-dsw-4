import { useState } from "react";
import { useSelector } from "react-redux";

function CardInfoForm({ cardObject, handleCardInputChange }) {
  const userSettings = useSelector((state) => state.userSettings.cardInfo);
  const [isExpandedCard, setIsExpandedCard] = useState(true);
  // console.log(userSettings)

  const handleExpandCard = () => {
    setIsExpandedCard(!isExpandedCard);
  };

  return (
    <div className="user-settings-card">
      <h2>Card</h2>
      <span onClick={handleExpandCard}>EDIT</span>
      <div className="card-number">
        <p>Card Number: {cardObject.cardNumber}</p>
        <label></label>
        {isExpandedCard && (
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter Card Number"
            value={userSettings.cardNumber}
            onChange={(e) => handleCardInputChange(e)}
          />
        )}
      </div>

      <div className="card-holder">
        <p>Card Holder: {cardObject.cardHolder}</p>
        <label></label>
        {isExpandedCard && (
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            placeholder="Enter Card Holder"
            value={userSettings.cardHolder}
            onChange={(e) => handleCardInputChange(e)}
          />
        )}
      </div>

      <div className="expiration-date">
        <p>Expiration Date: {cardObject.expirationDate}</p>
        <label></label>
        {isExpandedCard && (
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="Enter Expiration Date"
            value={userSettings.expirationDate}
            onChange={(e) => handleCardInputChange(e)}
          />
        )}
      </div>

      <div className="security-code">
        <p>Security Code: {cardObject.securityCode}</p>
        <label></label>
        {isExpandedCard && (
          <input
            type="text"
            id="securityCode"
            name="securityCode"
            placeholder="Enter Security Code"
            value={userSettings.securityCode}
            onChange={(e) => handleCardInputChange(e)}
          />
        )}
      </div>

      <div className="card-type">
        <p>Card Type: {cardObject.cardType}</p>
        <label></label>
        {isExpandedCard && (
          <input
            type="text"
            id="cardType"
            name="cardType"
            placeholder="Enter Card Type"
            value={userSettings.cardType}
            onChange={(e) => handleCardInputChange(e)}
          />
        )}
      </div>

      <div className="card-status">
        <p>Card Status: {cardObject.cardStatus}</p>
        <label></label>
        {isExpandedCard && (
          <input
            type="text"
            id="cardStatus"
            name="cardStatus"
            placeholder="Enter Card Status"
            value={userSettings.cardStatus}
            onChange={(e) => handleCardInputChange(e)}
          />
        )}
      </div>

      <button>Submit</button>
    </div>
  );
}

export default CardInfoForm;
