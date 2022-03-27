import React from 'react';
import './popUpBtn.css';

type Props = {
  text: string;
  hidePopup: () => void;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

function PopUpBtn({ text, hidePopup, onClick }: Props) {
  if (text === 'Linkup' || text === 'Yes, Cancel') {
    return (
      <button className="pubtn__btn" type="button" onClick={() => { hidePopup(); onClick!(); }}>
        {' '}
        <p className="pubtn__txt">{text}</p>
        {' '}
      </button>
    );
  }

  return (
    <button className="pubtn__btn" type="button" onClick={() => { hidePopup(); }}>
      {' '}
      <p className="pubtn__txt">{text}</p>
      {' '}
    </button>

  );
}

export default PopUpBtn;
