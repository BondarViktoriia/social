import firebase from "firebase/compat";
import "firebase/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqq_WjlE3LL4YF5LKDO_4mWu-chKhWr90",
  authDomain: "social-50ce8.firebaseapp.com",
  projectId: "social-50ce8",
  storageBucket: "social-50ce8.appspot.com",
  messagingSenderId: "438710904333",
  appId: "1:438710904333:web:e7cf461b758e89e7bcd744",
  measurementId: "G-9QDKVYKEZD"
};

export default firebase.initializeApp(firebaseConfig);