// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuPk_BbZyZTYLwBQm_o-Xotz-KwDF5q0I",
  authDomain: "food-recipes-2b0f5.firebaseapp.com",
  databaseURL: "http://food-recipes-2b0f5.firebaseapp.com",
  projectId: "food-recipes-2b0f5",
  storageBucket: "food-recipes-2b0f5.appspot.com",
  messagingSenderId: "528137384189",
  appId:"1:528137384189:web:79528e08102cd791adce94",
  measurementId: "G-3419JE7G00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function getUsers() {
    const userId = collection(db, 'users');
    const userSnapshot = await getDocs(userId);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
}

export async function getRecipes() {
  const recipeCollection = collection(db, 'post');
  const recipesSnapshot = await getDocs(recipeCollection);
  const recipes = recipesSnapshot.docs.map(doc => doc.data());
  return recipes
}