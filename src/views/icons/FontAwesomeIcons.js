import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';

export default class FontAwesomeIcons extends Component {

  renderIcons = () => {
    const fa = require('react-icons/fa');
    const allIcons = Object.keys(fa).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Font Awesome Icons
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
