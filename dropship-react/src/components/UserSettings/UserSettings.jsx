import { useDispatch, useSelector } from "react-redux";
import {
  updateUserInfo,
  updatePasswordInfo,
  updateAddressInfo,
  updateCardInfo,
} from "../../store/slices/userSettings/userSettingsSlices";

import ProfilePicture from "./profilePicture/ProfilePicture";
import UserInfoForm from "./userInfoForm/UserInfoForm";
import PasswordInfoForm from "./passwordInfoForm/PasswordInfoForm";
import AddressInfoForm from "./addressInfoForm/AddressInfoForm";
import CardInfoForm from "./cardInfoForm/CardInfoForm";

function UserSettings() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;

    // dispatch(updateUserInfo({ ...userSettings.userInfo, [name]: value }));

    console.log(e.target);

    dispatch(updateUserInfo({ name, value }));
  };

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;

    // dispatch(updateAddressInfo({ ...userSettings.addressInfo, [name]: value }));
    dispatch(updateAddressInfo({ name, value }));
  };

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      // updatePasswordInfo({ ...userSettings.passwordInfo, [name]: value })
      updatePasswordInfo({ name, value })
    );
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;

    // dispatch(updateCardInfo({ ...userSettings.cardInfo, [name]: value }));
    dispatch(updateCardInfo({ name, value }));
  };

  return (
    <main className="user-settings-main">
      <ProfilePicture />

      <section className="info-section">
        <UserInfoForm handleUserInputChange={handleUserInputChange} />

        <div className="user-settings-div">
          <AddressInfoForm
            handleAddressInputChange={handleAddressInputChange}
          />
          <PasswordInfoForm
            handlePasswordInputChange={handlePasswordInputChange}
          />
        </div>
      </section>

      <section className="card-section">
        {user.cards.length ? (
          <>
            {user.cards.map((card) => (
              <CardInfoForm
                handleCardInputChange={handleCardInputChange}
                key={card.id}
                cardObject={card}
              />
            ))}
          </>
        ) : (
          <div>The user has not provided a card.</div>
        )}
      </section>
    </main>
  );
}

export default UserSettings;
