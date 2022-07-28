import { connect } from "../.."

export function Login() {
  const login = document.getElementById('login')
  const chat = document.getElementById('chat')
  const nickname = document.getElementById('login_nickname').value

  if (nickname) connect(nickname)
}