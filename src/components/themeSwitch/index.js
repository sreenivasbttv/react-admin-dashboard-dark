import React, { useState } from "react";
import Switch from "../switch";
import { useTheme } from "../../ThemeContext";
import { withTheme } from 'styled-components';

function ThemeSwitch(props) {
  const [isThemeChanged, setisThemeChanged] = useState(false);
  const themeToggle = useTheme();
  var toggleStatus;

  const handleClick = (e) => {
    themeToggle.toggle();
    let themeStatus = props.theme.mode === 'light' ? false : true;
    setisThemeChanged(themeStatus);
    toggleStatus = themeStatus
    console.log(toggleStatus);
  };

    return (
        <Switch round onClick={handleClick} >

        </Switch>
    );
}

export default withTheme(ThemeSwitch);
