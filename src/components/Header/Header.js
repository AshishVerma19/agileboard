import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Agile Board</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
