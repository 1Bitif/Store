import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBKtvhTKukwIk2pmFIgeFOxIbKiG1hkvCw",
  authDomain: "react-store-ecommerce.firebaseapp.com",
  projectId: "react-store-ecommerce",
  storageBucket: "react-store-ecommerce.appspot.com",
  messagingSenderId: "257678590330",
  appId: "1:257678590330:web:2adcb5689c2aace365d6c3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export  {auth , app};
