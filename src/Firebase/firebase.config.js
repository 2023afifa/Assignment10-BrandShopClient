import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVs9DXmsfN1kBXU5efN3H5CTrlWsOjjT0",
  authDomain: "brandshop-bdf06.firebaseapp.com",
  projectId: "brandshop-bdf06",
  storageBucket: "brandshop-bdf06.appspot.com",
  messagingSenderId: "404587589278",
  appId: "1:404587589278:web:908292732f621c2d6ad58f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;