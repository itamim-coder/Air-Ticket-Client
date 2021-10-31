import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth'
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">TravelGo.com</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
    </Nav>
    <Nav>
    <Navbar.Collapse className="justify-content-end">
    {user.email ? 
   
    
  
      <Navbar.Text>
   <button>MY Order</button> 
   <NavLink to={"/admin"} >
   <button>Admin</button>
   </NavLink>
         <button onClick={logOut} >Log Out</button>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
        :
        <NavLink to={"/login"}>
        <button className="signin-btn">Login</button>
        </NavLink>}
    </Navbar.Collapse>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;