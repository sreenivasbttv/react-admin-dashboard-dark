import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { Typicons } from '../../components/Icon/providers';

export default class TypIcons extends Component {

  renderIcons = () => {
    const ti = require('react-icons/ti');
    const allIcons = Object.keys(ti).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={Typicons} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
          Typicons
          </div>
        </div>

        <Card>
          <IconsGrid>
            {this.renderIcons()}
          </IconsGrid>
        </Card>

        </div>
    )
  }
}
