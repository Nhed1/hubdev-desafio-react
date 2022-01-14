import React from 'react'
import {Nav, Navbar, Form, NavDropdown, FormControl,Button } from 'react-bootstrap'
import '../styles/Nav.css'
export default function Navigation() {
    return (
        <Navbar bg="light" expand="md" className='navbar'>
				<Navbar.Brand href="#home">
                    <img src={require('../assets/logo-hublocal.png')} alt="Logo hublocal" />
                </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">Início</Nav.Link>
						<Nav.Link href="#link">Como Funciona</Nav.Link>
						<Nav.Link href="#link">Benefícios</Nav.Link>
						<Nav.Link href="#link">Contato</Nav.Link>
						<Nav.Link href="#link">Comece Agora</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
    )
}
