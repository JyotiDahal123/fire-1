//Modules
import { SignUp } from '../modules/loginModule.js'
//Selectors
const myForm = document.querySelector('#my-form')
const res = document.querySelector('#res')
const passGen = document.querySelector('#passGen')
let pass = document.querySelector('#password')
let spinner = document.querySelector('.fa-spinner')
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
    setTimeout(() => {
      location.href = 'home.html'
    }, 1000)
    return
  }
  res.innerHTML = 'Register failed !'
  res.className = 'text-red-500'
}
passGen.onclick = async () => {
  try {
    spinner.style.display = 'inline-block'
    const res = await axios.get(
      'http://localhost:8080/password-generator?length=10',
    )
    const { password } = res.data
    pass.value = password
    pass.type = 'text'
  } catch (error) {
    console.log(error.message)
  } finally {
    spinner.style.display = 'none'
  }
}
