/**
 * Componetes de clases React
 *---------------------------
 * Para definirla usamos: React.Component
 * 
 * state 
 * -----  
 * objeto reservado para variables usados por el componete
 **/

import React from 'react'
import Contador from './contador'

export class CardWithClass extends React.Component {
	state = {
		contador: 1,			 
	}

/**
 * Metodos que dan React componets
 * --------------------------------
 * 
 * componentWillMouht: Se ejecuta antes de que sea Renderizado.
 * 
 * componentDidMouht: Ya esta renderizado en el navegador.
 * 
 * componentDidUpdate: Renderizado pero en el componete hay un cambio
 * 
 * setState() actualiza los estados de la clase
 * 
 * para referirse a un estado, funciones o variable del componente usamos this. 
 **/
	
	componentWillMouht(){

	}

	componentDidMouht(){
		this.setState({contador : this.state.contador + 1})
	}	

	componentDidUpdate(){

	}

	//Meto de creacion de Funciones
	sumar = () =>{
		this.setState({contador : this.state.contador + 1})
	}

/**
 * Propiedades
 * ------------
 * Para pasar propiedades creamos dentro de la etiqueta nombre = "propiedad"
 * El componente al que se lo entregamos del otro lado lo recibe como argumento props
 * Ejemplo en el componente de Funcion
 **/ 
	render() {
		return (
			<div>
				{this.state.contador}


				<Contador numero={this.state.contador} otronumero="1" />
			</div>
		)
	}
}

export default CardWithClass;

/**
 * Componente de funcion
 * ---------------------
 * Sirve si solo hay que impromir HTML
 **/

import React from 'react'

export default function Contador(props){
	return(
		<div>
			<strong>{props.numero}</strong>
		</div>
	)
	
}
/**-----------------------------------------**/
/**
 * .map()
 * ------
 * En .JSX genera una iteracion es similar al FOR o FOREACH
 * item = es cadda uno de los objetos
 * .map(
 *		function(item){
 * 				
 *		}
 * )

*/
const refData = [
	{
		mensaje:'hola soy mensaje de',
		user:{
			name:'Martin Gauto',
			carrera:'Diseño Web'
		}
	},		
	{
		mensaje:'hola soy mensaje de',
		user:{
			name:'Martin Gauto',
			carrera:'Diseño Web'
		}
	}
]


this.state.objeto.map((item) => 
	<div>
		{item.mensaje}
	</div>
)
