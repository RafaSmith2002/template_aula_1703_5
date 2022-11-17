/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { WrapperHeader } from './style';

const Header = ({ logo, menu }) => {
  return (
    <WrapperHeader>
      <img src={logo} />
      <div>
        <button>{menu[0]}</button>
        <button>{menu[1]}</button>
        <button>{menu[2]}</button>
      </div>
    </WrapperHeader>
  );
};
export default Header;
