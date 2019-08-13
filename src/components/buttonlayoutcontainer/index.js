import React, { Component } from 'react'
import './style.css';
import ButtonWrapper from '../buttonwrapper';
import Dropdown from '../dropdown';
import ButtonGroup from '../button-group';
import MultipleButton from '../multiple_button';
import VerticalGroup from '../verticalgroup';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from "../button2";
import ButtonGroup2 from "../ButtonGroup";
import Card from "../Card";
import Divider from "../divider";

// import SocialButtons from '../socialbuttons';
export default class ButtonLayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outline_content_title: [
        {
          title: "Outline",
        },
        {
          title: "Filled",
        },
        {
          title: "Rounded-Outline",
        },
        {
          title: "Rounded-Filled",
        },
      ],
      outline_content_data:
        [
          {
            title: 'Primary',
            color: '#005FEC'
          },
          {
            title: 'white',
            color: '#D8D8D8'
          },
          {
            title: 'Accent',
            color: '#D6BD84'
          },
          {
            title: 'Success',
            color: '#65AC80'
          },
          {
            title: 'Danger',
            color: '#ED4740'
          },
          {
            title: 'Dark',
            color: '#1D242F'
          },
          {
            title: 'Disabled',
            color: '#D8D8D8'
          },
        ],
      button_sizes: [
        {
          title: "XS"
        },
        {
          title: "small"
        },
        {
          title: "default"
        },
        {
          title: "large"
        }
      ],
      button_size_colors: [
        {
          backgroundColor: "#005FEA",
          text_color: '#DAFDFE'
        },
        {
          backgroundColor: "FFFFFF",
          text_color: '#17171D'
        },
        {
          backgroundColor: "#D8D8D8",
          text_color: '#616162'
        }
      ],
      action_button_color: [
        {
          btn_color: '#005FEA'
        },
        {
          btn_color: '#FEFEFE'
        },
        {
          btn_color: '#F7B032'
        },
        {
          btn_color: '#65D463'
        },
        {
          btn_color: '#ED4741'
        },
        {
          btn_color: '#1D262E'
        },
        {
          btn_color: '#D8D8D8'
        },
      ],
      dropodown_btn_title: 'Action',
      button_group_data: [
        {
          title: 'gray_square_component',
          left_bg_color: '#D8D8D8',
          med_right_color: '#FEFEFE',
          text_color: '#232428'
        },
        {
          title: 'blue_square_component',
          left_bg_color: '#0760C4',
          med_right_color: '#005FEA',
          text_color: '#94D4FC'
        },
        {
          title: 'gray_rounded_component',
          left_bg_color: '#D8D8D8',
          med_right_color: '#FEFEFE',
          text_color: '#232428'
        },
        {
          title: 'blue_rounded_component',
          left_bg_color: '#0760C4',
          med_right_color: '#005FEA',
          text_color: '#94D4FC'
        }
      ],
      multiple_buttons: [
        {
          bg_color: '#FEFEFE',
          dark_bg_color: '#D8D8D8'
        },
        {
          bg_color: '#005FEA',
          dark_bg_color: '#0760C4'
        }
      ],
      anchorEl: null,
    }
  }

  handelClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container">
          <div className="header color-white">
            Buttons
          </div>
        </div>

        <Card>

          <div>
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
            <Button variant="primary" rounded>Primary</Button>
            <Button variant="light"rounded>White</Button>
            <Button variant="accent" rounded>Accent</Button>
            <Button variant="success" rounded>Success</Button>
            <Button variant="danger" rounded>Danger</Button>
            <Button variant="dark" rounded> Dark </Button>
            <Button disabled rounded> Disabled </Button>
          </div>

          <Divider />
          <br/>
        

        </Card>
       

        <Card>
        <div>
            <Button variant="primary" size="xs">xs</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary" size="lg">large</Button>
          </div>  
            <br/>
          <div>  
            <Button variant="light" size="xs">xs</Button>
            <Button variant="light" size="sm">Small</Button>
            <Button variant="light">Default</Button>
            <Button variant="light" size="lg">large</Button>
          </div>  
            <br/>
          <div>  
            <Button size="xs" disabled>xs</Button>
            <Button size="sm" disabled>Small</Button>
            <Button disabled>Default</Button>
            <Button size="lg" disabled>large</Button>
          </div>  
        </Card>


        <Card>
          <ButtonGroup2>
            <Button variant="primary">xs</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary" size="lg">large</Button>
          </ButtonGroup2>    
          <br/>
          <ButtonGroup2 rounded>
            <Button variant="primary">xs</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary" size="lg">large</Button>
          </ButtonGroup2>    
          <br/>
          <ButtonGroup2 vertical>
            <Button variant="primary">xs</Button>
            <Button variant="primary">Small</Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary">large</Button>
          </ButtonGroup2>    
          <br/>

          <ButtonGroup2 condensed>
            <Button variant="primary">1</Button>
            <Button variant="primary">2</Button>
            <Button variant="primary">3</Button>
            <Button variant="primary">4</Button>
            <Button variant="primary">5</Button>
            <Button variant="primary">6</Button>
            <Button variant="primary">7</Button>
            <Button variant="primary">8</Button>
          </ButtonGroup2>    
          <br/>

          <ButtonGroup2 condensed>
            <Button variant="light">1</Button>
            <Button variant="light">2</Button>
            <Button variant="light">3</Button>
            <Button variant="light">4</Button>
            <Button variant="light">5</Button>
            <Button variant="light">6</Button>
            <Button variant="light">7</Button>
            <Button variant="light">8</Button>
          </ButtonGroup2>    
          <br/>

          <ButtonGroup2 rounded>
            <Button variant="light" size="xs">xs</Button>
            <Button variant="light" size="sm">Small</Button>
            <Button variant="light">Default</Button>
            <Button variant="light" size="lg">large</Button>
          </ButtonGroup2>        
            <br/>
          <ButtonGroup2>    
            <Button size="xs" disabled>xs</Button>
            <Button size="sm" disabled>Small</Button>
            <Button disabled>Default</Button>
            <Button size="lg" disabled>large</Button>
          </ButtonGroup2>
        </Card>



        <div className="color-white button-style font-size-small font-weight margin-bottom">Button Colors & Styles</div>
        {
          this.state.outline_content_title.map((item, index) => {
            return (
              <ButtonWrapper
                key={index}
                type="button_styles"
                title={item.title}
                data={this.state.outline_content_data}
              />
            )
          })
        }
        <div>


          <div className="color-white button-style font-size-small font-weight margin-bottom">Button Sizes</div>
          <div className="color-white button_with_sizes">
            <div className="button-size-header font-size-small font-weight  width-25 ">Extra Small</div>
            <div className="button-size-header font-size-small font-weight  width-25">Small</div>
            <div className="button-size-header font-size-small font-weight  width-25">Default</div>
            <div className="button-size-header font-size-small font-weight  width-25">Large</div>
          </div>
          <ButtonWrapper
            button_size_data={this.state.button_sizes}
            button_size_color={this.state.button_size_colors[0]}
            type="button_sizes"
          />

          <ButtonWrapper
            button_size_data={this.state.button_sizes}
            button_size_color={this.state.button_size_colors[1]}
            type="button_sizes"
          />

          <ButtonWrapper
            button_size_data={this.state.button_sizes}
            button_size_color={this.state.button_size_colors[2]}
            type="button_sizes"
          />
        </div>
        <div>
          <div className="color-white button-style font-size-small font-weight margin-bottom">Button Dropdowns</div>
          <div className="dropdown-btn-content">
            {
              this.state.action_button_color.map((item, index) => {
                return (
                  <Dropdown
                    key={index}
                    title={this.state.dropodown_btn_title}
                    btn_color={item.btn_color}
                    handelClick={this.handelClick}
                    handleCloseMenu={this.handleCloseMenu}
                  />
                )
              })
            }
          </div>
        </div>
        <div>
          <div className="color-white button-style font-size-small font-weight margin-bottom">Button Groups</div>
          <div className="square_rounded_button_group_wrapper">
            <div className="color-white padding font-size-small font-weight">Button Group</div>
            <div className="square_rounded_button_content">
              {
                this.state.button_group_data.map((item, index) => {
                  return (
                    <ButtonGroup key={index}
                      title={item.title}
                      left_bg_color={item.left_bg_color}
                      med_right_color={item.med_right_color}
                      text_color={item.text_color}
                      button_group={this.state.button_group}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className=" background_black">
          <div className="color-white padding font-size-small font-weight">Multiple</div>
          <div className="multiple_buttons">
            {
              this.state.multiple_buttons.map((item, index) => {
                return (
                  <MultipleButton key={index}
                    bg_color={item.bg_color}
                    dark_bg_color={item.dark_bg_color}
                  />
                )
              })
            }
          </div>
        </div>
        <div className=" background_black" >
          <div className="color-white padding font-size-small font-weight">Vertical Group</div>
          <div className="vertical_group">
            {
              this.state.multiple_buttons.map((item, index) => {
                return (
                  <VerticalGroup key={index}
                    bg_color={item.bg_color}
                    dark_bg_color={item.dark_bg_color}
                  />
                )
              })
            }
          </div>
        </div>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleCloseMenu}
        >
          <MenuItem onClick={this.handleCloseMenu}>New Post</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Task</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Setting</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Help</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Log Out</MenuItem>

        </Menu>

        {/* <div>
          <div >
            <SocialButtons />
          </div>
        </div> */}
      </div>
    )
  }
}
