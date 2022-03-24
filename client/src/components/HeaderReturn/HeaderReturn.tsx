import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgArrow from '../../assets/IoIosArrowBack.svg';

function HeaderReturn() {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        <SvgArrow />
      </button>
      <div>Text</div>
      <div>Reset</div>
    </div>
  );
}

export default HeaderReturn;
