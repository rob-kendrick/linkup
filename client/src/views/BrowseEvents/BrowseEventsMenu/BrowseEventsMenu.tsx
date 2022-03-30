// @ts-nocheck
import React, {
  useState, useEffect, MouseEventHandler, useRef, ChangeEvent,
} from 'react';
import moment from 'moment';
import { ReactComponent as MdFormatListBulleted } from '../../../assets/MdFormatListBulleted.svg';
import { ReactComponent as FaRegMap } from '../../../assets/FaRegMap.svg';
import { ReactComponent as BiFilter } from '../../../assets/BiFilter.svg';

import './BrowseEventsMenu.css';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';

import DropDown from './DropDown/DropDown';

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
  const [datesNextMonth, setDatesNextMonth] = useState<Date[]>([]);
  const inputField = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [currentFilter, setCurrentFilter] = useState<string>('Date');
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  // on first run render all dates for next month
  useEffect(() => {
    const dateArr:Date[] = [];
    for (let i = 0; i <= 31; i += 1) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dateArr.push(date);
    }
    setDatesNextMonth(dateArr);
  }, []);

  // when filter is changes, auto focus the search field
  useEffect(() => {
    if (currentFilter !== 'Date') inputField.current.focus();
  }, [currentFilter]);

  // handle date filter and pass trigger function on parent
  const handleClickDate:MouseEventHandler|any = (thisDate:string) => {
    if (thisDate === dateSelected) {
      setDateSelected(null);
      props.filterByDate(null);
    } else {
      setDateSelected(thisDate);
      props.filterByDate(thisDate);
    }
  };

  const handleTitleSearchChange:any = (e: ChangeEvent<HTMLInputElement>):void => {
    const input:string = e.target.value;
    setTitleSearchValue(input);
    props.filterByTitle(input);
  };

  const handleClickFilter = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSelectDropDown = (filter) => {
    setShowDropDown(false);
    setCurrentFilter(filter);
  };

  // render date list
  const dateList = datesNextMonth.map((el:any) => (
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

        {currentFilter === 'Date' && (
          <div className="bem__selectors-dates">
            {dateList}
          </div>
        )}

        {currentFilter !== 'Date' && (
          <InputTextField
            ref={inputField}
            onChange={handleTitleSearchChange}
            className="bem__selectors-searchbar"
            type="text"
            label={`Search ${currentFilter}`}
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

        <div className="bem__selectors-fitlers bem__selectors-btns-btn-right">
          <button
            type="button"
            onClick={handleClickFilter}
            className={`bem__selectors-fitlers bem__selectors-btns-btn ${showDropDown ? 'bem__selector-active' : ''}`}
          >
            <BiFilter />
            <p>Filter</p>
          </button>
          {showDropDown && (
            <DropDown
              currentFilter={currentFilter}
              handleSelectDropDown={handleSelectDropDown}
            />
          )}
        </div>

        <div />
      </div>
    </div>

  );
}

export default BrowseEventsMenu;
