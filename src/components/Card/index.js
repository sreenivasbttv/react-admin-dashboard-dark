import React from 'react'
import styled, { css, withTheme } from 'styled-components';
import { useTheme } from "../../ThemeContext";
import { sectionBackgroundColor } from '../../theme';

const Card = styled.div`
  padding: 20px 25px;
  background-color: ${sectionBackgroundColor};
  border-radius: 4px;
`;

export default withTheme(Card);
