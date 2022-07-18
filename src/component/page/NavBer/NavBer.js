import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import image from "../../../image/images (1).png"

import "./NavBer.css";

const NavBer = () => {
  const [user] = useAuthState(auth);

  const handleLogout= () =>{
    signOut(auth);
  }
  return (
    <>
      <Navbar className="p-0"  collapseOnSelect expand="lg" style={{background:"#231955"}} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={image} height={48} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-end" style={{ fontWeight: "500"}}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {
                user ?
                <>
                <Nav.Link as={Link} to="/uploadPd">Add Item</Nav.Link>
                <Nav.Link as={Link} to="/manageInventory">Manage Item</Nav.Link>
                <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
                :
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBer;
