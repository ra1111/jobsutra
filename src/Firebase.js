import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyB59S8vKXas5UlMaAIKVTOTVQcUPatOglU",
    authDomain: "jobsutra-fc44a.firebaseapp.com",
    databaseURL: "https://jobsutra-fc44a.firebaseio.com",
    projectId: "jobsutra-fc44a",
    storageBucket: "",
    messagingSenderId: "366406949387",
    appId: "1:366406949387:web:0723cc99b88f900e"
};
var fire = firebase.initializeApp(config);
export default fire;