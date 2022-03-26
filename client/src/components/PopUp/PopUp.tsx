import React from 'react';
import PopUpBtn from './PopUpBtn/PopUpBtn';

type props = {
  useCase: string;
};

function PopUp({ useCase }: props) {
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
      {useCase === 'signup'
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
