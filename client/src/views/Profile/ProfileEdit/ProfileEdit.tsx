import React from 'react';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import InputFieldTitle from '../../../components/Form/InputFieldTitle/InputFieldTitle';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';

function ProfileEdit() {
  return (
    <div>
      <HeaderReturn />
      <h3>ProfileEdit</h3>
      <InputPhoto />
      <InputFieldTitle />
      <InputFieldTitle />
      <InputFieldTitle />
      <ButtonLarge />
    </div>
  );
}

export default ProfileEdit;
