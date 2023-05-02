// import { initializeApp } from "firebase/app";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from "firebase/auth";

// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCfLrY18fK2jFJFaiqwtW3SCIvJpohuZf8",
//   authDomain: "whatsapp-clone-7d41e.firebaseapp.com",
//   projectId: "whatsapp-clone-7d41e",
//   storageBucket: "whatsapp-clone-7d41e.appspot.com",
//   messagingSenderId: "542831774351",
//   appId: "1:542831774351:web:d8729312a27ad2a9623efa",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const provider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, provider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// export { auth, provider };

// export default db;

////////////////////////////////////

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfLrY18fK2jFJFaiqwtW3SCIvJpohuZf8",
  authDomain: "whatsapp-clone-7d41e.firebaseapp.com",
  projectId: "whatsapp-clone-7d41e",
  storageBucket: "whatsapp-clone-7d41e.appspot.com",
  messagingSenderId: "542831774351",
  appId: "1:542831774351:web:d8729312a27ad2a9623efa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
