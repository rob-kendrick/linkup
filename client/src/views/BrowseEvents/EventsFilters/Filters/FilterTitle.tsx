import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from '../../../../components/EventsList/EventsList';
import SearchField from '../../../../components/Form/SearchField/SearchField';
import HeaderReturn from '../../../../components/HeaderReturn/HeaderReturn';

function FilterTitle() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn text="Title" />
      <SearchField />
      {/* <EventList /> */}
      {/* button should be 'ButtonLarge' component */}
      {/* button should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(-1)}>Apply</button>
    </div>
  );
}

export default FilterTitle;
