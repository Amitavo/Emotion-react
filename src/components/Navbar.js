import React, { useState } from "react";
import logo from "../img/logo/Logo_white.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="navbarbg navbar-collapse navbar "
        fixed="top"
        dark
        expand="md"
      >
        <NavbarBrand href="/">
          <a href="/">
            <img src={logo} style={{ width: 120 }} alt="logo" />
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav-items" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                GENRE
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink href="/bengali">
                  <DropdownItem>Bengali Songs</DropdownItem>
                </NavLink>
                <NavLink href="/meditational">
                  <DropdownItem>Meditational Songs</DropdownItem>
                </NavLink>
                <NavLink href="/devotional">
                  <DropdownItem>Devotional Songs</DropdownItem>
                </NavLink>
                <NavLink href="/classical">
                  <DropdownItem>Classical Songs</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/about">ABOUT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
