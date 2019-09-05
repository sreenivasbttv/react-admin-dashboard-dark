import React, { Component } from 'react'
import styled, { css, withTheme } from 'styled-components';
import { sectionBackgroundColor } from '../../theme';

const Container = styled.div`
  position: fixed;
  width: 18%;
  top: 0;
  height: 100%;
  overflow-y: auto;
  background-color: ${sectionBackgroundColor};
  z-index: 1000;
  box-shadow: 1px 0px 15px -5px rgba(0,0,0,0.4);
  transition: transform .3s cubic-bezier(.7, .3, .1, 1);

  ${props => props.placement && css`
    ${props => props.placement === 'left' && css`
        left: 0;
    `}

    ${props => props.placement === 'right' && css`
        right: 0;
    `}

    ${props => props.placement === 'top' && css`
        left: 0;
        width: 100%;
        height: 0%;
        top: 0;
    `}

    ${props => props.placement === 'bottom' && css`
        left: 0;
        width: 100%;
        height: 0%;
        bottom: 0;
    `}
  `}
`;

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      mask: false,
      placement: this.props.placement ? this.props.placement : 'left'
    }
  }


  render() {
    const { placement, visible } = this.props;

    return(
      <Container 
        placement={placement}
        visible={visible}>
        {this.props.children}
      </Container>
    )
  }
}

export default withTheme(Drawer);
