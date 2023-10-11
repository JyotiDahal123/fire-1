import { logout, guard } from '../modules/loginModule.js'
// Protector
guard('signin.html')
//logout
const logoutBtn = document.querySelector('#logout')
console.log(logoutBtn)
logoutBtn.onclick = async () => {
  await logout()
}
