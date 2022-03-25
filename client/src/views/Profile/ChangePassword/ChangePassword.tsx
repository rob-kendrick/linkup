import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';

function ChangePassword() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn />
      <h3>ChangePassword</h3>
      <InputTextField />
      <InputTextField />

      {/* button should be 'ButtonLarge' component */}
      {/* button should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(-1)}>Apply</button>
    </div>
  );
}

export default ChangePassword;
