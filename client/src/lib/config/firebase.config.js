// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; //importamos el módulo correspondiente de la autenticación.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDQ074m9D8E6VDZ7DYG7chRumDXKp7ApfY',
	authDomain: 'last-practice-c5e06.firebaseapp.com',
	projectId: 'last-practice-c5e06',
	storageBucket: 'last-practice-c5e06.firebasestorage.app',
	messagingSenderId: '502902582324',
	appId: '1:502902582324:web:c5e88b86869d0ce2d0ae61'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); //exportamos la autenticación + app de firebase
