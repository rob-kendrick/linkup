// @ts-nocheck

import React, { useState, useRef, useEffect } from 'react';
import ReactTags from 'react-tag-autocomplete';
import './FilterTags.css';

const tagsMock = [{
  id_tag: 1,
  name: 'Sport',
},
{
  id_tag: 2,
  name: 'Game',
},
{
  id_tag: 3,
  name: 'Leisure',
},
{
  id_tag: 4,
  name: 'Excercise',
},
{
  id_tag: 5,
  name: 'Running',
},
{
  id_tag: 6,
  name: 'Learning',
},
{
  id_tag: 7,
  name: 'Relaxing',
},
{
  id_tag: 8,
  name: 'Outdoor',
},
{
  id_tag: 9,
  name: 'Indoor',
},
{
  id_tag: 10,
  name: 'Culture',
}];

interface myProps {
  filterByTag : any
}

function FilterTags({ filterByTag }: myProps) {
  const [tagList, setTagList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    setTagList(tagsMock);
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
      classNames += `ft__btn-selected color${tag.id_tag}`;
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
