import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { Ionicons } from '../../components/Icon/providers';

export default class IonIcons extends Component {

  renderIcons = () => {
    const ioi = require('react-icons/io');
    const allIcons = Object.keys(ioi).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={Ionicons} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Ionicons
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
