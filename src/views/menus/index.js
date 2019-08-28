import React, { Component } from 'react'

import Card from "../../components/Card";
import Divider from "../../components/divider";
import Heading from '../../components/Heading';
import { Navbar } from '../../components/Navbar';

const items = [
  {
    dropdown: true,
    title: "Why Drupal",
    icon: {
      name: "FaDrupal"
    },
    items: [
      {
        name: "For Developers",
        href: "https://www.drupal.org/developers",
      },
      {
        name: "For Marketers",
        href: "https://www.drupal.org/marketers",
      },
    ],
  },
  {
    dropdown: true,
    title: "Build",
    icon: {
      name: "FaBuilding"
    },
    items: [
      {
        name: "Download & Extend",
        href: "#",
      },
      {
        name: "Browse Repository",
        href: "#",
      },
      {
        name: "Documentation",
        href: "#",
      },
      {
        name: "Modules",
        href: "#",
      },
      {
        name: "Themes",
        href: "#",
      },
      {
        name: "Distributions",
        href: "#",
      },
      {
        name: "Issue queues",
        href: "#",
      },
    ],
  },
  {
    dropdown: true,
    title: "Services",
    icon: {
      name: "FaBell",
    }, 
    items: [
      {
        name: "Market Place",
        href: "#",
      },
      {
        name: "Hosting",
        href: "#",
      },
      {
        name: "Training",
        href: "#",
      },
    ],
  },
  {
    dropdown: true,
    title: "Resources",
    items: [
      {
        name: "Documentation",
        href: "#",
      },
    ],
  },
  {
    dropdown: true,
    title: "Association",
    items: [
      {
        name: "Drupal Association",
        href: "#",
      },
      {
        name: "Supporters",
        href: "#",
      },
      {
        name: "About Drupal.org",
        href: "#",
      },
    ],
  },
  {
    dropdown: false,
    title: "Try Drupal",
    href: "#",
    icon: {
      name: "FaDrupal"
    },
  },
]

const brand = {
  title: "Drupal",
  href: "http://www.drupal.org",
}

const theme1 = {
  primary: "#004080",
  secondary: "#0059b3",
  text: "white",
}

export default class ButtonLayoutContainer extends Component {

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Menus
          </div>
        </div>

        <Card>

          <div>
            <Heading> Menu Horizontal (Custom Theme)</Heading>
            <Navbar brand={brand} theme={theme1} items={items} expand/>
          </div>
          <Divider />
          <br/>

          <div>
            <Heading> Menu Vertical (Custom Theme)</Heading>
            <Navbar brand={brand} theme={theme1} items={items} />
          </div>
          <Divider />
          <br/>
          
        </Card>

        <Card>
        <div>
            <Heading>Menu Horizontal (No custom theme) </Heading>
            <Navbar brand={brand} items={items} expand/>
          </div>
          <Divider />
          <br/>
          <div>
            <Heading>Menu Vertical (No custom theme) </Heading>
            <Navbar brand={brand} items={items}/>
          </div>
        </Card>
       
        
      </div>
    )
  }
}
