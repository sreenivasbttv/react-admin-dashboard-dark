import React from 'react'
import styled, { css, withTheme } from 'styled-components';
import color from '../../colors';


  const Button = styled.button`
    display: inline-block;
    background-color: ${color.white};
    border: none;
    box-shadow: none;
    color: ${color.charade};
    cursor: pointer;
    font-size: 0.750em;
    padding: 0.750em 1.875em;
    border-radius: 2px;
    min-width: 115px;
    margin-right: 10px;
    margin-bottom: 12px;

    &:disabled {
      color: ${color.alto};
      pointer-events: none;
    }

    ${props => props.variant && css`
      color: ${color[props.variant]};
    `}

    ${props => props.fill && css`
      background-color: ${color[props.fill]};
    `}

    ${props => props.outline && css`
      border:1px solid ${color[props.outline]};
      background-color: transparent;
    `}

    ${props => props.rounded && css`
      border-radius:25px;
    `}

    ${props => props.size && css`
      border-radius:25px;
    `}
  `;

export default withTheme(Button);
