
    let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
l
let element ={
    signo:'Sagitario',
    meses:[11,12]
}


//Extraigo noviembre y diciembre usando como fuente el array meses, resto 1 porque el array meses tienen el primer elemento en la posicion cero
    element.meses.map((mes,index)=> this.state.meses[mes-1])

//Filtrar objetos quie tienen  mes en comun, cada objeto tiene la siguiente propiedad por ej meses[11,12] noviembre-diciembre
//Si el array meses del objeto incluye el valor 12 por ejemplo, dos zodiacos corresponden => sagitario y capricornio
//Se transforma la variable mes  a number
let aux = datos.filter(element=>element.meses.includes(Number(mes)))

