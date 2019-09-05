import React, { Component } from 'react';
import NavigationDrawer from './components/navigationDrawer';
import Header from './components/header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard';
import Apps from './components/apps';
import Calender from './components/calender';
import ButtonLayoutContainer from './components/buttonlayoutcontainer';
import Listing from './components/listing';
import Icons from './components/icons';
import FormLayout from './components/formlayout';
import Table from './components/table';
import MenusView from './views/menus'; 
import CardLayoutContainer from './components/cardlayoutcontainer';
import ThemeSwitch from './components/themeSwitch';

import { NavToggleIcon } from './components/Navbar';
import Drawer from './components/Drawer';
import UserProfile from './components/userprofileblock';
import navigationData from './data/mainNavigation';
import { Navbar } from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      drawerVisible: false,
      windowWidth: null,
      drawerToggleIcon : false,

      isClicked: false,
      active_menu_item: 'dashboard',
      clr_arr: [],
      visitor_data: {
        count: "2230",
        type: "Unique Visitors",
        month_satus: "LAST MONTH VISITORS",
        percent: "35%"
      },
      userProfile: {
        name: "Leonid Aristov",
        role: "Project Manager"
      },
      product_listing: {
        title: 'Listing',
        three_column_listing: {
          title: '3 column listing',
          column_one: {
            image: require('./images/download (1).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_two: {
            image: require('./images/download (2).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_three: {
            image: require('./images/download (3).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        },
        two_column_listing: {
          title: "Two column listing",
          column_one: {
            image: require('./images/download(4).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_two: {
            image: require('./images/download(6).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_three: {
            image: require('./images/home.jpg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_four: {
            image: require('./images/Events.jpg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        },
        single_column_listing: {
          title: "Single  listing",
          column_one: {
            image: require('./images/download(7).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs.4.85 Crors'
          },
          column_two: {
            image: require('./images/download(8).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        }
      }
    }

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  checkWindowWidth = () => {
    let lastWidth = this.state.windowWidth;
    const presentWidth = window.screen.width;
    if (!lastWidth || (lastWidth !== presentWidth)) {
      lastWidth = presentWidth;
      this.setState({windowWidth: presentWidth});
      if (presentWidth > 768) {
        this.setState({drawerVisible: true});
      } else {
        this.setState({drawerVisible: false});
      }
    }
  }

  toggleDrawer = () => {
    this.setState({drawerVisible: !this.state.drawerVisible});
  }

  updateActiveMenu = (active_menu_item) => {
    this.setState({ active_menu_item });
  }

  componentDidMount = () => {
    let clr_arr = ["#db1c58", "#56f442", "#e8d90d"];
    this.setState({ clr_arr: clr_arr });
    this.checkWindowWidth();
    if (typeof window !== 'undefined') {
      window.addEventListener('orientationchange', this.checkWindowWidth, false)
      window.addEventListener('resize', this.checkWindowWidth, false)
    }
  }

  componentWillUnmount () {
    window.removeEventListener('orientationchange', this.setScreen)
    window.removeEventListener('resize', this.setScreen)
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header>
            <NavToggleIcon onClick={this.toggleDrawer} open={this.state.drawerVisible}/>
          </Header>  

          <Drawer placement="left" visible={this.state.drawerVisible}>
            <UserProfile data={this.state.userProfile} />
            <Navbar items={navigationData}/>
          </Drawer>  

          
          <div className="content-wrapper">
            <div className="inner-content-wrapper">

            <Switch>

              <Route exact path="/"
                render={props => (<Dashboard clr_arr={this.state.clr_arr} data={this.state.visitor_data} />)}
              />

              <Route path="/dashboard"
                render={props => (<Dashboard clr_arr={this.state.clr_arr} data={this.state.visitor_data} />)}
              />

              <Route path="/apps"
                render={props => (<Apps />)}
              />

              <Route path="/calender"
                render={props => (<Calender />)}
              />

              <Route path="/components/0"
                render={props => (<ButtonLayoutContainer />)}
              />

              <Route path="/components/1"
                render={props => (<CardLayoutContainer />)}
              />

              <Route path="/pages/0"
                render={props => (<Listing product_listing={this.state.product_listing} />)}
              />

              <Route path="/forms/0"
                render={props => (<FormLayout />)}
              />

              <Route path="/table"
                render={props => (<Table />)}
              />

              <Route path="/icons"
                render={props => (<Icons />)}
              />

              <Route path="/menus"
                render= { props => (<MenusView/>)}
              />

            </Switch>
            </div>

          </div>
        </Router>

        <ThemeSwitch />
      </div>
    )
  }
}

export default App;
