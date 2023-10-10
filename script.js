// modules
import { SignIn } from './modules/loginModule.js'
// selectors
const loginForm = document.querySelector('#login-form')
// functions

loginForm.onsubmit = async (e) => {
  e.preventDefault()
  const user = {
    email: e.target[0].value,
    password: e.target[1].value,
  }
  const res = await SignIn(user)
  console.log(res)
}
