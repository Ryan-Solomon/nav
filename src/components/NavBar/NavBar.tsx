import React from 'react';
import './NavBar.styles.css';
import navData, { TNavItem } from '../../data/data';
import NavItem from '../NavItem/NavItem';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        {navData.map((navItem: TNavItem) => {
          return <NavItem key={navItem.page} navItem={navItem} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
