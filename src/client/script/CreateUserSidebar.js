import { createNewElement } from "./helpers";
import blank_image from '../static/blank-user.png'

export function CreateUserSidebar(avatarLink, nickname, message) {
  const wrapper = createNewElement('DIV', {
    class: 'sidebar__user'
  })
  const avatar = createNewElement('IMG', {
    src: avatarLink || blank_image,
    class: 'sidebar__user_avatar',
    alt: nickname
  })
  const userInfo = createNewElement('DIV', {
    class: 'sidebar__user_info'
  })
  const name = createNewElement('SPAN', {
    class: 'sidebar__user_info_name',
    innerText: nickname
  })
  const lastMsg = createNewElement('SPAN', {
    class: 'sidebar__user_info_lastmassage',
    innerText: message
  })
  userInfo.append(name, lastMsg)
  wrapper.append(avatar, userInfo)
  return wrapper
}