import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
     } from 'reactstrap';

export default function MainNav() {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 600)
            setNavbarVisible(true);
        else
            setNavbarVisible(false);
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <Navbar className={navbarVisible ? "position-fixed w-100 navbar-light navbar-active" : "position-fixed w-100 navbar-dark" } expand="md">
        <NavbarBrand className="fw-bold">DECKHAND</NavbarBrand>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink href="#header" className="text-white">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#about-me" className="text-white">About Me</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#qualifications" className="text-white">Qualifications</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}
