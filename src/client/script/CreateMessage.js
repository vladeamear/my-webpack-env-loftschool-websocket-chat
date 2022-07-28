import { createNewElement } from "./helpers";

export function CreateMessage(message, timestamp, isAction, user) {
  if (!isAction) {
    const wrapper = createNewElement('DIV', {
      class: 'user_messages__message'
    })
    const messageElem = createNewElement('P', {
      class: 'chat__main_text',
      innerText: message
    })
    const timestampElem = createNewElement('P', {
      class: 'user_messages__message_time',
      innerText: timestamp
    })
    wrapper.append(messageElem, timestampElem)
    return wrapper
  } else {
    const message = isAction === "joined"
      ? `Пользователь ${user} присоединился к чату`
      : `Пользователь ${user} покинул чат`
    const wrapper = createNewElement('P', {
      class: 'chat__main_middle-action',
      innerText: message
    })
    return wrapper
  }
}