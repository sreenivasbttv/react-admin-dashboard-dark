import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import './style.css';
import { headerBackgroundColor } from '../../theme';

const Container = styled.div`
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

  @media (max-width: 768px) {
    height: 50px;
    padding: 0 20px;
    justify-content: flex-end;
  }
`;

class Header extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="main-wrapper">
        <Container>
          { children }
        </Container>
      </div >
    )
  }
}

export default withTheme(Header);
