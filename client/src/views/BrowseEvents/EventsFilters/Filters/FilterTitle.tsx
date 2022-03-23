import React from 'react';
import EventList from '../../../../components/EventsList/EventsList';
import SearchField from '../../../../components/Form/SearchField/SearchField';
import HeaderReturn from '../../../../components/HeaderReturn/HeaderReturn';

function FilterTitle() {
  return (
    <div>
      <HeaderReturn />
      <h3>FilterTitle</h3>
      <SearchField />
      <EventList />
    </div>
  );
}

export default FilterTitle;
