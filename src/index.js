import {
  Login,
  Menu,
  NumberOfUsersOutput,
  OutputAllMessages,
  OutputAllUsersSidebar
} from './client/script'
import messages from './client/mock/messages.json'
import users from './client/mock/users.json'
import './client/style'

const root = document.getElementById('root')
const login = document.getElementById('login')
const chat = document.getElementById('chat')
const message_input = document.getElementById('message_input')
const send = document.getElementById('send')
const menu = document.getElementById('menu')
const chat_window = document.getElementById('chat_window')
const users_list = document.getElementById('users_list')
const number_of_users = document.getElementById('number_of_users')
const login_submit = document.getElementById('login_submit')

var ws, user

export const connect = (nickname) => {
  ws = new WebSocket('ws://localhost:3000')
  ws.onopen = () => {
    login.classList.add('hidden')
    chat.classList.remove('hidden')
    user = nickname
    const message = {
      user,
      message: '',
      timestamp: `${date.getHours()}:${date.getMinutes()}`,
      action: 'joined'
    }
    ws.send(JSON.stringify(message))
  }
  
  ws.onclose = () => {
    console.log('server disconnected')
  }
  
  ws.onmessage = (response) => {
    const message = JSON.parse(response.data)
    console.log(message)
  }
}

export const sendMessage = async () => {
  const date = new Date();
  const message = {
    user,
    message: message_input.value,
    timestamp: `${date.getHours()}:${date.getMinutes()}`,
    action: false
  }
  ws.send(JSON.stringify(message));
}

login.classList.remove('hidden')

OutputAllUsersSidebar(messages, users, users_list)

login_submit.addEventListener('click', Login)
menu.addEventListener('click', Menu)
send.addEventListener('click', sendMessage)

number_of_users.innerHTML = NumberOfUsersOutput(users)

OutputAllMessages(messages, users, chat_window)