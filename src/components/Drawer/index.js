import React from 'react'
import styled, { withTheme } from 'styled-components';
import { sectionBackgroundColor } from '../../theme';

function Drawer(props) {
  const Drawer = styled.div`
    width: 18%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    overflow-y: auto;
    background-color: ${sectionBackgroundColor}
    box-shadow: 1px 0px 15px -5px rgba(0,0,0,0.4);
    z-index: 1000;
  `;

  return (
      <Drawer {...props}>
      </Drawer>
    );
}

export default withTheme(Drawer);
