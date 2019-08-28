import React, { Component } from 'react'
import './style.css';

import Button from "../button2";
import ButtonGroup from "../ButtonGroup";
import Card from "../Card";
import Divider from "../divider";
import Heading from '../Heading';
import DropdownButton from '../DropdownButton';
import DropdownItem from '../Dropdown2/DropdownItem';
import { Row, Col } from '../Grid';
import Icon from '../Icon';

export default class ButtonLayoutContainer extends Component {

  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Buttons
          </div>
        </div>

        <Card>

          <div>
            <Heading>Outline</Heading>
            <Button outline="primary" >Primary</Button>
            <Button outline="light">White</Button>
            <Button outline="accent">Accent</Button>
            <Button outline="success">Success</Button>
            <Button outline="danger">Danger</Button>
            <Button outline="dark"> Dark </Button>
            <Button outline="light" disabled> Disabled </Button>
          </div>
          <Divider />
          <br/>

          <div>
            <Heading> Filled</Heading>
            <Button variant="primary">Primary</Button>
            <Button variant="light">White</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dark"> Dark </Button>
            <Button disabled> Disabled </Button>
          </div>
          <Divider />
          <br/>
          <div>
          <Heading>Rounded Outline</Heading>
            <Button outline="primary" rounded>Primary</Button>
            <Button outline="light" rounded>White</Button>
            <Button outline="accent" rounded>Accent</Button>
            <Button outline="success" rounded>Success</Button>
            <Button outline="danger" rounded>Danger</Button>
            <Button outline="dark" rounded> Dark </Button>
            <Button outline="light" disabled rounded> Disabled </Button>
          </div>
          <Divider />
          <br/>
          <div>
          <Heading>Rounded Filled</Heading>
            <Button variant="primary" rounded>Primary</Button>
            <Button variant="light"rounded>White</Button>
            <Button variant="accent" rounded>Accent</Button>
            <Button variant="success" rounded>Success</Button>
            <Button variant="danger" rounded>Danger</Button>
            <Button variant="dark" rounded> Dark </Button>
            <Button disabled rounded> Disabled </Button>
          </div>
        </Card>
       
        <Card>
          <Row>
            <Col xs={6} md={3}> 
              <Heading>Extra Small</Heading> 
              <Button variant="primary" size="xs">xs</Button>
              <Button variant="light" size="xs">xs</Button>
              <Button size="xs" disabled>xs</Button>
            </Col>
            <Col xs={6} md={3}>
              <Heading>Small</Heading>
              <Button variant="primary" size="sm">Small</Button> 
              <Button variant="light" size="sm">Small</Button>
              <Button size="sm" disabled>Small</Button>
            </Col>
            <Col xs={6} md={3}>
              <Heading>Default</Heading>
              <Button variant="primary">Default</Button>
              <Button variant="light">Default</Button>
              <Button disabled>Default</Button>
            </Col>
            <Col xs={6} md={3}>
            <Heading>Large</Heading>
            <Button variant="primary" size="lg">large</Button>
            <Button variant="light" size="lg">large</Button>
            <Button size="lg" disabled>large</Button>
            </Col>
          </Row>
        </Card>

        <Card>
          <DropdownButton title="Action" variant="primary">
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something Else</DropdownItem>
          </DropdownButton>
          <DropdownButton title="Action" variant="light">
          <DropdownItem>Action Light</DropdownItem>
            <DropdownItem>Another Action Light</DropdownItem>
            <DropdownItem>Something Else Light</DropdownItem>
          </DropdownButton>
          <DropdownButton title="Action" variant="accent">
          <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something Else</DropdownItem>
          </DropdownButton>
          <DropdownButton title="Action" variant="success">
          <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something Else</DropdownItem>
          </DropdownButton>
          <DropdownButton title="Action" variant="danger">
          <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something Else</DropdownItem>
          </DropdownButton>
          <DropdownButton title="Action" variant="dark">
          <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something Else</DropdownItem>
          </DropdownButton>
          <DropdownButton title="Action" disabled>
          <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something Else</DropdownItem>
          </DropdownButton>
        </Card>


        <Card>
        <Heading>Button Group</Heading>
        <Row>
          <Col>
          <ButtonGroup>    
            <Button variant="light">Left</Button>
            <Button variant="light">Middle</Button>
            <Button variant="light">Right</Button>
          </ButtonGroup>
          <br/>
          <ButtonGroup rounded>
            <Button variant="light">Left</Button>
            <Button variant="light">Middle</Button>
            <Button variant="light">Right</Button>
          </ButtonGroup>
          <br/>
          </Col>
          <Col>
          <ButtonGroup>
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>    
          <br/>
          <ButtonGroup rounded>
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
          </ButtonGroup>    
          <br/>
          </Col>
        </Row>
      

          <Divider />
          <br/>
          <Heading>Multiple</Heading>
          <Row>
            <Col>
            <ButtonGroup condensed>
            <Button variant="light">1</Button>
            <Button variant="light">2</Button>
            <Button variant="light">3</Button>
            <Button variant="light">4</Button>
            <Button variant="light">5</Button>
            <Button variant="light">6</Button>
            <Button variant="light">7</Button>
            <Button variant="light">8</Button>
          </ButtonGroup>    
          <br/>
            </Col>
            <Col>
            <ButtonGroup condensed>
            <Button variant="primary">1</Button>
            <Button variant="primary">2</Button>
            <Button variant="primary">3</Button>
            <Button variant="primary">4</Button>
            <Button variant="primary">5</Button>
            <Button variant="primary">6</Button>
            <Button variant="primary">7</Button>
            <Button variant="primary">8</Button>
          </ButtonGroup>    
          <br/>
            </Col>
          </Row>

          <Divider />
          <br/>
          <Heading>Vertical Group</Heading>
          <ButtonGroup vertical>
            <Button variant="primary">xs</Button>
            <Button variant="primary">Small</Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary">large</Button>
          </ButtonGroup>
        </Card>

        
          <Row>
            <Col lg={6}>
              <Card>
                <Row>
                  <Col>
                  <Heading>Small</Heading>
                  <Button hasIcon> <Icon iconName="FaTwitter"></Icon> Twitter </Button>
                  <Button variant="primary" hasIcon> <Icon iconName="FaTwitter"></Icon> Twitter </Button>
                  <Button variant="primary" hasIcon iconOnly> <Icon iconName="FaPlus"></Icon> </Button>
                  <Button variant="primary" size="sm" hasIcon iconOnly> <Icon iconName="FaPen"></Icon> </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <Row>
                  <Col>
                    <Heading>Social Icons</Heading>
                    <Icon iconName="FaFacebookF"></Icon>
                    <Icon iconName="FaGooglePlusG"></Icon>
                    <Icon iconName="FaTwitterSquare" size="20"></Icon>
                    <Icon iconName="FaTwitter" size="30" color="red"></Icon>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        
      </div>
    )
  }
}
