import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCUHq7DIsumdBqo34GLwqt-0q2iSPmISLs",
  authDomain: "blog-5ced8.firebaseapp.com",
  projectId: "blog-5ced8",
  storageBucket: "blog-5ced8.appspot.com",
  messagingSenderId: "58730697033",
  appId: "1:58730697033:web:84734bb38c0ebd0e338a98",
  measurementId: "G-LVHBGQWCGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// initialize firestore
export const db = getFirestore(app)

// initialize storage
export const storage = getStorage(app)