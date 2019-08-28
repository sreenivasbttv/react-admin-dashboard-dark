// @flow
import React, { Component } from "react"
import styled, { ThemeProvider, css, withTheme } from "styled-components"
import PropTypes from 'prop-types';
import Brand from "./NavBrand"
import Dropdown from "./NavDropdown"
import Link from "./NavLink"
import MenuIcon from "./NavToggleIcon"
import { transitionToAuto, transitionFromAuto, wasClicked } from "./config"
import { sectionBackgroundColor, sectiontextColor } from '../../theme';

const Container = styled.div`
  width: 100%;
  z-index: 10000;

  @media (max-width: 768px) {
    overflow: hidden;
    position: initial;
    height: auto;
    transition: height 0.3s ease;
    -ms-overflow-style: none;

    ${props => !props.expand && css`
      ${Header} { // hiding header when vertical(not expanded)
        display: none;
      }
    `}

    ${props => props.expand && css`
      height: 50px;
    `}

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: ${sectionBackgroundColor};
  color: ${sectiontextColor};
  min-height: 50px;

  ${props => props.theme && css`
    ${props => props.theme.primary && css`
      background: ${props.theme.primary};
    `}

    ${props => props.theme.text && css`
      color: ${props.theme.text};
    `}

    ${props => props.theme.height && css`
      min-height: ${props.theme.height} + 'px';
    `}
  `}

  ${props => props.expand && css`
    flex-direction: row;
  `}

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    min-width: 200px;
    min-height: 100%;
  }
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;

  ${props => props.expand && css`
    flex-direction: row;
    align-items: center;
    width: auto;
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Header = styled.li`
  list-style-type: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
    width: 100%;
  }
`;

/**
 * Navbar is the outer container
 */

export class Navbar extends Component {
  nav
  icon
  container
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: -1,
      open: false,
      expand: props.expand ? 1 : 0
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick)
    // Necessary to allow container to expand to accomodate open dropdowns
    this.container.addEventListener("transitionend", this.handleTransitionend)
  }

  handleTransitionend = (e) => {
    const { open } = this.state
    if (open && e.propertyName === "height") {
      this.container.style.height = "auto"
    }
  }

  handleDocumentClick = (e) => {
    const { open } = this.state
    if (!wasClicked(e, this.nav) && open) {
      this.close()
    }
  }

  toggle = (e) => {
    const { open } = this.state

    e.nativeEvent.stopImmediatePropagation()
    e.preventDefault()
    if (open) {
      this.close()
    } else {
      this.open()
    }
  }

  close = () => {
    this.setState({
      open: false,
      activeIndex: -1,
    })
    transitionFromAuto(this.container, 50)
  }

  open = () => {
    this.setState({
      open: true,
    })
    transitionToAuto(this.container)
  }

  changeDropdown = (i) => {
    this.setState({
      activeIndex: i,
    })
  }

  renderBrand = () => {
    const { title, href } = this.props.brand
    return <Brand title={title} href={href} />
  }

  renderItems = () => {
    const { activeIndex, open, expand } = this.state
    let { items } = this.props
    items = items.map((item, i) => {
      if (item.element) {
        return React.cloneElement(item.element, {
          ...item.element.props,
          key: i,
        })
      } else if (item.dropdown) {
        return (
          <Dropdown
            key={i}
            index={i}
            open={activeIndex === i ? true : false}
            items={item.items}
            title={item.title}
            icon={item.icon}
            changeDropdown={this.changeDropdown}
            controlled={true}
            expand={expand}
          />
        )
      } else {
        return <Link key={i} href={item.href} title={item.title} icon={item.icon} />
      }
    })
    return <Items open={open} expand={expand}>{items}</Items>
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick)
    this.container.removeEventListener(
      "transitionend",
      this.handleTransitionend,
    )
  }
  render() {
    const { theme, brand, items } = this.props;
    const { open, expand } = this.state;

    return (
      <ThemeProvider theme={theme ? theme : {}}>
        <Container
          open={open}
          expand={expand}
          items={items}
          brand={brand}
          ref={el => (this.container = el)}>
          <Nav open={open} theme={theme} ref={el => (this.nav = el)} expand={expand}>
            <Header open={open}>
            {brand && this.renderBrand()}
              <MenuIcon
                onClick={this.toggle}
                open={open}
                ref={el => (this.icon = el)}
              />
            </Header>
            {items && this.renderItems()}
          </Nav>
        </Container>
      </ThemeProvider>
    )
  }
}

Navbar.propTypes = {
  items: PropTypes.array,
  brand: PropTypes.object,
  theme: PropTypes.object,
  expand: PropTypes.bool
}

export default withTheme(Navbar);
