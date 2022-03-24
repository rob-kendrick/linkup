import React from 'react';
import FilterTagsListItem from './FilterTagsListItem.tsx/FilterTagsListItem';

const tags = ['algebra', 'water', 'plants', 'food', 'streetfood', 'cremes', 'headphone', 'car', 'tree'];

function FilterTagsList() {
  return (
    <div className="list-container-delete">
      <h3>FilterTagsList</h3>
      {tags.map((tag, index) => (
        <div className="list-item-delete">
          <FilterTagsListItem
            key={index}
            tag={tag}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterTagsList;
