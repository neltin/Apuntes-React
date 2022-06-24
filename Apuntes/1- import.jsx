/**Creacion de clases
 * importar componetess de React: import React from 'react';
 * 
 * Para enviar
 * export default y el nombre de la clase
 * 
 **/


//Importacion de componentes React
import React from 'react';
//Importacion de estilos
import './NavBar.css';

//Creacin de la clase
class NavBar extends React.Component{
	//Aca van todos los funcionamiento de la clase

	/*--------------------*/

	//Impresión del Menu
	render(){
		return (
			<h1>Hola</h1>
		);
	}
}

export default NavBar;

/** Llamado de una clase desde otro componente
 *  import - La clase que llamamos (los componentes siempre en Mayus.) 
 *  from - Su ubicacion
 * 
 *	Incorporacion en el HTML
 * 	Etiqueta que se cierra a si misma <NavBar /> 
 **/

import NavBar from './components/navbar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
    <div>
  );
}       