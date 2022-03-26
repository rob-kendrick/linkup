/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

type Props = {
    text: string;
    // role: (args: boolean) => boolean;
}

function PopUpBtn({ text }: Props) {
  return (
    <button type="button">
      {' '}
      {text}
      {' '}
    </button>
  );
}

export default PopUpBtn;
