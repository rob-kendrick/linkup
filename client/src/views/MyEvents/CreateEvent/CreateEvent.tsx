import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import InputFieldTitle from '../../../components/Form/InputFieldTitle/InputFieldTitle';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import MapSmall from '../../../components/MapSmall/MapSmall';

function CreateEvent() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn />
      <h3>CreateEvent</h3>
      {/* <InputFieldTitle />
      <InputFieldTitle />
      <InputFieldTitle /> */}
      <MapSmall />
      {/* the following line should be a 'ButtonLarge' component */}
      <button type="button" onClick={() => navigate('/myevents/create/participants')}>Add Participants</button>
      <ButtonLarge />
    </div>
  );
}

export default CreateEvent;
