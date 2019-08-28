// @flow
import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { sectiontextColor } from '../../theme';

const Container = styled.div`
  list-style: none;
  display: flex;
  padding: 10px;
  "@media (maxWidth: 768px)": {
    height: 30px;
  }
`;

const Link = styled.a`
  display: block;
  margin: auto;
  text-decoration: none;
  font-size: 1.5em;

  @media (max-width: 768px) {
    top: 0;
    z-index: 10;
    font-size: 1em;
  }

  ${props => props.theme && css`
    color: ${props.theme.text ? props.theme.text : sectiontextColor}
  `}
`;

const NavBrand = (props) => {
  const { title, href, theme } = props

  return (
    <Container>
      <Link theme={theme} href={href}>
        {title}
      </Link>
    </Container>
  )
}

NavBrand.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(NavBrand)
