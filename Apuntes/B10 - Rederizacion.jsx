/**
 * Renderizacion condicional
 * -------------------------
 * Dentro del retun() donde se realiza el html
 * Se pueden general condicionante de 3 manera.
 * 1) Atravez de un dato si concide o no renderiza
 * utilizando operaciones ternerarias en una linea del render.
 */
 const [buscar, setBuscar] = React.useState();
 return(
    {buscar ? <input type="text" /> : ''}
 );

 /**
  * 2) Generando una condicion y dividir que se renderiza y que no con 2 return()
  */

  const [loder, setLoder] = React.useState();
  useEffect(() => {
    setLoder(true);
    setTimeout(() => setLoder(false), 4000);
  }, []);

  if (loder) {
    return (
      <div>
        <h1>Looding...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Renderiza pagina Home</h1>
    </div>
  );
/**
  * 3) Y para mostrar texto
  */
 const [buscar, setBuscar] = React.useState();
 return(
 <button onClick={() => setBuscar(!buscar)}>
 {buscar ? 'Ocultar input' : 'Buscar'}
</button>
 );

 /**
  * Memo
  * ----
  * Es una funcion de de React, donde permite acordarse de una renderizacion.
  * Si ya se hizo y ninguna de sus props cambio, no lo va a volver a renderizar.
  * https://es.reactjs.org/docs/hooks-reference.html#usememo
  */
 import{memo} from 'react';

 function Looder({prop1, prop2}){
  return(

  );
 }

 export default memo(Looder);

