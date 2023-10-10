// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDVl5-dTha7FZOfEzJ5JhOnIJCHy_hCBNs',
  authDomain: 'fire-1-da7ff.firebaseapp.com',
  projectId: 'fire-1-da7ff',
  storageBucket: 'fire-1-da7ff.appspot.com',
  messagingSenderId: '444814209855',
  appId: '1:444814209855:web:3a072fcc8296990504d98a',
  measurementId: 'G-MSYBHGTQ06',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const auth = getAuth()

const SignIn = async (user) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    )
    console.log(res.auth)
  } catch (error) {
    console.log(error.message)
  }
}
export { SignIn }
