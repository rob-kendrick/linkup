// @ts-nocheck

import React, {
  useState, useEffect, MouseEventHandler, useRef,
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
  const navigate = useNavigate();
  const [dateSelected, setDateSelected] = useState<string|null>(null);
  const [titleSearchValue, setTitleSearchValue] = useState<string|undefined>(undefined);
  const [dates, setDates] = useState<Date[]>([]);
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const inputField = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const dateArr:Date[] = [];
    for (let i = 0; i <= 31; i += 1) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dateArr.push(date);
    }
    setDates(dateArr);
  }, []);

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
  const handleTitleSearchChange:InputEvent = (e) => {
    const input = e.target.value;
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
        <div
          role="switch"
          aria-hidden="true"
          tabIndex={0}
          className=""
          onClick={handleClickSearch}
        >
          <HiSearch />
        </div>
        <button
          type="button"
          onClick={() => navigate('/events/filters')}
          className="bem__selectors-btns-btn bem__selectors-btns-btn-right"
        >
          <BiFilter />
          <p>Filter</p>
        </button>

        <div />
      </div>
    </div>

  );
}

export default BrowseEventsMenu;
