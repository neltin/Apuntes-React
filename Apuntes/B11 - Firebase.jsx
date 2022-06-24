/**
 * Firebase Google
 * ---------------
 * Es una base de datos que nos permite transferir a tiempo real
 * Sirve para un chat, para videos juegos, Hosting.
 * Se volvio un ecosistema de cosas
 * tiene push Notification.
 *
 * https://console.firebase.google.com/
 * Luego de ingresar con una cuenta de google.
 * Firestore: para crear un BD.
 * Storage: guardado de Imagenes
 * 
 * Creamos un firestore e ingresamos los items.
 * 
 * Cuando cargamos nuestro 1eros datos. Vamos a Descripcion General -> configurar proyecto.
 * Mas abajos Hacemos click en el icono "</>"
 * 
 * Guardamos la siguiente informacion script en un archivo index.js dentro de una carpeta que vamos a crear Firebase. 
 * 
 * Ejemplo de configuracion para la conexión:
 */
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 
 
 const firebaseConfig = {
   apiKey: "AIzaSyDOuKaVbyDgutpQUOefaGMTKP1MDo7sBng",
   authDomain: "maps-basquet-park.firebaseapp.com",
   projectId: "maps-basquet-park",
   storageBucket: "maps-basquet-park.appspot.com",
   messagingSenderId: "222788115815",
   appId: "1:222788115815:web:25f2efff6e9ceaa8a8e3c2",
   measurementId: "G-W8STNDV8Z7"
 };
 
 const app = initializeApp(firebaseConfig);
 
 export const db = getFirestore(app);

/**
 * Eh instalamos la dependencia de firebase 
 */
 npm install firebase --save

 /**
  * Pedir informacion
  * -----------------
  * El componente que vamos a pedir la informacion
  * Tenemos que importar la conexion y funciones que nos aporta firebase.
  * collection() y getDocs
  */
  import { db } from './firebase';
  import { collection, getDocs } from "firebase/firestore";

  /**
   * Dentro del componente creamos 3 constantes
   * 1) Uno que va a recibir los datos de Firebase
   * 2) Otro que va estar informado el estado de carga.
   * 3) El tercero para mensajes de errores.
   */

   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();

  /**
   * Hay 2 maneras para pedir 
   * 1) Usando function async await
   * 2) Promises .them().catch()
   * 
   * Promises - useEffect
   * --------------------
   */
   useEffect(() => {
      setLoading(true);
      const Collection = getDocs(collection(db, "items"));

      Collection.then((snap) =>{ 
        //const dataDB = snap.docs.map((doc) => doc.data());
        const dataDB = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        /**
         * Si queremos incluir el ID usamos esto, eso si ya no lo incorporamos de antemanos en la estructura de la coleccion. 
         * const dataDB = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
         */ 
        setItems(dataDB);

      }).catch( 
        error => { 
          console.log("error", error);

      }).finally(()=>{
        setLoading(false);
      })
}, []);

 /**
   * Async await
   * -----------
   */
  const getDoc = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
  
    if(querySnapshot.size === 0){
      console.log('No hay resultado');
  
    }else{
      const dataDB = querySnapshot.docs.map((doc) => doc.data());
      setItems(dataDB);
    }
  }
  
  useEffect(() => {
      getDoc();
  }, []);

  /**
   * Luego para mostrar en el return() usaremos .map()
   * terner en cuenta que en la funcion de map se cierra en () y no llaves {} 
   */
  return(
    <>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )

/**
 * Por ultimo en la renderizacion se puede hacer condicionamiento
 * por ejemplo: si esta cargando muestre un cargando la informacion y si hay algun error que muestre otra cosa.
 * tienen que ir 1ero que la que renderiza los listados
 */

if (loading) return <p>Loadding Data...</p>;
if (error) return <p>{error}</p>;

/**
 * Hacer seleccion simples querys
 * ------------------------------
 * Se debe importar 2 funciones mas que son
 * query() y where()
 */
 import {query, where } from 'firebase/firestore';
/** 
 * where: son donde colocan los parametros del query 
 * Los operadores se puede encontrar Aca
 * https://firebase.google.com/docs/firestore/query-data/queries
 * 
 * query() se deve ingresar en que coleccion se va hacer la consulta y adentro la consulta.
 * este query lo pondre dentor del getDocs()
 */

 const urlParam = collection(db, 'items');
 const q = query(urlParam, where('id', '==', id));

 const Collection = getDocs(q);

 Collection.then((snap) => {
   const dataDB = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
   setItems(dataDB);
 })
