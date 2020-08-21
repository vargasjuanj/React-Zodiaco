import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MenuSuperiorDeOpciones from './components/MenuSuperiorDeOpciones';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import AgrupadosPorElementos from './pages/AgrupadosPorElementos';
//import {Link} from 'react-router-dom'
//import './App.css'
//import logo from './logo.svg'
//import data from '../assets/json/lista_provincias.json'
//import {Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button,Table} from 'react-bootstrap'


/*
    constructor (props){
       super(props)
       //let meses=[]
       this.state={}
       console.log(this.state)
   }

 */
function App() {


  return (


    //NOta: las cards del bootstrap comun no funcionan en vue, , y no se q otros elementos, tener cuidado. En react tampoco, porque hay que cerrar las etiquetas de otra forma, no reconoce style y hay que usar el calssName, elementos simples pueden usar bootstrap comun, como algun boton o input
    <div className="App">
<MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
     <BrowserRouter>
<Switch>
<Route exact path="/" component={Home}></Route>
  <Route exact path="/home/:mes" component={Home}></Route>
  <Route exact path="/detalles/:id" component={Detalle}></Route>
  <Route exact path="/agrupados" component={AgrupadosPorElementos}></Route>

</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;

