import React, { Component } from 'react'
import './style.css';
import UserProfile from '../userprofileblock';
import Drawer from '../Drawer';

import navigationData from '../../data/mainNavigation';
import { Navbar } from '../Navbar';

export default class NavigationDrawer extends Component {
  constructor() {
    super();
    this.state = {
      form_submenu: false,
      pages_submenu: false,
      components_submenu: false
    }
  }
  updateActiveMenu = (menu) => {
    if (menu === 'forms') {
      this.setState({ form_submenu: !this.state.form_submenu });
    }
    if (menu === 'pages') {
      this.setState({ pages_submenu: !this.state.pages_submenu });
    }
    if (menu === 'components') {
      this.setState({ components_submenu: !this.state.components_submenu });
    }
    this.props.updateActiveMenu(menu);

  }
  render() {

    return (
      <Drawer>
      <div className="drawer">
        <div className="drawer-inner">
        <UserProfile data={this.props.userdata} />

        <Navbar items={navigationData}/>

        </div>
      </div >
      </Drawer>
    )
  }
}
