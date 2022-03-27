// @ts-nocheck
import React, {
  useState, useEffect, MouseEventHandler, useRef, ChangeEvent, FormEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ReactComponent as MdFormatListBulleted } from '../../../assets/MdFormatListBulleted.svg';
import { ReactComponent as FaRegMap } from '../../../assets/FaRegMap.svg';
import { ReactComponent as BiFilter } from '../../../assets/BiFilter.svg';
import { ReactComponent as HiSearch } from '../../../assets/HiSearch.svg';

import './BrowseEventsMenu.css';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';

import FaUsers from '../../../assets/FaUsers.svg';
import FaUser from '../../../assets/FaUser.svg';
import HiLockClosed from '../../../assets/HiLockClosed.svg';
import BiCalenderHeart from '../../../assets/BiCalendarHeart.svg';
import MdTitle from '../../../assets/MdTitle.svg';
import AiFillTag from '../../../assets/AiFillTag.svg';

interface myProps {
  props : {
    mapView: any
    filterByTitle: any
    toggleMapList: any
    filterByDate: any
  }
}

function BrowseEventsMenu({
  props,
}: myProps) {
  const [dateSelected, setDateSelected] = useState<string|null>(null);
  const [titleSearchValue, setTitleSearchValue] = useState<string>('');
  const [dates, setDates] = useState<Date[]>([]);
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const inputField = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [currentFilter, setCurrentFilter] = useState<string>('Date');

  useEffect(() => {
    const dateArr:Date[] = [];
    for (let i = 0; i <= 31; i += 1) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dateArr.push(date);
    }
    setDates(dateArr);
  }, []);

  useEffect(() => {
    console.log(currentFilter);
  }, [currentFilter]);

  React.useEffect(() => {
    if (showSearchbar) inputField.current.focus();
  }, [showSearchbar]);

  const handleClickDate:MouseEventHandler|any = (thisDate:string) => {
    if (thisDate === dateSelected) {
      setDateSelected(null);
      props.filterByDate(null);
    } else {
      setDateSelected(thisDate);
      props.filterByDate(thisDate);
    }
  };

  const handleClickSearch:MouseEventHandler = () => {
    setShowSearchbar(!showSearchbar);
  };

  const handleTitleSearchChange:any = (e: ChangeEvent<HTMLInputElement>):void => {
    const input:string = e.target.value;
    console.log(input);

    setTitleSearchValue(input);
    props.filterByTitle(input);
  };

  const dateList = dates.map((el:any) => (
    <button
      onClick={() => handleClickDate(el)}
      key={el.toString()}
      className={`bem__selectors-dates-item ${dateSelected === el ? 'bem__selector-active' : ''}`}
      type="button"
    >
      <p className="bem__selectors-dates-item-details">{moment(el).format('ddd')}</p>
      <p className="bem__selectors-dates-item-details">{moment(el).format('DD')}</p>
    </button>
  ));

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const handleOpenDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSelectDropDown = (filter) => {
    setShowDropDown(false);
    setCurrentFilter(filter);
    handleClickSearch();
  };

  return (
    <div className="bem__container">
      <HeaderMain title="Browse Activities" />
      <div className="bem-selectors-toggle">
        {!showSearchbar && (
        <div className="bem__selectors-dates">
          {dateList}
        </div>
        )}
        {showSearchbar && (
        <InputTextField
          ref={inputField}
          onChange={handleTitleSearchChange}
          className="bem__selectors-searchbar"
          type="text"
          label="Search Title"
          value={titleSearchValue}
        />
        )}
      </div>

      <div className="bem__selectors-btns">

        <button
          type="button"
          onClick={props.toggleMapList}
          className={`bem__selectors-btns-btn ${!props.mapView ? 'bem__selector-active' : ''}`}
        >
          <MdFormatListBulleted />
          <p>List</p>
        </button>

        <button
          type="button"
          onClick={props.toggleMapList}
          className={`bem__selectors-btns-btn ${props.mapView ? 'bem__selector-active' : ''}`}
        >
          <FaRegMap />
          <p>Map</p>
        </button>
        {/* <div
          role="switch"
          aria-hidden="true"
          tabIndex={0}
          className=""
          onClick={handleClickSearch}
        >
          <HiSearch />
        </div> */}

        <div className="bem__selectors-fitlers bem__selectors-btns-btn-right">
          <button
            type="button"
            onClick={handleOpenDropDown}
            className={`bem__selectors-fitlers bem__selectors-btns-btn ${showDropDown ? 'bem__selector-active' : ''}`}
          >
            <BiFilter />
            <p>Filter</p>
          </button>
          <div className={`bem__selectors-filters-drop-down ${showDropDown ? 'bem__selectors-drop-down-show' : ''}`}>
            <DropDown
              currentFilter={currentFilter}
              handleSelectDropDown={handleSelectDropDown}
            />
          </div>

        </div>

        <div />
      </div>
    </div>

  );
}

export default BrowseEventsMenu;

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
    <div className={`dd__item-wrapper ${currentFilter === el.text ? 'dd__item-wrapper-hide' : ''}`}>

      <div
        className="dd__item"
        onClick={() => handleSelectDropDown(el.text)}
      >
        <img className="dd__item-icon" src={el.svgLogo} />
        <p className="dd__item-text">{el.text}</p>

      </div>
      <hr className="dd_item-line" />
    </div>

  ));

  return (
    <>
      { dropDown }
    </>

  );
}
