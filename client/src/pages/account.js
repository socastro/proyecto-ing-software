import React from "react";
import {Container, Card} from "react-bootstrap";

export default function Account(){
    return(
        <div style={{marginTop:50}}>
        <Container>
            <h1 className="home-title"><strong>Tu cuenta</strong></h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <img src="user-photo.jpg" className="rounded-circle img-fluid" />
                    <Card.Title>Neal Caffrey</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Rol ~ Empresario</Card.Subtitle>
                    <Card.Text>
                    Descripción?
                    </Card.Text>
                    <Card.Link href="#">Editar mi rol</Card.Link>
                    <Card.Link href="#">Link?</Card.Link>
                </Card.Body>
            </Card>
            <div>Reportes pedidos?</div>
            <h2>Mis Proyectos</h2>
        </Container>
        </div>
    );
}