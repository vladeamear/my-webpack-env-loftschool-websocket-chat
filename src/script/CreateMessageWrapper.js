import { createNewElement } from "./helpers"
import blank_image from '../static/blank-user.png'

export function CreateMessageWrapper(avatarLink, nickname, self) {
  const classlist = ['user_messages__wrapper']
  if (self) classlist.push('user_messages-self')
  const wrapper = createNewElement('DIV', {
    class: classlist
  })
  const avatar = createNewElement('IMG', {
    src: avatarLink || blank_image,
    class: 'user_messages__avatar',
    alt: nickname 
  })
  const messagesFromUser = createNewElement('DIV', {
    class: 'user_messages__right',
    dataset: {
      messages: true
    }
  })
  const name = createNewElement('P', {
    class: 'user_messages__nickname',
    innerText: nickname
  })
  messagesFromUser.append(name)
  wrapper.append(avatar, messagesFromUser)
  return wrapper
}