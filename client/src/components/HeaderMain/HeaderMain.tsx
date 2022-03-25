import React from 'react';
import './HeaderMain.css';

function HeaderMain({ title }:{title:string}) {
  return (
    <h2
      className="hm__title"
    >
      {title}
    </h2>
  );
}

export default HeaderMain;
