//Modules
import { SignUp } from './modules/firebase.js'
//Selectors
const myForm = document.querySelector('#my-form')
const res = document.querySelector('#res')
//Functions

myForm.onsubmit = async (e) => {
  e.preventDefault()
  const user = {
    email: e.target[0].value.trim(),
    password: e.target[1].value.trim(),
  }
  const { success } = await SignUp(user)

  if (success) {
    res.innerHTML = 'Register successfully !'
    res.className = 'text-green-500'
    return
  }
  res.innerHTML = 'Register failed !'
  res.className = 'text-red-500'
}
