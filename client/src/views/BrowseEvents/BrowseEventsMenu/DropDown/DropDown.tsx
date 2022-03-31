// @ts-nocheck
import React from 'react';
import FaUsers from '../../../../assets/FaUsers.svg';
import FaUser from '../../../../assets/FaUser.svg';
import BiCalenderHeart from '../../../../assets/BiCalendarHeart.svg';
import MdTitle from '../../../../assets/MdTitle.svg';
import AiFillTag from '../../../../assets/AiFillTag.svg';
import './DropDown.css';

const dropDownData = [
  {
    text: 'Date',
    svgLogo: BiCalenderHeart,
  },
  {
    text: 'Title',
    svgLogo: MdTitle,
  },
  {
    text: 'Tags',
    svgLogo: AiFillTag,
  },
  {
    text: 'Host',
    svgLogo: FaUser,
  },
  {
    text: 'Participants',
    svgLogo: FaUsers,
  },

];

function DropDown({ handleSelectDropDown, currentFilter }:any) {
  const dropDown = dropDownData.map((el) => (
    <div
      key={el.text}
      className="dd__item-wrapper"
    >
      <div
        className={`dd__item ${currentFilter === el.text ? 'dd__item-active' : ''}`}
        onClick={() => handleSelectDropDown(el.text)}
      >
        <img alt={el.text} className="dd__item-icon" src={el.svgLogo} />
        <p className="dd__item-text">{el.text}</p>

      </div>
      <hr className="dd_item-line" />
    </div>

  ));

  return (
    <div className="dd__container">
      { dropDown }
    </div>

  );
}

export default DropDown;
