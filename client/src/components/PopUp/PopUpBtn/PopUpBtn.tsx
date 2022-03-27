/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  text: string;
  hidePopup: () => void;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

function PopUpBtn({ text, hidePopup, onClick }: Props) {
  if (text === 'Linkup' || text === 'Yes, Cancel') {
    return (
      <div>
        <button type="button" onClick={() => { hidePopup(); onClick!(); }}>
          {' '}
          {text}
          {' '}
        </button>
      </div>
    );
  }

  return (
    <div>
      <button type="button" onClick={() => { hidePopup(); }}>
        {' '}
        {text}
        {' '}
      </button>
    </div>

  );
}

export default PopUpBtn;
