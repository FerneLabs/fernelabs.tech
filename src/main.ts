import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIUGiRjLSsLwkSaRJt7DX5EdyK0kIhlh8",
    authDomain: "fernelabs-fc1d1.firebaseapp.com",
    projectId: "fernelabs-fc1d1",
    storageBucket: "fernelabs-fc1d1.firebasestorage.app",
    messagingSenderId: "492579557086",
    appId: "1:492579557086:web:531b2b790314ff4f6a3c4f",
    measurementId: "G-C4FN33N0L1"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const app = createApp(App)
app.use(router)
app.mount('#app')
