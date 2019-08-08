import React, { Component } from 'react'
import './style.css';
import UserProfile from '../userprofileblock';
import { Link } from 'react-router-dom';
import Drawer from '../Drawer';

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
        <div className="drawer-list">

          <Link to='/dashboard' >
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("dashboard")}>
              <i className="material-icons list-icon-padding">
                dashboard
            </i>
              <div>DASHBOARD</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/apps' >
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("apps")}>
              <i className="material-icons list-icon-padding">
                apps
            </i>
              <div className="list-item-width">Apps</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("calender")}>
            <i className="material-icons list-icon-padding">
              calendar_today
            </i>
            <div className="list-item-width">Calender</div>
            {
              this.state.components_submenu ?
                <i className="material-icons list-item-arrow">
                  expand_more
                    </i>
                :
                <i className="material-icons list-item-arrow">
                  chevron_right
                    </i>
            }
          </div>

          <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("components")}>
            <i className="material-icons list-icon-padding">
              satellite
            </i>
            <div className="list-item-width">Components</div>
            <i className="material-icons list-item-arrow">
              chevron_right
            </i>
          </div>

          {
            this.state.components_submenu ?
              <div className="subitems">
                {
                  this.props.subcomponent.map((item, index) => {
                    return (
                      <div>
                        <Link to={'/components/' + index} >
                          <div key={index} className="list-subitem font-clr-white">{item.title}</div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
              : null
          }


          {/* <Link to='/pages' > */}
          <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("pages")}>
            <i className="material-icons list-icon-padding">
              pages
              </i>
            <div className="list-item-width">pages</div>
            {
              this.state.pages_submenu ?
                <i className="material-icons list-item-arrow">
                  expand_more
                    </i>
                :
                <i className="material-icons list-item-arrow">
                  chevron_right
                    </i>
            }
          </div>
          {/* </Link> */}

          {
            this.state.pages_submenu ?
              <div className="subitems">
                {
                  this.props.subpage.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link to={'/pages/' + index} >
                          <div key={index} className="list-subitem font-clr-white">{item.title}</div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
              : null
          }

          {/* <Link to='/forms' > */}
          <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("forms")}>
            <i className="material-icons list-icon-padding">
              file_copy
              </i>
            <div className="list-item-width">Forms</div>
            {
              this.state.form_submenu ?
                <i className="material-icons list-item-arrow">
                  expand_more
                  </i>
                :
                <i className="material-icons list-item-arrow">
                  chevron_right
                  </i>
            }
          </div>
          {/* </Link> */}

          {
            this.state.form_submenu ?
              <div className="subitems">
                {
                  this.props.subform.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link to={'/forms/' + index} >
                          <div key={index} className="list-subitem font-clr-white">{item.title}</div>
                        </Link>
                      </div>

                    )
                  })
                }
              </div>
              : null
          }

          <Link to='/icons' >
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("icons")}>
              <i className="material-icons list-icon-padding">
                wb_sunny
            </i>
              <div className="list-item-width">Icons</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/table' >
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("table")}>
              <i className="material-icons list-icon-padding">
                wb_sunny
            </i>
              <div className="list-item-width">Table</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/location' >
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("location")}>
              <i className="material-icons list-icon-padding">
                place
            </i>
              <div className="list-item-width">Location</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/mobileview' >
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("mobileview")}>
              <i className="material-icons list-icon-padding">
                adb
            </i>
              <div className="list-item-width">Mobile View</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>
        </div>
        </div>
      </div >
      </Drawer>
    )
  }
}
