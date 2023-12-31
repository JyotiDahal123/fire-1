// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

//signUp
const SignUp = async (user) => {
  try {
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(auth, user.email, user.password)

    return {
      success: true,
      user: {
        id: uid,
      },
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}
//signIn
const SignIn = async (user) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    )
    const token = await res.user.getIdToken()
    return {
      success: true,
      token,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}
// guard
const Guard = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) return true
    location.href = callback
  })
}

//logout
const Logout = async () => {
  try {
    await signOut(auth)
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}
export { SignUp, SignIn, Logout, Guard }
