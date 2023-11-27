// import { initializeApp } from "@react-native-firebase/app";
// import { getStorage } from "@react-native-firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhRZBNvzZ52tI_tgFIFkPoXiOPkyiHH4g",
  authDomain: "nolanwork-128ad.firebaseapp.com",
  projectId: "nolanwork-128ad",
  storageBucket: "nolanwork-128ad.appspot.com",
  messagingSenderId: "708741152303",
  appId: "1:708741152303:web:eb020d3e5202253cbd10da",
  measurementId: "G-3D7Q197MX1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
