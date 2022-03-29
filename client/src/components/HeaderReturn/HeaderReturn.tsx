/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SvgArrow } from '../../assets/IoIosArrowBack.svg';
import { ReactComponent as IphoneStatusBar } from '../../assets/IphoneStatusBar.svg';
import { LuEvent } from '../../utilities/types/Event';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import './headerReturn.css';

type props = {
  resetAvailability?: boolean;
  text?: string;
  passedResetFunction?: (args: boolean) => boolean;
  passedReturnFunction?: (args: void) => any
  luEvent?: LuEvent
};

function HeaderReturn({
  resetAvailability, text, passedResetFunction, passedReturnFunction, luEvent,
}: props) {
  const navigate = useNavigate();

  const returnFunction = () => {
    if (passedReturnFunction) {
      passedReturnFunction();
    } else navigate(-1);
  };

  return (
    <div className="hr">
      <div className="hr__statusBar">
        {/* <IphoneStatusBar style={{ width: '100%', height: '2rem' }} /> */}
      </div>
      <div className="hr__main">
        <div className="hr__container">
          <button className="hr__btn" type="button" onClick={returnFunction}>
            <SvgArrow />
          </button>
          {luEvent ? <div style={{ marginRight: '1rem' }}><ProfilePicture userPicture={luEvent.creator.profile_picture} size={20} alt={luEvent.description} /></div> : null}
          <div className="hr__txt">{text}</div>
        </div>
        <div className="hr__option" data-testid="hr__option">
          {passedResetFunction && resetAvailability ? <button className="hr__btnReset" type="button" onClick={() => passedResetFunction && passedResetFunction(true)}>Reset</button> : null}
        </div>
      </div>
    </div>
  );
}

export default React.memo(HeaderReturn);
