// modules
import { SignIn } from '../modules/loginModule.js'
// selectors
const loginForm = document.querySelector('#login-form')
const res = document.querySelector('#res')
// functions

loginForm.onsubmit = async (e) => {
  e.preventDefault()
  const user = {
    email: e.target[0].value,
    password: e.target[1].value,
  }
  const { success } = await SignIn(user)

  if (success) return (location.href = 'home.html')
  res.innerHTML = 'Invalid Credentials!'
  res.className = 'text-red-500'
}

