import {
  CreateUserSidebar
} from './index'

export function OutputAllUsersSidebar(messages, users, users_list) {
  users.forEach(user => {
    const usersMessages = messages.filter(message => message.user === user.user)
    const userBlock = CreateUserSidebar(
      undefined,
      user.user,
      usersMessages[usersMessages.length - 1].message
    )
    users_list.append(userBlock)
  })
}