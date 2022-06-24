/**
 * Props
 * -----
 * En las propiedades se le puede pasar cualquier tipo de informacion
 * Funciones, valores
 * 
 * Y componetes que se crean en el componente
 * Ejemplo:
 * 
 * Componente Padre
 * ----------------
 * En vez de una etiqueta cerrada para mandar valores como suele hacer.
 * creamos una etiqueta abierta y cerrada.
 * <Card></Card>
 * Dentro de la etiqueta podemos crear un componente nuevo
 * 
 */

import React from 'react';
import Card from './Card';

export class Child extends React.Component {
	  //Impresión del Menu
	  state ={
			datos: [
				{
					mensaje:'hola soy mensaje de',
					nombre: 'Martin Gauto'
				},		
				{
					mensaje:'hola soy mensaje de',
					nombre:'Silvana Calio',
				}
			]
	  }

	render() {
		return (
	  		<div>
				{this.state.datos.map((item) =>
					<Card { ...item } >
					<>
						hola soy el hijo children
					</>

					</Card>
				)}


	  		</div>					
		)
	}
}


/**
 * Hijo
 * ----
 * Palabra reservada children.
 * se recibe como argumento de la funcion con la palabra reservada children
 * 
 * eh imprime  <>hola soy el hijo children</>
 **/ 
 
import React from 'react';

export default function Card ({nombre, mensaje, children}){
	return(
		<>
			<h3>{nombre}</h3>
			<div>{mensaje}</div>
			<p><strong>{children}</strong></p>
		</>
	)
}
 
/**
 * Agregar nuevo dato
 * Creamos un boton que al hacer click se agrega a los datos de State un Nuevo dato
 * Se crea una funcion, se consige los datos nuevos
 * y con setState incorporamos el nuevo dato
 */ 
	setDatos = () =>{
		const NewDato = {
				mensaje:'Soy un nuevo dato',
				nombre: 'Super Martin Gauto Recargado'
		}
		/**
		 * [...this.state.datos, NewDato]
		 * Agrega un dato a los datos ya existente
		 * Es como un Append child
		*/
		this.setState({
			datos : [...this.state.datos, NewDato]
		})
	} 
	/*Boton que llama setDatos al hacer click*/
	render() {
		return (
	  		<div>
				{this.state.datos.map((item) => <Card { ...item } > <> Soy un hijo de Child </> </Card> )}
				
				<button onClick={this.setDatos}>Agregar nuevo dato</button>
	  		</div>					
		)
	}


/**
 * Hooks
 * -----
 * Apartir de la version 16.8.0 de react
 * Le agregamos un {useState} son funciones que nos da React
 * Se puede crear un component sin necesidad de extender una Class
 * cosa que no se puede en una funcion
 * 
 * Se remplaza state creando una constante
 * [nombre de variable , su funcion de seteo] = el valor inicial usando la funcion useState() 
 * 
 * const [state, setState] = useState(initialState) 
 * 
**/
import React, {useState} from 'react';

const refData = [{mensaje:'hola soy mensaje de', nombre: 'Martin Gauto'},]

function EjHooks(){
	const [ref, setRef] = useState(refData);
	const [count, setCount] = useState(1);

	//Acción agregar uno al contador
	const mas = (event) => {
		setCount(count + 1);
	}

	return (
		<>
			<p>Ejemplo de Hooks en las funciones no se puede llamar por this, asi que el llamado es directo</p>
			{
				ref.map((item) =>
					<p>{item.mensaje} <strong>{item.nombre}</strong></p>
				)
			}
			<p>Contador: <span className="valor">{count}</span></p>
			<button type="button" className="btn mas" onClick={mas}>+</button> 
		</>				
	)	
}

/**
 * Funciones useEffect
 * -------------------
 * Otra funcion que se puede recibir de reack Hooks
 * 
**/


import React, {useState, useEffect} from 'react';

function EjHooks(){
	useEffect(() =>	{
		//Se ejecuta siempre

	})

	useEffect(() =>	{
		//Se ejecuta una solavez
		//componentDidMouht()
	}, [])

	useEffect(() =>	{
		//Se ejecuta simpre que se modifique la variable 
		//componentDidUpdate()
	}, [variable])
	
	return (
		//componentWillMouht cuando se incorpora el return
		<></>				
	)

}