export function Menu() {
  const chat_modal = document.getElementById('chat_modal')
  const close_modal = document.getElementById('close_modal')
  const exit = document.getElementById('exit')

  chat_modal.classList.remove('hidden')
  
  close_modal.addEventListener('click', () => {
    chat_modal.classList.add('hidden')
  })

  exit.addEventListener('click', () => {
    //Выход
  })
}