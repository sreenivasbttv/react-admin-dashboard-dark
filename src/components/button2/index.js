import React from 'react'
import styled, { css, withTheme } from 'styled-components';
import color from '../../colors';
import { buttonBackgroundColor, buttonTextColor, buttonLightBoxShadow, buttonDarkBoxShadow } from '../../theme';


  const Button = styled.button`
    display: inline-block;
    background-color: ${buttonBackgroundColor};
    border: none;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 0.750em;
    padding: 0.750em 1.875em;
    border-radius: 2px;
    min-width: 115px;
    margin-right: 10px;
    margin-bottom: 12px;

    &:disabled {
      color: ${color.santasgray};
      background-color: ${color.alto};
      pointer-events: none;
    }

    ${props => props.variant && css`
      background-color: ${color[props.variant]['default']};
      color: ${color[props.variant]['txtHovercolor']};
      &:hover {
        opacity: 0.9;
      }
    `}

    ${props => props.variant==='light' && css`
      box-shadow: ${buttonLightBoxShadow};
    `}

    ${props => props.variant==='dark' && css`
      box-shadow: ${buttonDarkBoxShadow};
    `}

    ${props => props.outline && css`
      color: ${color[props.outline]['txtcolor']};
      border:1px solid ${color[props.outline]['bordercolor']};
      background-color: ${color[props.outline]['bgcolor']};

      &:hover {
        background-color: ${color[props.outline]['default']};
        color: ${color[props.outline]['txtHovercolor']};
      }

      &:disabled {
        background-color: transparent;
      }
    `}

    ${props => props.rounded && css`
      border-radius:25px;
    `}

    ${props => props.size && css`
      min-width: inherit;
    `}

    ${props => props.size==='xs' && css`
      font-size:10px;
      padding: 10px 25px;
      text-transform: uppercase;
    `}

    ${props => props.size==='sm' && css`
      font-size:10px;
      padding: 10px 30px;
    `}

    ${props => props.size==='lg' && css`
      font-size:16px;
      padding: 12px 40px;
    `}
  `;

export default withTheme(Button);
