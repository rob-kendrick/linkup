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
import FilterTags from '../EventsFilters/Filters/FilterTags/FilterTags';

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
    if (currentFilter === 'Title') inputField.current.focus();
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
    <div
      className="bem__fitlerbar-dates-item-container"
      key={el.toString()}
    >
      <button
        onClick={() => handleClickDate(el)}
        className={`bem__fitlerbar-dates-item-btn ${dateSelected === el ? 'bem__selector-active' : ''}`}
        type="button"
      >
        <span className="bem__fitlerbar-dates-item-details">{moment(el).format('ddd')}</span>
        <span className="bem__fitlerbar-dates-item-details">{moment(el).format('DD')}</span>
      </button>
      <span className="bem__fitlerbar-dates-item-spacer" />
    </div>
  ));

  return (
    <div className="bem__container">

      <HeaderMain title="Browse Activities" />

      <div className="bem__filterbar-container">
        {currentFilter === 'Date' && (
          <div className="bem__fitlerbar-dates">
            {dateList}
          </div>
        )}

        {currentFilter === 'Title' && (
          <InputTextField
            ref={inputField}
            onChange={handleTitleSearchChange}
            type="text"
            label={`Search ${currentFilter}`}
            value={titleSearchValue}
          />
        )}

        {currentFilter === 'Tags' && (
          <FilterTags filterByTag={props.filterByTag} />
        )}
      </div>

      <div className="bem__btns-container">
        <div className="bem_btns-listmap">
          <button
            type="button"
            onClick={props.toggleMapList}
            className={`bem__btns-btn ${!props.mapView ? 'bem__selector-active' : ''}`}
          >
            <MdFormatListBulleted />
            <span>List</span>
          </button>

          <button
            type="button"
            onClick={props.toggleMapList}
            className={`bem__btns-btn  ${props.mapView ? 'bem__selector-active' : ''}`}
          >
            <FaRegMap />
            <span>Map</span>
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={handleClickFilter}
            className={`bem__btns-btn ${showDropDown ? 'bem__selector-active' : ''}`}
          >
            <BiFilter />
            Filter
          </button>
          {showDropDown && (
          <DropDown
            currentFilter={currentFilter}
            handleSelectDropDown={handleSelectDropDown}
          />
          )}
        </div>
      </div>

    </div>

  );
}

export default BrowseEventsMenu;
