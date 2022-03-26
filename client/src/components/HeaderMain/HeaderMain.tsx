import React from 'react';
import './HeaderMain.css';

function HeaderMain({ title }:{title:string}) {
  return (
    <h3
      className="hm__title"
    >
      {title}
    </h3>
  );
}

export default HeaderMain;
