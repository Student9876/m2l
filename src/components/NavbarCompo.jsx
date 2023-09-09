import React from "react";
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarCompo() {
    return <>
            <Navbar id="NavBar" bg='dark' variant='dark' expand='md'>
                <Container>
                    <Navbar.Brand id='NavBarBrand' href='/' style={{fontFamily: 'Orbitron'}}><span>Mastering Machine Learning</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='justify-content-end' style={{ width: '100%' }}>
                            <NavLink href='/'>Home&#160; &#160;&#160;&#160;&#160;&#160;</NavLink>
                            <NavLink href='/#about'>About Us&#160; &#160;&#160;&#160;&#160;&#160;</NavLink>
                            <NavLink href='/#register'>Register&#160; &#160;&#160;&#160;&#160;&#160;</NavLink>
                            <NavLink href='/#faq'>FAQ&#160; &#160;&#160;&#160;&#160;&#160;</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
}

export default NavbarCompo;