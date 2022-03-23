import React from 'react';
import HeaderReturn from '../../../../components/HeaderReturn/HeaderReturn';
import SelectUsers from '../../../../components/SelectUsers/SelectUsers';

function FilterHosts() {
  return (
    <div>
      <HeaderReturn />
      <h3>FilterHosts</h3>
      <SelectUsers />
    </div>
  );
}

export default FilterHosts;
