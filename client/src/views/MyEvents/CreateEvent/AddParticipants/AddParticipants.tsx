import React from 'react';
import HeaderReturn from '../../../../components/HeaderReturn/HeaderReturn';
import SelectUsers from '../../../../components/SelectUsers/SelectUsers';

function AddParticipants() {
  return (
    <div>
      <HeaderReturn />
      <h3>AddParticipants</h3>
      <SelectUsers />
    </div>
  );
}

export default AddParticipants;
