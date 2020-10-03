import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAZySTp0vSr63KZca_gjIZCclnMljtPLJo",
        authDomain: "todo-react-dfdb1.firebaseapp.com",
        databaseURL: "https://todo-react-dfdb1.firebaseio.com",
        projectId: "todo-react-dfdb1",
        storageBucket: "todo-react-dfdb1.appspot.com",
        messagingSenderId: "486791512831",
        appId: "1:486791512831:web:89a4319399dbad772f02ca",
        measurementId: "G-LQZQP8FYN2"      
});

const db = firebaseApp.firestore();

export default db;