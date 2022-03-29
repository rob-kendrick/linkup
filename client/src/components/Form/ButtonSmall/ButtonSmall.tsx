import React from 'react';
import './ButtonSmall.css';

interface ButtonProps {
style : string
type: string
value: string
}

function ButtonSmall({ style, type, value } : ButtonProps) {
  return (
    <div>
      {(style === 'fill')
        && (
          <input
            className="bs__button bs__button-fill"
            type={type}
            value={value}
          />
        )}
      {(style === 'grey')
        && (
          <input
            className="bs__button bs__button-grey"
            type={type}
            value={value}
          />
        )}
      {(style === 'stroke')
        && (
        <div className="bs__button bs__button-stroke-container">
          <input
            className="bs__button bs__button-stroke bs__button-grey"
            type={type}
            value={value}
            form="test"
          />
        </div>
        )}
    </div>
  );
}

export default ButtonSmall;
