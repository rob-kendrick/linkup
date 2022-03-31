// @ts-nocheck

import React, { useState, useEffect } from 'react';
import './FilterTags.css';

interface myProps {
  filterByTag : any
}

function FilterTags({ filterByTag }: myProps) {
  const [tagList, setTagList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/tags')
      .then((response) => response.json())
      .then((result) => setTagList(result.data))
      .catch((error) => console.log('error', error));
  }, []);

  useEffect(() => {
    filterByTag(selectedTags);
  }, [selectedTags]);

  const handleClick = (clickedTag) => {
    if (selectedTags.includes(clickedTag)) {
      const prunedTags = selectedTags.filter((tag) => tag !== clickedTag);
      setSelectedTags(prunedTags);
    } else {
      setSelectedTags((currTags) => [...currTags, clickedTag]);
    }
  };

  const renderedTags = tagList.map((tag) => {
    let classNames = 'ft__btn ';
    if (selectedTags.includes(tag.name)) {
      // if id_tag is 10 or greater, get units only as only 10 colors are available
      const colorNumb = String(tag.id_tag - 1).split('').reverse()[0];
      classNames += `ft__btn-selected color${colorNumb}`;
    } else {
      classNames += 'ft__btn-unselected';
    }
    return (
      <>
        <button
          type="button"
          className={classNames}
          id={tag.id_tag}
          onClick={() => handleClick(tag.name)}
        >
          {tag.name}

        </button>
        <span className="ft__btn-space" />
      </>
    );
  });

  return (
    <div className="ft__container">
      {renderedTags}
    </div>
  );
}

export default FilterTags;
