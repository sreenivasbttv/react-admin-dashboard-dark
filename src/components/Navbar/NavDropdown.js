import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled, { css, withTheme } from "styled-components";
import PropTypes from 'prop-types';
import { wasClicked, transitionToAuto, transitionFromAuto } from "./config"
import { sectionBackgroundColor, sectiontextColor } from '../../theme';
import color from '../../colors';
import Icon from '../Icon';

const DropdownMenu = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0;
  transition: all 0.2s ease;

  ${props => props.theme && props.open && css`
    background: ${props.theme.secondary ? props.theme.secondary : "transparent"};
  `}

  ${props => !props.expand && css`
    align-items: initial;
    width: 100%;
  `}

  @media (max-width: 768px) {
    align-items: initial;
    width: 100%;
  }
`;

const DropdownToggle = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  padding: 0px 30px 0px 10px;
  transition: transform 0.3s ease, top 0.3s ease, bottom 0.3s ease;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;

  @media (max-width: 768px) {
    line-height: 50px;
    margin: 0;
  }

  > span {
    ${props => !props.expand && css`
      margin-right: 15px;
    `}
    
    ${props => props.theme && css`
    color: ${props.theme.text ? props.theme.text : sectiontextColor};
  `}  
  }

  ${props => props.theme && css`
    color: ${props.theme.text ? props.theme.text : sectiontextColor};
  `}

  ${props => props.theme && css`
    line-height: ${props.theme.height ? props.theme.height : "50px"};
  `}
  
  ${props => props.open && css`
  ${DropdownIcon} {
      transform: rotate(45deg);
    }
  `}

  ${props => props.expand && css`
    ${DropdownIcon} {
      right: 10px;
      transform: rotate(45deg);
    ${props => props.open && css`
      transform: rotate(-135deg);
      margin-top: -2px;
    `}

    @media (max-width: 768px) {
      right: 30px;
      transform: rotate(-45deg);
      ${props => props.open && css`
        transform: rotate(45deg);
        margin-top: -6px;
      `}
    }

    }
  `}

`;

const DropdownIcon =styled.span`
    position: absolute;
    right: 30px;
    top: 50%;
    ${props => props.theme && css`
      border: solid ${props.theme.text ? props.theme.text : sectiontextColor};
    `}
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-top: -6px;
    vertical-align: middle;
    transform: rotate(-45deg);
`;

const DropdownList = styled.ul`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 0;
  min-width: 220px;
  width: auto;
  overflow: hidden;
  list-style: none;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  white-space: nowrap;

  @media (max-width: 768px) {
    box-shadow: none;
  }

  ${props => !props.expand && css`
    box-shadow: none;
  `}

  ${props => props.expand && css`
    position: absolute;
    top: 100%;
  `}

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    border: none;
    boxShadow: none;

    ${props => props.theme && css`
      color: ${props.theme.secondary ? props.theme.secondary : sectiontextColor};
      background: ${props.theme.primary ? props.theme.primary : sectionBackgroundColor};
    `}
  }
`;

const DropdownItem = styled.li`
  position: relative;
  transition: all 0.14s ease;

  ${props => props.theme && css`
    color: ${props.theme.primary ? props.theme.primary : sectiontextColor};
  `}
`;

const DLink = styled(Link)`
  text-decoration: none;
  text-align: left;
  background: ${sectionBackgroundColor};
  padding: 20px;
  display: block;
  font-size: 14px;

  ${props => props.theme && css`
    color: ${props.theme.primary ? props.theme.primary : sectiontextColor};
  `}

  &:hover {
    color: white;
    ${props => props.theme && css`
      background: ${props.theme.primary ? props.theme.primary : color.primary.default};
    `}
  }

  @media (max-width: 768px) {
    padding: 10px 0px 10px 40px;
    color: ${sectiontextColor} !important;
    ${props => props.theme && css`
      background: ${props.theme.primary ? props.theme.primary : sectionBackgroundColor};
    `}
  }
`;

/**
 * Dropdown provides a dropdown menu with a set of specified items.
 */

class NavDropdown extends Component {
  menu
  list
  constructor() {
    super()
    this.state = {
      width: null,
    }
  }
  componentWillMount() {
    document.addEventListener("click", this.handleDocumentClick)
  }

  componentDidMount() {
    this.setState({
      width: getComputedStyle(this.list).width,
    })
  }

  close = () => {
    transitionFromAuto(this.list, 0)
  }

  open = () => {
    transitionToAuto(this.list)
  }

  handleClick = (e) => {
    const { open, changeDropdown, index } = this.props
    if (open) {
      // If dropdown is clicked while open, set Navbar's activeIndex to -1
      // to signify that all dropdowns are currently closed
      changeDropdown(-1)
    } else {
      changeDropdown(index);
    }
  }

  handleDocumentClick = (e) => {
    const { changeDropdown, open } = this.props
    if (!wasClicked(e, this.menu) && open) {
      e.stopImmediatePropagation()
      this.close()
      changeDropdown(-1)
      return
    }
  }

  renderItems = () => {
    let { items, theme } = this.props
    items = items.map((item, i) => {
      return (
        <DropdownItem key={i} theme={theme}>
          <DLink to={item.href} theme={theme}>
            {item.name}
          </DLink>
        </DropdownItem>
      )
    })
    return items
  }

  renderLinkIcon = (name) => {
    return (
      <Icon iconName={name}></Icon>
    )
  }

  componentWillReceiveProps(nextProps) {
    const { open } = nextProps
    if (open) {
      this.open()
    } else if (!open) {
      this.close()
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick)
  }
  render() {
    const { title, icon, open, expand, theme } = this.props;
    const { width } = this.state;

    return (
      <DropdownMenu
        theme={theme}
        open={open}
        expand={expand}
        ref={el => (this.menu = el)}
        width={width}>
        <DropdownToggle
          theme={theme}
          onClick={this.handleClick}
          open={open}
          expand={expand}
          width={width}>
            {icon && this.renderLinkIcon(icon.name)}  
          {title}
          <DropdownIcon/>
        </DropdownToggle>
        <DropdownList theme={theme} open={open} expand={expand} ref={el => (this.list = el)}>
          {this.renderItems()}
        </DropdownList>
      </DropdownMenu>
    )
  }
}

NavDropdown.propTypes = {
  open: PropTypes.bool,
  changeDropdown: PropTypes.func,
  theme: PropTypes.object,
  title: PropTypes.string,
  index: PropTypes.number,
  items: PropTypes.array
}

export default withTheme(NavDropdown)
