import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 text-black"
                        to="#">Overview</NavLink>
                    <NavLink className="d-inline p-2 text-black"
                        to="/repo">Repositories</NavLink>
                    <NavLink className="d-inline p-2 text-black"
                        to="#">Projects</NavLink>
                    <NavLink className="d-inline p-2 text-black"
                        to="#">Packages</NavLink>
                    <NavLink className="d-inline p-2 text-black"
                        to="#">Stars</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}