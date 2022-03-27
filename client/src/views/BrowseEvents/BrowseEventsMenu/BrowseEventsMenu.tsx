// @ts-nocheck

import React, {
  useState, useContext, useEffect, MouseEventHandler,
} from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ReactComponent as MdFormatListBulleted } from '../../../assets/MdFormatListBulleted.svg';
import { ReactComponent as FaRegMap } from '../../../assets/FaRegMap.svg';
import { ReactComponent as BiFilter } from '../../../assets/BiFilter.svg';
import './BrowseEventsMenu.css';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';
import browseEventsContext from '../../../contexts/browse-events.context';

function BrowseEventsMenu() {
  const navigate = useNavigate();
  const [dateSelected, setDateSelected] = useState<Date>(null);
  const [dates, setDates] = useState<Date[]>([]);

  const {
    filterByDate,
    toggleMapList,
    mapView,
  } = useContext<any>(browseEventsContext);

  useEffect(() => {
    const dateArr:Date[] = [];
    for (let i = 0; i <= 31; i += 1) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dateArr.push(date);
    }
    setDates(dateArr);
  }, []);

  const handleClickDate:MouseEventHandler = (thisDate) => {
    if (thisDate === dateSelected) {
      setDateSelected(null);
      filterByDate(null);
    } else {
      setDateSelected(thisDate);
      filterByDate(thisDate);
    }
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

      <div className="bem__selectors-dates">
        {dateList}
      </div>

      <div className="bem__selectors-btns">

        <button
          type="button"
          onClick={toggleMapList}
          className={`bem__selectors-btns-btn ${!mapView ? 'bem__selector-active' : ''}`}
        >
          <MdFormatListBulleted />
          <p>List</p>
        </button>

        <button
          type="button"
          onClick={toggleMapList}
          className={`bem__selectors-btns-btn ${mapView ? 'bem__selector-active' : ''}`}
        >
          <FaRegMap />
          <p>Map</p>
        </button>

        <button
          type="button"
          onClick={() => navigate('/events/filters')}
          className="bem__selectors-btns-btn bem__selectors-btns-btn-right"
        >
          <BiFilter />
          <p>Filter</p>
        </button>
      </div>
    </div>

  );
}

export default BrowseEventsMenu;
