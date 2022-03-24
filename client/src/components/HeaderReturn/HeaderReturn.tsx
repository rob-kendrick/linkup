import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderReturn() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Arrow</div>
      <div>Text</div>
      <div>Reset</div>
    </div>
  );
}

export default HeaderReturn;
