import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDOuKaVbyDgutpQUOefaGMTKP1MDo7sBng',
  authDomain: 'maps-basquet-park.firebaseapp.com',
  projectId: 'maps-basquet-park',
  storageBucket: 'maps-basquet-park.appspot.com',
  messagingSenderId: '222788115815',
  appId: '1:222788115815:web:25f2efff6e9ceaa8a8e3c2',
  measurementId: 'G-W8STNDV8Z7',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
