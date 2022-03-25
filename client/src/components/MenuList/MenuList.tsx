import React from 'react';
import MenuListItem from './MenuListItem/MenuListItem';
import type { MenuListItemProps } from './MenuListItem/MenuListItem';

function MenuList({ data } : {data:MenuListItemProps[]}) {
  const menuListItem = data.map((el:MenuListItemProps) => (
    <MenuListItem
      link={el.link}
      text={el.text}
      svgLogo={el.svgLogo}
    />
  ));

  return (
    <div className="MenuList">
      { menuListItem }
    </div>
  );
}

export default MenuList;
