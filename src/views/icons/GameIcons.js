import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { Gameicons } from '../../components/Icon/providers';


export default class GameIcons extends Component {

  renderIcons = () => {
    const gi = require('react-icons/gi');
    const allIcons = Object.keys(gi).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={Gameicons} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Game Icons
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
