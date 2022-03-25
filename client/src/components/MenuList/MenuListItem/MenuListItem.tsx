import React from 'react';
import './MenuListItem.css';
import { Link } from 'react-router-dom';

export interface MenuListItemProps {
    link: string;
    text: string;
    svgLogo: string;
}

function MenuListItem({ link, text, svgLogo }:MenuListItemProps) {
  return (
    <Link to={link}>
      <div className="MenuListItem">
        <img className="mli_icon" src={svgLogo} alt={text} />
        <p className="mli_text">{text}</p>
        <span className="mli-rightarrow">&#5171;</span>
      </div>
      <hr />

    </Link>

  );
}

export default MenuListItem;