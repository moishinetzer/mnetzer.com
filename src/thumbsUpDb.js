import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDLbxuQk9zqQjYBXyvHbRZ-YDz913g2SMw",
  authDomain: "thumbs-up-count.firebaseapp.com",
  databaseURL:
    "https://thumbs-up-count-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thumbs-up-count",
  storageBucket: "thumbs-up-count.appspot.com",
  messagingSenderId: "834962453738",
  appId: "1:834962453738:web:4e3d776e3bb980874ad393"
});

// Export the database for components to use.
export const thumbsUpDb = firebaseApp.database();
