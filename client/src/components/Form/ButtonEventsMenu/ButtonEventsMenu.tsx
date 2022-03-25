import React from 'react';
import './ButtonEventsMenu.css'

interface buttonName {
  name : string;
}

function ButtonEventsMenu({ name } : buttonName) {
  return (
    <div>
      <button className="button-small" type="button">{name}</button>
    </div>
  );
}

export default ButtonEventsMenu;
