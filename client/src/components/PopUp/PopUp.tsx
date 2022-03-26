import React from 'react';
import PopUpBtn from './PopUpBtn/PopUpBtn';

function PopUp(role: string) {
  // const linkupHandler:roleFunction = () => {
  //   console.log('linkup');
  //   return true;
  // };

  // const leaveEventHandler = () => {
  //   console.log('leave event');
  // };

  // const hidePopUp = (arg:string) => {
  // console.log('hide popout');
  // };

  return (
    <div className="pu__container">
      {role === 'signup'
        ? (
          <div>
            {' '}
            BODY SIGN IN
            <PopUpBtn text="Cancel" />
          </div>
        )
        : (
          <div>
            {' '}
            Body leave
            <PopUpBtn
              text="No"
            />
          </div>
        )}
    </div>
  );
}

export default PopUp;
