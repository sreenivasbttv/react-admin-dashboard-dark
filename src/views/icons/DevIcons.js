import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { Devicons } from '../../components/Icon/providers';


export default class DevIcons extends Component {

  renderIcons = () => {
    const di = require('react-icons/di');
    const allIcons = Object.keys(di).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={Devicons} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )
    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Devicons
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
