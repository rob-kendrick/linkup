import React from 'react';
import './MenuListItem.css';
import { Link } from 'react-router-dom';
import IoIosArrowBackSvg from '../../../assets/IoIosArrowBack.svg';

export interface MenuListItemProps {
    link: string;
    text: string;
    svgLogo: string;
}

function MenuListItem({ link, text, svgLogo }:MenuListItemProps) {
  return (
    <Link to={link}>
      <div className="mli__container">
        <img className="mli__icon" src={svgLogo} alt={text} />
        <p className="mli__text">{text}</p>
        <img alt={text} className="mli__rightarrow" src={IoIosArrowBackSvg} />
      </div>
      <hr className="mli__line" />

    </Link>

  );
}

export default MenuListItem;
