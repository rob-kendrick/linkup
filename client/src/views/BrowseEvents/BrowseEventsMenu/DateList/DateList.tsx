import React from 'react';
import ButtonDate from './ButtonDate/ButtonDate';

function DateList() {
  return (
    <div>
      <div>DateList</div>
      <div className="flex-row-delete">
        <ButtonDate />
        <ButtonDate />
      </div>
    </div>
  );
}

export default DateList;
