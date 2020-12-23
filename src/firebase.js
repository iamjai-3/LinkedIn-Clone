import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBjD4O6kr17DtXmesvF5T-4Fm1nc7b3bgA',
	authDomain: 'linkedin-clone-9b69e.firebaseapp.com',
	projectId: 'linkedin-clone-9b69e',
	storageBucket: 'linkedin-clone-9b69e.appspot.com',
	messagingSenderId: '1030144799323',
	appId: '1:1030144799323:web:19a99dd0cb87a3de64057e'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
