import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Button from "../button2";
import DropdownMenu from "../Dropdown2/DropdownMenu";

const StyledDropdownButton = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px 10px 0;
  outline: 0;

  ${Button} {
    margin-right: 0;
    margin-bottom: 0;
    outline: 0;
    min-width: inherit;
    padding: 10px 15px;

    &::after {
      display: inline-block;
        margin-left: 10px; 
        content: "";
        border-top: 6px solid;
        border-right: 6px solid transparent;
        border-bottom: 0;
        border-left: 6px solid transparent;
    }
  }

  ${DropdownMenu} {
    display: ${(props) => props.isOpen ? "block" : "none"}
  }

`;
class DropDownButton extends Component {
  constructor(props) {
    super(props);
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropdownMenu() {
   this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  handleBlur(e) {
   if (e.nativeEvent.explicitOriginalTarget &&
    e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
    return;
    }
   this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <StyledDropdownButton isOpen={this.state.dropdownOpen} onBlur={this.handleBlur} onMouseUp={this.handleBlur} tabIndex={0}>
        <Button variant={this.props.variant} disabled={this.props.disabled}  onClick={this.toggleDropdownMenu}>{this.props.title}</Button>
        { this.props.children && 
          <DropdownMenu isOpen={this.state.dropdownOpen}>
          {this.props.children}  
          </DropdownMenu>
        }
      </StyledDropdownButton>
    )
  }
}

DropDownButton.propTypes = {
  as: PropTypes.oneOf(["div"])
};
  
export default withTheme(DropDownButton);
