// @ts-nocheck
import React from 'react';
import { ObjectFlags } from 'typescript';
import './TagList.css';

const allTags = [
  {
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
    id_tag: 9,
    name: 'Indoor',
  },
  {
    id_tag: 10,
    name: 'Culture',
  },
  {
    id_tag: 11,
    name: 'Outdoor',
  },
];

function TagList({ tags } : any) {
  return (
    <div className="tg_inner-container">
      { tags.map((tag) => {
        const tagId = allTags.filter((obj) => obj.name === tag)[0].id_tag;
        return (
          <div
            key={tag}
            className="tg_individual-tag"
            style={{ backgroundColor: `var(--color7-tag${tagId})` }}
          >
            <p className="tg__header-text">{tag}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TagList;
