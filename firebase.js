// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIRABASE_AUTH_DOMAIN,
  projectId: process.env.FIRABASE_PROJECT_ID,
  storageBucket: process.env.FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRABASE_MESSAGE_SENDER_ID,
  appId: process.env.FIRABASE_APP_ID,
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
