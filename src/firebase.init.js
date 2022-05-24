// import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID
// };


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyTMyHSHmAHv_0zZUk3-N5_voQVOXs4AQ",
  authDomain: "bike-bones.firebaseapp.com",
  projectId: "bike-bones",
  storageBucket: "bike-bones.appspot.com",
  messagingSenderId: "516330565599",
  appId: "1:516330565599:web:0240339000cf966267de6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;