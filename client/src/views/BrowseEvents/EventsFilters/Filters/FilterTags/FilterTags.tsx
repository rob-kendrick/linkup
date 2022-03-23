import React from 'react';
import HeaderReturn from '../../../../../components/HeaderReturn/HeaderReturn';
import FilterTagsList from './FilterTagsList/FilterTagsList';

function FilterTags() {
  return (
    <div>
      <HeaderReturn />
      <h3>FilterTags</h3>
      <FilterTagsList />
    </div>
  );
}

export default FilterTags;
