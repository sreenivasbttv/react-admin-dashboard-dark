import React from 'react'
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from '../../theme';

function Button(props) {
  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  return (
      <Button>
      </Button>
    );
}

export default withTheme(Button);
