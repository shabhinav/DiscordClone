import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDmQN2Db4JUysTPd8E-r6qITnBuo0HKcMA",
    authDomain: "discordclone-e5ba3.firebaseapp.com",
    databaseURL: "https://discordclone-e5ba3.firebaseio.com",
    projectId: "discordclone-e5ba3",
    storageBucket: "discordclone-e5ba3.appspot.com",
    messagingSenderId: "564188513417",
    appId: "1:564188513417:web:7d8817fe33398cf33db258",
    measurementId: "G-EL8LFE0GXJ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth= firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth,provider};
  export default db