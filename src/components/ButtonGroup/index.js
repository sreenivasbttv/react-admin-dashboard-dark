import React from 'react'
import styled, { css, withTheme } from 'styled-components';
import color from '../../colors';

function ButtonGroup(props) {
  const ButtonGroup = styled.div`
    display: block;
  `;

  return (
      <ButtonGroup {...props}>
      </ButtonGroup>
    );
}

export default withTheme(ButtonGroup);
