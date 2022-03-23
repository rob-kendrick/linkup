import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderReturn() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>HeaderReturn</h3>
      <div className="space-around-delete">
        <button type="button" onClick={() => navigate(-1)}>Go Back</button>
        <div>Reset/Edit Button</div>
      </div>
    </div>
  );
}

export default HeaderReturn;
