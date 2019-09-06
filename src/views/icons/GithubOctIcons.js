import React, { Component } from 'react';
import Card from "../../components/Card";
import { IconsGrid, IconGridItem, IconGridLabel } from '../../components/Icon/IconsGrid';
import Icon from '../../components/Icon';
import { Octicons } from '../../components/Icon/providers';

export default class GithubOctIcons extends Component {

  renderIcons = () => {
    const go = require('react-icons/go');
    const allIcons = Object.keys(go).map(key =>
      <IconGridItem key={key}><Icon key={key} iconName={key} provider={ Octicons} size="30"> { key } </Icon> <IconGridLabel>{key}</IconGridLabel></IconGridItem>
    )

    return allIcons;
  }

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
          Github Octicons
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
