// import { createNewElement } from "./script/helpers"
import { CreateMessage } from "./script/CreateMessage"
import { CreateMessageWrapper } from "./script/CreateMessageWrapper" 
import { CreateUserSidebar } from "./script/CreateUserSidebar"
import messages from './mock/messages.json'
import users from './mock/users.json'
import './style'
import { NumberOfUsersOutput } from "./script/NumberOfUsersOutput"

const root = document.getElementById('root')
const chat_window = document.getElementById('chat_window')
const users_list = document.getElementById('users_list')
const number_of_users = document.getElementById('number_of_users')

users.forEach(user => {
  const usersMessages = messages.filter(message => message.user === user.user)
  const userBlock = CreateUserSidebar(
    undefined,
    user.user,
    usersMessages[usersMessages.length - 1].message
  )
  users_list.append(userBlock)
})

number_of_users.innerHTML = NumberOfUsersOutput(users)

messages.forEach((item, iter) => {
  const isSelf = users.find(elem => elem.user === item.user).self

  if (iter === 0) {
    const wrapper = CreateMessageWrapper(
      undefined,
      item.user,
      isSelf
    )
    const message = CreateMessage(item.message, item.timestamp)
    wrapper.querySelector('[data-messages]').append(message)
    chat_window.append(wrapper)
  } else {
    if (item.user === messages[iter - 1].user) {
      const allMessagesWrappers = document.querySelectorAll('[data-messages]')
      const lastMessagesWrapper = allMessagesWrappers[allMessagesWrappers.length - 1]
      const message = CreateMessage(item.message, item.timestamp)
      lastMessagesWrapper.append(message)
    } else {
      const wrapper = CreateMessageWrapper(
        undefined,
        item.user,
        isSelf
      )
      const message = CreateMessage(item.message, item.timestamp)
      wrapper.querySelector('[data-messages]').append(message)
      chat_window.append(wrapper)
    }
  }
})