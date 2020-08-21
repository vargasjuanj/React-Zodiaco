import React, { Component } from 'react'
import datos from '../assets/json/zodiaco.json'
import { Container } from 'react-bootstrap'
import {Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button} from 'react-bootstrap'
export default class Detalle extends Component {
    constructor(props){
        super(props)
        let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        this.state={datos,meses}
        console.log(props)
    }
    render() {
      let id= Number( this.props.match.params.id)
      let element=this.state.datos.find(aux=>aux.id==id)
        return (
            <div className="container" style={{
                marginTop:'100px'
            }}>
<div>
   <Row>
       <Col>
         <Row>
         <img className="img-fluid" src={require(`../assets/img/${element.imagen}`)}  alt="signo del zodiaco"></img>
         <hr></hr>
         </Row>
         <Row>
        <h3>{element.signo}</h3>
         </Row>
       </Col>

       <Col>
       <Row>
           <Col>
           
         <p>Elemento:</p>
        <p>Simbolo:</p>
        <p>Meses:</p>
           </Col>

           <Col>
           <p>{element.signo}</p>
<p>{element.simbolo}</p>
<br></br>
            <ul>
            {element.meses.map((mes,index)=>{
            return (
            <li key={index}>{this.state.meses[mes-1]}</li>
            )
        })}
        </ul>
      

           </Col>
       </Row>
       <Row>

       <p>Descripción:</p>
    <p>{element.descripcion}</p>
       </Row>
       
       </Col>
   </Row>
</div>

            </div>
        )
    }
}
