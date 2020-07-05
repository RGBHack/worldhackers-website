import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import logo from "../assets/logo.svg";
import "../assets/style/WorldNav.scss";
import { render } from "@testing-library/react";

class WorldNav extends Component<{}, { isOpen: boolean }> {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="none" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} height="60" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id="nav" className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" href="#hackathons">
                  Hackathons
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="#projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="#team">
                  Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="#contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default WorldNav;
