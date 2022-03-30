// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderReturn from '../../../../components/HeaderReturn/HeaderReturn';
import ProfilePicture from '../../../../components/ProfilePicture/ProfilePicture';
import ButtonLarge from '../../../../components/Form/ButtonLarge/ButtonLarge';
import userApi from '../../../../utilities/api/user.api';

import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import './UserDetails.css';

function UserDetails() {
  const params = useParams();

  const userId = Number(params.userid);

  const [user, setUser] = useState(null);

  const getUser = () => {
    const userdata = userApi.getUserById(userId)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {user
        ? (
          <div>
            <HeaderReturn />
            <div className="uds__container-main">
              <h3 id="uds__title">UserDetails</h3>
              <div className="uds__container-inner">
                <div className="uds__photo-container">
                  <ProfilePicture
                    userPicture={user.profile_picture}
                    alt={user.first_name}
                    userName={user.first_name}
                  />
                </div>
                <div className="uds__info-container">
                  <div>
                    <h4>
                      {user.first_name}
                      {' '}
                      {user.last_name}
                    </h4>
                  </div>
                  <div>
                    {user.bio}
                  </div>
                </div>
              </div>
              <div className="uds__button-btn">
                <ButtonLarge
                  type="button"
                  value="Friend / Unfriend"
                  style="stroke"
                />
              </div>
            </div>
          </div>
        )
        : (<LoadingSpinner />)}
    </div>
  );
}

export default UserDetails;
