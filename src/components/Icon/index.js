import React, { Component } from 'react';
import styled, { css, withTheme } from 'styled-components';
import * as FontAwesome from "react-icons/fa";
import { iconColor } from '../../theme';

const StyledIcon = styled.span`
  font-size: 16px;
  color: ${iconColor};
  margin-right: 5px;

  ${props => props.size && css`
    font-size: ${props.size}+'px';
  `}

  ${props => props.color && css`
    color: ${props.color};
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
          <StyledIcon> { this.icon }</StyledIcon>
        </React.Fragment>
      )
    }
    return <React.Fragment></React.Fragment>;
  }
}



export default withTheme(Icon);


