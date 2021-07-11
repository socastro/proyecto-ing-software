import React from "react";
import '../index.css';
import {Card, CardColumns, Form, FormControl, Button} from 'react-bootstrap'

export default function Footer() {
  return (
    <blockquote className="blockquote mb-0 card-body">
    <hr></hr>
    <footer class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <h3>Ubicación</h3>
                        <p>Av. Vicuña Mackenna 3939, San Joaquín, Santiago<br></br></p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>R</h3>
                        <ul class="list-inline">
                        </ul>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Redes Sociales</h3>
                        <p>FB IG LINKDIN YOUTUBE  <a href="http://fablab.usm.cl">FabLab</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy;
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </blockquote>
    );
}