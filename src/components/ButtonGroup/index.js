import React from 'react'
import styled, { css, withTheme } from 'styled-components';
import color from '../../colors';
import Button from '../button2';

  const ButtonGroup = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;

    ${Button} {
      margin-right: 0;
      margin-bottom: 0;
      font-size: 12px;
      min-width: inherit;
      border-radius: 0;
      padding: 12px 36px;
      border-right: 1px solid rgba(0,0,0,0.1);
    }

    ${props => props.rounded && css`
    ${Button} {
        &:first-child {
          border-radius: 25px 0 0 25px;
        }

        &:last-child {
          border-right: 0;
          border-radius: 0 25px 25px 0;
        }
      }
    `}

    ${props => props.vertical && css`
      flex-direction: column;
      ${Button} {
        border-right: 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
    `}

    ${props => props.condensed && css`
    ${Button} {
        padding: 6px 12px;
      }
    `}
  `;

export default withTheme(ButtonGroup);
