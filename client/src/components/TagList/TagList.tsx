// @ts-nocheck
import React from 'react';
import './TagList.css';

function TagList({ tags } : any) {
  console.log(tags, 'from TagList');
  return (
    <div className="tg_inner-container">
      { tags.map((tag) => (
        <div key={tag} id="tg_individual-tag">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
}

export default TagList;
