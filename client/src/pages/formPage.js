import {useState} from 'react'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'
//import {Axios} from 'axios'
const axios = require('axios');

/**
 * Form --> Container
 *              |_
 *                Row -> Col ->Titulo
 *                Row -> Col ->Email    Col -> Nombre del proyecto
 *                Row -> Col ->Lider del proyecto   Col -> Email del lider de proyecto
 *                Row -> Col -> Resumen     Col->Integrantes
 *                Row -> Col -> info    Col->Tipo proyecto
 */
export default function FormPage(){

    //States para BD
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[leader_name, setLeaderName] = useState("")
    const[resumen_ejecutivo, setResumen] = useState("")
    const[integrantes, setIntegrantes]   = useState("")
    const[tipo_proyecto, setTipo] = useState("")

    let data = JSON.stringify({
        id: 24,
        name: name,
        email: email,
        leader_name: leader_name,
        resumen_ejecutivo: resumen_ejecutivo,
        integrantes: integrantes,
        tipo_proyecto: tipo_proyecto
      });

    //Metodo ingresar proyecto
    const ingresarProyecto = () =>{
        axios.post("http://localhost:3001/proyecto",data,
        {validateStatus: function (status) {
            return status < 600; // Reject only if the status code is greater than or equal to 500
            }}
        /**{
            body:{ 
                name: name,
                email: email,
                leader_name: leader_name,
                resumen_ejecutivo: resumen_ejecutivo,
                integrantes: integrantes,
                tipo_proyecto: tipo_proyecto
            }
        }**/)
        .then(response =>{console.log(response)})
        .catch(err =>{console.log(err.response)})
    };

    const [otroSelect, setOtroSelect] = useState(true)
    return(
        <div style={{marginTop:50}}>
            <Form>
                <section id="section">
                <Container>
                        <Row>
                            <Col>
                                <h2 className="home-title"><strong>Inscripcion Proyectos FabLab UTFSM 2021</strong></h2>
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <fieldset>
                                    <Form.Group as={Row}>
                                        <Row>
                                            <Form.Label><h3 style={{textAlign:"center"}}>Tipo de proyecto: </h3></Form.Label>
                                        </Row>
                                        <br />
                                        <Col>
                                            <Form.Check type="radio" label="Académico" name="formHorizontalRadios" id="formAcademicoRadios" onClick={() =>{setOtroSelect(true)}} onChange={(e)=>{setTipo("prueba");}}/>
                                                <p>Proyectos relacionado con alguna asignatura o investigación.</p>
                                            <Form.Check type="radio" label="Iniciativa Estudiantil" name="formHorizontalRadios" id="formIniEstudiantilRadios" onClick={() =>{setOtroSelect(true)}} onChange={(e)=>{setTipo("prueba");}}/>
                                                <p>Proyecto sin fines de lucro, realizado por estudiantes de la UTFSM.</p>
                                            <Form.Check type="radio" label="Proyecto Personal" name="formHorizontalRadios" id="formProyecPersonalRadios" onClick={() =>{setOtroSelect(true)}} onChange={(e)=>{setTipo("prueba");}}/>
                                                <p>Proyecto de cualquier indole de caracter personal, realizado por un integrante de la comunidad Sansana.</p>
                                            <Form.Check type="radio" label="Emprendimiento" name="formHorizontalRadios" id="formEmprendimientoRadios" onClick={() =>{setOtroSelect(true)}} onChange={(e)=>{setTipo("prueba")}}/>
                                                <p>Proyecto para empresa particular: Proyecto realizado un emprendemiento temporal, que no busca ser algo a lo que me dedique una vez titulado.</p>
                                                <p>Startup: Proyecto que busca formar una empresa que crezca en el tiempo, y enventualmente se convierta en mi fuente laboral</p>
                                            <Form.Check type="radio" label="Memoria" name="formHorizontalRadios" id="formMemoriaRadios" onClick={() =>{setOtroSelect(true)}} onChange={(e)=>{setTipo("prueba");}}/>
                                                <p>Memoria: Corresponde a mi trabajo de titulo. </p>
                                            <Form.Check type="radio" label="Start-up" name="formHorizontalRadios" id="formStartupRadios" onClick={() =>{setOtroSelect(true)}} onChange={(e)=>{setTipo("prueba");}}/>
                                                <p>Startup: Proyecto que busca formar una empresa que crezca en el tiempo, y enventualmente se convierta en mi fuente laboral</p>
                                            <Form.Check type="radio" label="Otros" name="formHorizontalRadios" id="formOtrosRadios" onClick={() =>{setOtroSelect(false)}} onChange={(e)=>{setTipo("prueba");}}/>
                                            <p>Proyecto que no calce en las descripciones anteriores.</p>
                                            <Form.Control id="otroSeletion" type="text" disabled={otroSelect}/>
                                            <br />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                            </Col>  
                            <Col style={{marginTop:50}}> 
                                <Form.Group>
                                    <Form.Label >Nombre del proyecto:</Form.Label>
                                    <br />
                                    <Form.Control id="proyectName" type="text" placeholder="INF225 - Proyecto1" onChange={(e)=>{
                                        setName(e.target.value);
                                    }} required/>
                                    <br />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Lider:</Form.Label>
                                    <br />
                                    <Form.Control id="LeaderName" type="text" placeholder="MSL-TEAM" onChange={(e)=>{
                                        setLeaderName(e.target.value);
                                    }} required />
                                    <br />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Mail del lider:</Form.Label>
                                    <br />
                                    <Form.Control id="Email" type="text" placeholder="contacto@msl-team.cl" onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }} required/>
                                    <br />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Integrantes:</Form.Label>
                                    <br />
                                    <Form.Control id="Integrantes" type="text" placeholder="Matias Castillo, Sofia Castro, Luciano Ortiz" onChange={(e)=>{
                                        setIntegrantes(e.target.value);
                                    }} required/>
                                    <br />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Resumen ejecutivo:</Form.Label>
                                    <br />
                                    <Form.Control id="Resumen" type="text" placeholder="Resumen del proyecto" onChange={(e)=>{
                                        setResumen(e.target.value);
                                    }} required/>
                                    <br />
                                </Form.Group>
                                <Button
                                    type="button"
                                    size="lg"
                                    style={{backgroundColor:"orange", borderColor:"black", textTransform:"uppercase", marginTop:50, align:"center"}}
                                    onClick={ingresarProyecto}>
                                    <label style={{color: "white"}}>Registrar Proyecto</label>    
                                </Button>
                            </Col>
                        </Row>
                        <br />
                    </Container>

                </section>
            </Form>
        </div>
    )
}