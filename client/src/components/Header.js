import React from "react";
import '../index.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

export default function Header() {
  return (
    <div className="header">
      <Navbar  bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/"><img id="logo-fablab" width="170" height="90" src= "fablab-utfsm.png" ></img></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="reportes">Reportes</Nav.Link>
        <Nav.Link href="inscripcion">Inscribe tu proyecto</Nav.Link>
        <Nav.Link href="maquinas">Solicitud de Máquina</Nav.Link>      
        <Nav.Link href="cuenta">Mi Cuenta</Nav.Link>      
      </Nav>
      </Navbar>
    </div>
  );
}