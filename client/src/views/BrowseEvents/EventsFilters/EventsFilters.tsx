import React from 'react';
// import { Link } from 'react-router-dom';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import MenuList from '../../../components/MenuList/MenuList';
import MdTitle from '../../../assets/MdTitle.svg';
import AiFillTag from '../../../assets/AiFillTag.svg';
import FaUser from '../../../assets/FaUser.svg';
import FaUsers from '../../../assets/FaUsers.svg';

const filterListData = [
  {
    link: '/events/filters/title',
    text: 'Title',
    svgLogo: MdTitle,
  },
  {
    link: '/events/filters/tags',
    text: 'Tags',
    svgLogo: AiFillTag,
  },
  {
    link: '/events/filters/title',
    text: 'Host',
    svgLogo: FaUser,
  },
  {
    link: '/events/filters/title',
    text: 'Participants',
    svgLogo: FaUsers,
  },
];

function EventsFilters() {
  return (
    <div>
      <HeaderReturn text="Fitlers" />
      <MenuList data={filterListData} />
    </div>
  );
}

export default EventsFilters;
