import React from 'react';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import InputFieldSimple from '../../../components/Form/InputFieldSimple/InputFieldSimple';
import InputFieldTitle from '../../../components/Form/InputFieldTitle/InputFieldTitle';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';

function SignUp() {
  return (
    <div>
      <h3>SignUp</h3>
      <InputPhoto />
      <InputFieldTitle />
      <InputFieldTitle />
      <InputFieldSimple />
      <InputFieldSimple />
      <InputFieldSimple />
      <ButtonLarge />
    </div>
  );
}

export default SignUp;
