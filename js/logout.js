import { Logout, Guard } from '../modules/loginModule.js'
// Protector
Guard('signin.html')
//logout
const logoutBtn = document.querySelector('#logout')

logoutBtn.onclick = async () => {
  await Logout()
}
