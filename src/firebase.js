import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDj5XpbODZ6DX7JcJMgZOsGDnrsEIhVREE",
  authDomain: "kittyalbum.firebaseapp.com",
  projectId: "kittyalbum",
  storageBucket: "kittyalbum.appspot.com",
  messagingSenderId: "662127918976",
  appId: "1:662127918976:web:0aa3daa9e5d3f561d88b65",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
