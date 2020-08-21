import React, { Component } from 'react'
import {Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button,Table} from 'react-bootstrap'

import datos from '../assets/json/zodiaco.json'
export default class AgrupadosPorElementos extends Component {
   constructor (props){
       super(props)
       this.state={datos}
   }
   
    render() {
        return (
            <div style={{
                margin:'100px'
            }}>
               <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Elemento</th>
      <th>Signos</th>
 
    </tr>
  </thead>
  <tbody>

{this.state.datos.map(element=>{
    return (
        <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.elemento}</td>
        <td>{element.signo}</td>
        </tr>
    )
})}
  
  </tbody>
</Table>
            </div>
        )
    }
}
