import React, { Component } from 'react'
import datos from '../assets/json/zodiaco.json'
import {Container,Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class Detalle extends Component {
    constructor(props){
        super(props)
        let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        this.state={datos,meses}
        console.log(props)
    }
    volver=()=>{
        window.history.back();
      }
    render() {
      let id= Number( this.props.match.params.id)
      let element=this.state.datos.find(aux=>aux.id==id)
        return (
            <div style={{
                marginTop:'100px'
            }}>

    <Container>
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
<Link className="btn btn-info btn-small btn-block" to="#" onClick={this.volver}> VOLVER</Link>

</Container>

            </div>
        )
    }
}
