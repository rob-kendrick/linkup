import React from 'react';
import './popUpBtn.css';

type Props = {
  text: string;
  setShowPopup: Function;
  // eslint-disable-next-line react/require-default-props
  onClick?: any;
}

function PopUpBtn({
  text, setShowPopup, onClick,
}: Props) {
  if (text === 'Linkup') {
    return (
      <button
        className="pubtn__btn pubtn__btn--color"
        type="button"
        onClick={() => {
          setShowPopup(false);
        onClick!();
        }}
      >
        {' '}
        <p className="pubtn__txt">{text}</p>
        {' '}
      </button>
    );
  }
  if (text === 'Ok') {
    return (
      <button
        className="pubtn__singleBtn pubtn__btn--color"
        type="button"
        onClick={() => {
          setShowPopup(false);
          onClick!();
        }}
      >
        {' '}
        <p className="pubtn__txt">{text}</p>
        {' '}
      </button>
    );
  }
  return (
    <button
      className="pubtn__btn"
      type="button"
      onClick={() => {
        setShowPopup(false);
      onClick!();
      }}
    >
      {' '}
      <p className="pubtn__txt">{text}</p>
      {' '}
    </button>
  );
}

export default PopUpBtn;
