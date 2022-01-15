import React from 'react'
import {Nav, Navbar, Form, NavDropdown, FormControl,Button } from 'react-bootstrap'
export default function Navigation() {
    return (
        <Navbar bg="light" expand="md" className='navbar'>
				<Navbar.Brand href="#home">
                    <img src={require('../assets/logo-hublocal.png')} alt="Logo hublocal" />
                </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#inicio">Início</Nav.Link>
						<Nav.Link href="#comofunciona">Como Funciona</Nav.Link>
						<Nav.Link href="#beneficios">Benefícios</Nav.Link>
						<Nav.Link href="#footer">Contato</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
    )
}
