// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQUHICFszVnlCn4i6HMw8rvOjMEil2M3M',
  authDomain: 'house-marketplace-app-3b10d.firebaseapp.com',
  projectId: 'house-marketplace-app-3b10d',
  storageBucket: 'house-marketplace-app-3b10d.appspot.com',
  messagingSenderId: '522027333333',
  appId: '1:522027333333:web:92993d7fbc7287a30e545c',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
