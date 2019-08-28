import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { sectiontextColor } from '../../theme';

const Toggle = styled.div`
  display: none;
  position: relative;
  padding: 5px;
  margin: 5px 0px;
  flex-direction: column;
  justify-content: center;
  top: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const IconBarTop = styled.div`
  height: 5px;
  margin: 3px 0px;
  transform: rotate(0deg) translate(0px, 0px);
  transition: all 0.2s ease;

  ${props => props.theme && css`
    background: ${props.theme.text ? props.theme.text : sectiontextColor};
  `}

  ${props => props.open && css`
    transform: rotate(-45deg) translate(-25%, 7px);
  `}
`;

const IconBarMiddle = styled.div`
  height: 5px;
  margin: 3px 0px;
  width: 100%;
  transition: all 0.1s ease;

  ${props => props.theme && css`
    background: ${props.theme.text ? props.theme.text : sectiontextColor};
  `}

  ${props => props.open && css`
    width: 0%;
  `}
`;

const IconBarBottom = styled.div`
  height: 5px;
  margin: 3px 0px;
  rotate(0deg) translate(0px, 0px);
  transition: all 0.2s ease;

  ${props => props.theme && css`
    background: ${props.theme.text ? props.theme.text : sectiontextColor};
  `}

  ${props => props.open && css`
    transform: rotate(45deg) translate(-25%, -6px);
  `}

`;


/**
 * NavToggleIcon is the hamburger style icon showed on mobile view.
 */

class NavToggleIcon extends Component {
  render() {
    const { open, onClick, theme } = this.props

    return (
      <Toggle role="button" onClick={onClick} open={open}>
        <IconBarTop open={open} theme={theme} />
        <IconBarMiddle open={open} theme={theme} />
        <IconBarBottom open={open} theme={theme} />
      </Toggle>
    )
  }
}

NavToggleIcon.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
  theme: PropTypes.object
}

export default withTheme(NavToggleIcon)
