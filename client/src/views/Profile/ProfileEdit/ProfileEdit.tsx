import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputFieldTitle from '../../../components/Form/InputFieldTitle/InputFieldTitle';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';

function ProfileEdit() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn />
      <h3>ProfileEdit</h3>
      <InputPhoto />
      {/* <InputFieldTitle />
      <InputFieldTitle />
      <InputFieldTitle /> */}
      {/* button should be 'ButtonLarge' component */}
      {/* button should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(-1)}>Apply</button>
    </div>
  );
}

export default ProfileEdit;
