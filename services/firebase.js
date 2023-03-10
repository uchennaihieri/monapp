import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore, onSnapshot, collection, updateDoc, addDoc, doc, getDoc, getDocs, serverTimestamp, setDoc, deleteDoc, arrayRemove, arrayUnion } from "firebase/firestore"

import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, isSignInWithEmailLink, signInWithEmailLink, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification, setPersistence, browserLocalPersistence, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";



const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}



const app = getApps().length > 0 ? getApp() : initializeApp(config);
const auth = getAuth(app)
const db = getFirestore(app)


export { db, auth, addDoc, serverTimestamp, onSnapshot, isSignInWithEmailLink, signOut, signInWithEmailLink, collection, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateDoc, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, doc, getDoc, getDocs, setDoc, deleteDoc, sendEmailVerification, arrayRemove, arrayUnion }

