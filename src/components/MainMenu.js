import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainMenu(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">tools.yabb.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://yabb.io">Yabb.io</Nav.Link>

            <NavDropdown title="General" id="basic-nav-dropdown">
              <NavDropdown.Item href="/general/methods">Methods</NavDropdown.Item>
              <NavDropdown.Item href="/general/notes">Notes</NavDropdown.Item>
              <NavDropdown.Item href="/general/story">Story Telling</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/general/generator">Generator</NavDropdown.Item>
              <NavDropdown.Item href="/general/tutorial">Tutorial</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Plot" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Generator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tutorial</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Characters" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Generator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tutorial</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Locations" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Generator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tutorial</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Items" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Generator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tutorial</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Items" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Generator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tutorial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainMenu;