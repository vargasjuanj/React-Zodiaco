import React, { Component } from 'react'
import {Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button} from 'react-bootstrap'
import datos from '../assets/json/zodiaco.json'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    constructor(props){
        super(props)
        let mes = props.match.params.mes
if(mes == undefined){

    this.state={datos}
}else{
    let aux = datos.filter(element=>element.meses.includes(Number(mes)))
    this.state={datos:aux}
    console.log(this.state.datos)
}


     
    }
    render() {

        return (
            <div className="container " style={{
                marginTop:'80px'
            }}>
            <div className="row">
             {this.state.datos.map((element)=>{
                 return (
                     <div className="col-3 mb-5 "  key={element.id}>
                      
                         <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={require(`../assets/img/${element.imagen}`)} />
                    <Card.Body>
                 <Card.Title className="text-center">{element.signo}</Card.Title>
                      <Link className="btn btn-primary btn-small btn-block"  to={`/detalles/${element.id}`}>VER DETALLES</Link>
                    
                    </Card.Body>
                  </Card>

                     
        
                     </div>
        
                 )
             })}
             </div>
            </div>
        )
    }
}
