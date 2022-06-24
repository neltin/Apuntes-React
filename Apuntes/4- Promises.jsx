/**
 * Promises
 * --------
 * Ejecutas funciones que actuan en segundo plano esperando alguna tipo de respuesta y mientras ejecutas otras funciones.
 *
 * Dentro del promise ejecutos las funalidades o consultas que quiero hacer por ejemplo: Consulta SQL
 * Si recibio la informacion
 * utilizo la funcion resolve() para devolver el dato o los datos.
 * Si no utilizo rejact()
 */

const variable = new Promise((resolve, rejact) => {
  resolve('Devolucion de la informacion');
  rejact('es un error');
});

/**
 * Then: Actua como un Try - Recibe información si no hay problemas 
 * data -> Resolve
 * Catch: Recibe informacion sobre un error data -> Rejeact
 * Finally: Siempre se ejecuta 
 * Data: información que recibe puede ser cualquier variable
 * 
 * 
 * (data) =>{ Ejecucion de luego de recibir los datos }

**/
variable.then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  })
  .finally(()=>{
    console.log("Me ejecute porque soy Finally");
  });
