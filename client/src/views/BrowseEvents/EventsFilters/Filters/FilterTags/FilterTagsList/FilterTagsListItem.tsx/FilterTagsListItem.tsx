import React from 'react';

function FilterTagsListItem({ tag }: {tag: any}) {
  return (
    <div className="space-around-delete">
      <input type="radio" />
      <div>{tag}</div>
    </div>
  );
}

export default FilterTagsListItem;
