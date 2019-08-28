import React from "react";
import { Link } from 'react-router-dom';
import styled, { css, withTheme } from "styled-components";
import PropTypes from 'prop-types';
import { sectiontextColor } from '../../theme';
import Icon from '../Icon';

const NavItem = styled.li`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  },
`;

const Anchor = styled(Link)`
  display: block;
  text-decoration: none;
  margin: auto;
  padding: 10px;
  height: 100%;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;

  ${props => props.theme && css`
    color: ${props.theme.text ? props.theme.text : sectiontextColor};
  `}

  > span {
    margin-right: 15px;
    ${props => props.theme && css`
    color: ${props.theme.text ? props.theme.text : sectiontextColor};
  `}  
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// NavLink used as menu items without dropdowns.

const renderLinkIcon = (name) => {
  return (
    <Icon iconName={name}></Icon>
  )
}

const NavLink = (props) => {
  const { title, icon, href, theme } = props;
  
  return (
    <NavItem>
      <Anchor to={href} alt={title} theme={theme}>
      {icon && renderLinkIcon(icon.name)} 
        {title}
      </Anchor>
    </NavItem>
  )
}

NavLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(NavLink)
