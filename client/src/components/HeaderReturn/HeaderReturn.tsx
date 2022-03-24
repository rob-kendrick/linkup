import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SvgArrow } from '../../assets/IoIosArrowBack.svg';
import './headerReturn.css';

type HeaderReturnProps = {
  option?: boolean
};

function HeaderReturn(props: HeaderReturnProps) {
  const navigate = useNavigate();
  // const { option, text } = props;
  const option = true;
  const text = 'Create activity';
  return (
    <div className="headerReturn">
      <div className="headerReturn__container">
        <button className="headerReturn__btn" type="button" onClick={() => navigate(-1)}>
          <SvgArrow />
        </button>
        <div className="headerReturn__txt">{text}</div>
      </div>
      {option ? <div className="headerReturn__option--visible"><p>Reset</p></div>
        : <div className="headerReturn__option--hidden" />}
    </div>
  );
}

export default HeaderReturn;
