/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { WrapperHeader } from './style';

const Header = (props) => {
  return (
    <WrapperHeader>
      <img src={props.logo} alt="" />     
    </WrapperHeader>
  );
};
export default Header;
