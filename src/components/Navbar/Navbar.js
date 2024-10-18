// src/components/Navigation.js
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css"; // Import the CSS file for navigation styles

function Navigation() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        {/* <img
          src="/Screenshot (183).png"
          alt="Cook Duo"
          className="cook-duo-img"
        /> */}
        CookConnect
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {" "}
          {/* Use ms-auto to align items to the right */}
          <Nav.Link as={Link} to="/submitrecipe" className="nav-item">
            Submit Recipe
          </Nav.Link>
          <Nav.Link as={Link} to="/viewrecipes" className="nav-item">
            View Recipes
          </Nav.Link>
          <NavDropdown
            title="Categories"
            id="basic-nav-dropdown"
            className="nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/category/maincourse">
              Main Course
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/appetizers">
              Appetizers
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/beverages">
              Beverages
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
