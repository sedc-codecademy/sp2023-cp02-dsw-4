import { useDispatch, useSelector } from "react-redux";
import {
  updateUserInfo,
  updatePasswordInfo,
  updateAddressInfo,
  updateCardInfo,
} from "../../store/slices/userSettings/userSettingsSlices";

import ProfilePicture from "./profilePicture/profilePicture";
import UserInfoForm from "./userInfoForm/userInfoForm";
import PasswordInfoForm from "./passwordInfoForm/passwordInfoForm";
import AddressInfoForm from "./addressInfoForm/addressInfoForm";
import CardInfoForm from "./cardInfoForm/cardInfoForm";

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
      <div className="user-parent-settings">
        <ProfilePicture />

        <UserInfoForm handleUserInputChange={handleUserInputChange} />

        <PasswordInfoForm
          handlePasswordInputChange={handlePasswordInputChange}
        />

        <AddressInfoForm handleAddressInputChange={handleAddressInputChange} />

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
        {/* <CardInfoForm handleCardInputChange={handleCardInputChange} /> */}
      </div>
    </main>
  );
}

export default UserSettings;
