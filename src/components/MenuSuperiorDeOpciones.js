import React, { Component } from 'react'
import {Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class MenuSuperiorDeOpciones extends Component {
   constructor(props){
    let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      super(props)
       this.state={meses}
   }
   
    render() {
        
        return (
            <div className="mb-5" >
  <Navbar bg="dark" variant="dark" className="justify-content-center fixed-top ">

    <Navbar.Brand className ="" href="/">HOME</Navbar.Brand>
    <Nav >
      <Nav.Link className="" href="/agrupados">Agrupados por Elemento</Nav.Link>
    </Nav>

    <NavDropdown className="" title="Seleccione un mes.." id="nav-dropdown">
          {this.state.meses.map((mes,index)=>{
              return (
                <NavDropdown.Item href={`/home/${index+1}`}  key={index}>{mes}</NavDropdown.Item>
              )
          })}
      </NavDropdown>
  </Navbar>

     
 
            </div>
        )
    }
}
