import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from "reactstrap";


function MyNavBar(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">HOME</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Search/">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactUs/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/amirtaraj/amirt-app">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}
export default MyNavBar;