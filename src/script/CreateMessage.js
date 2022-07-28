import { createNewElement } from "./helpers";

export function CreateMessage(message, timestamp) {
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
}