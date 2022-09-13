import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBquL_5DfaXss5-lxNQW8rTj4sSQyaEffU",
    authDomain: "codespear-25a05.firebaseapp.com",
    projectId: "codespear-25a05",
    storageBucket: "codespear-25a05.appspot.com",
    messagingSenderId: "283517529309",
    appId: "1:283517529309:web:800a05cf59cb0a27ca3f34",
    measurementId: "G-987XX64DQG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = (email, password) => {
  let user;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      user = userCredential.user;
      alert(user.email)
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
  });
  return user;
}


export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert(user.email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
}


export const useAuth = () => {
    const [user, setUser] = useState('');
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUser(user);
        } else {
          return;
        }
      });
    return user;
}

export const logOut = () => {
    signOut(auth).then(() => {
        alert("user logged out")
      }).catch((error) => {
        console.log(error)
      });
}

export const updateUser = (name) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name , //photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    alert('alert profile updated')
  }).catch((error) => {
    alert(error.message);
  });
}



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export const addCourse = async() => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}