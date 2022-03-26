import React from 'react';
import './ButtonLarge.css';

function ButtonLarge({ type, value, style }:{type:string, value:string, style:string}) {
  return (
    <div>
      {(style === 'fill')
        && (
          <input
            className="bl__button bl__button-fill"
            type={type}
            value={value}
          />
        )}
      {(style === 'black')
        && (
          <input
            className="bl__button bl__button-black"
            type={type}
            value={value}
          />
        )}
      {(style === 'stroke')
        && (
        <div className="bl__button bl__button-stroke-container">
          <input
            className="bl__button bl__button-stroke"
            type={type}
            value={value}
            form="test"
          />
        </div>
        )}
    </div>
  );
}

export default ButtonLarge;
