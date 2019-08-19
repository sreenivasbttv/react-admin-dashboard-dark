import React from "react";
import Button from "../button2";
import { useTheme } from "../../ThemeContext";
import styled, { withTheme } from 'styled-components';

function ThemeSwitch(props) {
  const themeToggle = useTheme();

  const Wrapper = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;

    button {
      margin: 0;
    }
  `;

    return (
      <Wrapper>
        <Button onClick={() => themeToggle.toggle()}>
          {props.theme.mode === 'dark' ? "Light Mode" : "Dark Mode"}
        </Button>
        </Wrapper>
    );
}

export default withTheme(ThemeSwitch);
