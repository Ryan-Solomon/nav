import React, { FC, ReactComponentElement, useState } from 'react';
import { TNavItem } from '../../data/data';
import DropDown from '../DropDown/DropDown';

type Props = {
  navItem: TNavItem;
};

const NavItem: FC<Props> = ({ navItem }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <li>{navItem.page}</li>
      {show && <DropDown navItem={navItem} />}
    </>
  );
};

export default NavItem;
