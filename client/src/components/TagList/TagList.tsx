// @ts-nocheck
import React from 'react';
import './TagList.css';

function TagList({ tags } : any) {
  return (
    <div className="tg_inner-container">
      { tags.map((tag) => (
        <div key={tag} id="tg_individual-tag">
          <p className="tg__header-text">{tag}</p>
        </div>
      ))}
    </div>
  );
}

export default TagList;
