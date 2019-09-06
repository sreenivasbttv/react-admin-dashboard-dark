import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { Feather } from '../../components/Icon/providers';

export default class FeatherIcons extends Component {

  renderIcons = () => {
    const fi = require('react-icons/fi');
    const allIcons = Object.keys(fi).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={Feather} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Feather Icons
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
