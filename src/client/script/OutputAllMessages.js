import {
  CreateMessage,
  CreateMessageWrapper
} from './index'

export function OutputAllMessages(messages, users, chat_window) {
  messages.forEach((item, iter) => {
    const isSelf = users.find(elem => elem.user === item.user).self
    const message = CreateMessage(
      item.message,
      item.timestamp,
      item.action,
      item.user
    )
    const wrapper = CreateMessageWrapper(
      undefined,
      item.user,
      isSelf
    )
  
    if (iter === 0) {
      wrapper.querySelector('[data-messages]').append(message)
      chat_window.append(wrapper)
    } else {
      if (item.user === messages[iter - 1].user && !item.action) {
        const allMessagesWrappers = document.querySelectorAll('[data-messages]')
        const lastMessagesWrapper = allMessagesWrappers[allMessagesWrappers.length - 1]
        lastMessagesWrapper.append(message)
      } else if (item.action) {
        chat_window.append(message)
      } else {
        wrapper.querySelector('[data-messages]').append(message)
        chat_window.append(wrapper)
      }
    }
  })
}