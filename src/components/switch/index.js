import React, { useState } from 'react';
import styled, { css, withTheme } from 'styled-components';

function Switch(props) {
  const [isChecked, setisChecked] = useState(false);

  const handleChange = (e) => {
    const item = e.target.name;
    const checkedStatus = e.target.checked;
    setisChecked(checkedStatus);
  };

    return (
      <Styled {...props} >
        <input type="checkbox" checked={isChecked} onChange={handleChange}/>
        <span className="slider"></span>
      </Styled>
    );
}

export default withTheme(Switch);

const Styled = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }

    &.round {
      border-radius: 28px;

      &:before {
        border-radius: 50%;
      }
    }
  }

  > input:checked + .slider {
    background-color: #2196F3;
  }

  > input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  > input:checked + .slider:before {
  transform: translateX(22px);
  }

  ${props => props.round && css`
    .slider {
        border-radius: 28px;
      &:before {
        border-radius: 50%;
      }
    }
  `}
`;
