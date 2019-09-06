import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { Weathericons } from '../../components/Icon/providers';


export default class WeatherIcons extends Component {

  renderIcons = () => {
    const wi = require('react-icons/wi');
    const allIcons = Object.keys(wi).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={Weathericons} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Weather Icons
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
