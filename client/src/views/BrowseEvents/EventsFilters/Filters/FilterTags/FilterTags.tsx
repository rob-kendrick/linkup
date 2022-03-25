import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderReturn from '../../../../../components/HeaderReturn/HeaderReturn';
import FilterTagsList from './FilterTagsList/FilterTagsList';

function FilterTags() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn text="Tags" />

      <FilterTagsList />
      {/* button should be 'ButtonLarge' component */}
      {/* button should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(-1)}>Apply</button>
    </div>
  );
}

export default FilterTags;
