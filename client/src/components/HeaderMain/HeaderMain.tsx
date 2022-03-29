import React from 'react';
import './HeaderMain.css';

function HeaderMain({ title }:{title:string}) {
  return (
    <div
      className="hm__title"
    >
      <h3>
        {title}
      </h3>
    </div>
  );
}

export default HeaderMain;
