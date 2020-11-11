import React from 'react';
import { FC } from 'react';
import { TNavItem } from '../../data/data';
import { Link } from 'react-router-dom';

type Props = {
  navItem: TNavItem;
};

// No, add an on mouseover to show the drop down when mousing over

const DropDown: FC<Props> = ({ navItem }) => {
  return (
    <div className='drow-down'>
      <div className='title'>{navItem.page}</div>
      <div className='nav-info'>
        {navItem.links.map((info) => (
          <Link to='`${info.url}`'>
            <span>{info.icon}</span>
            <h3>{info.label}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
