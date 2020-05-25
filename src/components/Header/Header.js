import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.less";

function Header() {
  return (
    <Navbar className="main-header" fixed="top" bg="primary" variant="dark">
      <Navbar.Brand href="#home">Agile Board</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
