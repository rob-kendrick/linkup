/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SvgArrow } from '../../assets/IoIosArrowBack.svg';
import { ReactComponent as IphoneStatusBar } from '../../assets/IphoneStatusBar.svg';
import './headerReturn.css';

type props = {
  resetAvailability?: boolean;
  text?: string;
  passedFunction?: (args: boolean) => boolean;
};

function HeaderReturn({ resetAvailability, text, passedFunction }: props) {
  const navigate = useNavigate();

  return (
    <div className="hr">
      <div className="hr__statusBar">
        <IphoneStatusBar style={{ width: '100%', height: '2rem' }} />
      </div>
      <div className="hr__main">
        <div className="hr__container">
          <button className="hr__btn" type="button" onClick={() => navigate(-1)}>
            <SvgArrow />
          </button>
          <div className="hr__txt">{text}</div>
        </div>
        <div className="hr__option" data-testid="hr__option">
          {passedFunction && resetAvailability ? <button className="hr__btnReset" type="button" onClick={() => passedFunction && passedFunction(true)}>Reset</button> : null}
        </div>
      </div>
    </div>
  );
}

export default React.memo(HeaderReturn);