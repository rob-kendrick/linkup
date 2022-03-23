import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterTagsListItem from './FilterTagsListItem.tsx/FilterTagsListItem';

const tags = ['algebra', 'water', 'plants', 'food', 'streetfood', 'cremes', 'headphone', 'car', 'tree'];

function FilterTagsList() {
  const navigate = useNavigate();
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
      {/* Both buttons should be 'ButtonLarge' components */}
      {/* Both buttons should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(-1)}>Apply</button>
      <br />
      <button type="button" onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
}

export default FilterTagsList;
