import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputFieldSimple from '../../../components/Form/InputFieldSimple/InputFieldSimple';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';

function ChangePassword() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn />
      <h3>ChangePassword</h3>
      <InputFieldSimple />
      <InputFieldSimple />

      {/* button should be 'ButtonLarge' component */}
      {/* button should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(-1)}>Apply</button>
    </div>
  );
}

export default ChangePassword;
