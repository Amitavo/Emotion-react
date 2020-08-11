import React, { useState } from "react";
import logo from "../img/logo7.svg";
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
        className="navbarbg navbar-collapse navbar"
        fixed="top"
        dark
        expand="md"
      >
        <NavbarBrand href="/">
          <a href="/">
            <img src={logo} style={{ width: 140 }} alt="logo" />
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
                <NavLink href="#">
                  <DropdownItem>Mordern</DropdownItem>
                </NavLink>
                <NavLink href="#">
                  <DropdownItem>Traditonal</DropdownItem>
                </NavLink>
                <NavLink href="#">
                  <DropdownItem>Folk</DropdownItem>
                </NavLink>
                <NavLink href="#">
                  <DropdownItem>Devotional</DropdownItem>
                </NavLink>
                <NavLink href="#">
                  <DropdownItem>Classic</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                CONTACT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
