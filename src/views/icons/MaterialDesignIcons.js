import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { MaterialDesign } from '../../components/Icon/providers';

export default class MaterialDesignIcons extends Component {

  renderIcons = () => {
    const md = require('react-icons/md');
    const allIcons = Object.keys(md).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={MaterialDesign} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Material Design Icons
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
