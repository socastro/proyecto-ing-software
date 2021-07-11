import React from "react";
//import Container from "react-bootstrap/Container";
import { Table, Container } from "react-bootstrap";
import { BsCalendar } from "react-icons/bs";

export default function maquinas(){
    return(
        <div style={{marginTop:50}}>
        <Container>
            <h1 className="home-title"><strong>Máquinas Fablab</strong></h1>
            <hr></hr>
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre de Máquina</th>
                <th>Cantidad</th>
                <th>Disponibilidad</th>
                <th>Agendar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Máquina 3D</td>
                <td>3</td>
                <td>Disponible</td>
                <td><BsCalendar /></td>
                </tr>
                <tr>
                <td>2</td>
                <td>Cortadora Láser</td>
                <td>2</td>
                <td>No disponible</td>
                <td><BsCalendar /></td>
                </tr>
                <tr>
                <td>3</td>
                <td>Torno</td>
                <td>1</td>
                <td>No disponible</td>
                <td><BsCalendar /></td>
                </tr>
                <tr>
                <td>4</td>
                <td>Router CNC</td>
                <td>1</td>
                <td>No disponible</td>
                <td><BsCalendar /></td>
                </tr>
                <tr>
                <td>5</td>
                <td>Cortadora de Vinilo</td>
                <td>1</td>
                <td>No disponible</td>
                <td><BsCalendar /></td>
                </tr>           
            </tbody>
            </Table>
        </Container>
        </div>
    );
}