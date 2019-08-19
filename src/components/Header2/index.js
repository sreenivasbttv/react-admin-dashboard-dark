import React from 'react'
import styled, { withTheme } from 'styled-components';
import { headerBackgroundColor } from '../../theme';

function Header2(props) {
  const Header2 = styled.header`
    display: flex;
    justify-content: space-between;
    color: white;
    padding:0px;
    top: 0;
    position: fixed;
    right: 0;
    left: 0;
    height: 80px;
    background-color: ${headerBackgroundColor};
    z-index: 999;
  `;

  return (
      <Header2 {...props}>
      </Header2>
    );
}

export default withTheme(Header2);
