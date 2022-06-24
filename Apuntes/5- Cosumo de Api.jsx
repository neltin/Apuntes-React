/**
 * Consumo de Api
 * --------------
 * Se hace peticiones de cliente -> servidor
 * cliente: La aplicacion
 * Servidor: donde esta la informacion
 *
 * Push Notification:
 * ------------------
 * Como whatsaap envia notificaciones por un mensaje que llego
 * seria como servidor -> cliente
 *
 * Pulling:
 * -------
 * Cada un intervalo de tiempo el cliente le hace una peticion al servidor.
 * por ejemplo: verificar si aceptaste la solucitud algun evento.
 *
 * Request http:
 * -------------
 * Se necesita una
 * URL
 * GET, POST, PUT (actualiza la informacion), PATCH (pequeñas actualizaciones), DELETE
 * Parametros: query o url
 * header y un body
 *
 * Es una Arquitectura de tipo REST
 */

const [characters, setCharacters] = useState([]);

//Trae los datos del servidor
useEffect(() => {
  /**
   * Se puede filtrar de ante mano si es necesario la informacion
   * segun los paramatros que puedan entregar o crear uno
   * en la url ?variable=dato
   *
   */
  fetch('https://rickandmortyapi.com/api/character?page=2', {
    method: 'GET',
    //"body": {name: "martin", image: "martin.jpg"} Sirve para PATCH, POST, PUT
  })
    //Es necesario que el objeto que llega se transforme en un JSON para su aplicacion
    .then((res) => res.json())
    //Recibimos la nformacion de la API que hicimos consultas
    .then((data) => setCharacters(data.results));
}, []); //Recarga una vez

/**
 * Function Async wait
 * -------------------
 * Esta funciones que podemos crear no permite tener funcionamientos Asincrono
 * cosa que useEffect tiene como limitante y no permite.
 * Declaracion:
 * async function name(){ } o const name = async() =>{ }
 *
 * await: es esperar, es como decir tenes que esperar cierta informamacion
 *
 * Esto nos permite hacer varios query guardarlos y tener que hacer varios anidados de .then
 */

const [characters, setCharacters] = useState([]);
const [location, setLocation] = useState([]);

const getCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  setCharacters(data.results);

  const resLocation = await fetch('https://rickandmortyapi.com/api/location');
  const dataLocation = await res.json();
  setLocation(dataLocation.results);
};
/**
 * Y utilizamos la funcion dentro del useEffect()
 */
useEffect(() => {
  getCharacters();
}, []);
