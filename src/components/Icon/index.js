import React, { Component } from 'react';
import styled, { css, withTheme, ThemeProvider } from 'styled-components';
import * as FontAwesome from "react-icons/fa";
import { iconColor } from '../../theme';

const StyledIcon = styled.span`
  font-size: 16px;
  color: ${iconColor};
  margin-right: 5px;

  ${props => props.theme.size && css`
    font-size: ${props.theme.size}px;
  `}

  ${props => props.theme.color && css`
    color: ${props.theme.color};
  `}
`;

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
    this.icon = this.iconGenerate(props);
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  iconCreate(p,n) {
    return React.createElement(p[n]); 
  }

  iconGenerate(props) {
   return props.provider ? this.iconCreate(props.provider, props.iconName) : this.iconCreate(FontAwesome, props.iconName);
  }

  render() {
    if (!this.state.hasError) {
      return (
        <React.Fragment>
          <ThemeProvider theme={this.props}>
            <StyledIcon> { this.icon }</StyledIcon>
          </ThemeProvider>
        </React.Fragment>
      )
    }
    return <React.Fragment></React.Fragment>;
  }
}



export default withTheme(Icon);


