import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import MapSmall from '../../../components/MapSmall/MapSmall';

function CreateEvent() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn />
      <h3>CreateEvent</h3>
      <InputTextField />
      <InputTextField />
      <InputTextField />
      <MapSmall />
      {/* the following line should be a 'ButtonLarge' component */}
      <button type="button" onClick={() => navigate('/myevents/create/participants')}>Add Participants</button>
      <ButtonLarge />
    </div>
  );
}

export default CreateEvent;
