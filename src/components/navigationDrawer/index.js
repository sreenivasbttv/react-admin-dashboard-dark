import React, { Component } from 'react'
import './style.css';
import UserProfile from '../userprofileblock';
import Drawer from '../Drawer';

import navigationData from '../../data/mainNavigation';
import { Navbar } from '../Navbar';

export default class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  render() {

    return (
      <Drawer placement="left" visible={this.state.visible}>
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
