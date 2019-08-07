import React, { Component } from 'react'
import './style.css';

class Button extends Component {
  render() {
    return (
      <div className="button-content-wrapper">
        <button style={this.props.btnStyle}>{this.props.title}</button>
      </div >
    )
  }
}

export default Button;
