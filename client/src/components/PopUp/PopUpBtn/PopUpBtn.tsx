import React from 'react';
import './popUpBtn.css';

type Props = {
  text: string;
  hidePopup: () => void;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

function PopUpBtn({ text, hidePopup, onClick }: Props) {
  if (text === 'Linkup') {
    return (
      <button className="pubtn__btn pubtn__btn--color" type="button" onClick={() => { hidePopup(); onClick!(); }}>
        {' '}
        <p className="pubtn__txt">{text}</p>
        {' '}
      </button>
    );
  }

  if (text === 'Yes, Cancel') {
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
