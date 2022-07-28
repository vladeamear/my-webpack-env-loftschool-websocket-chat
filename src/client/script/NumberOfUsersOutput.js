import { getNoun } from "./helpers"

export function NumberOfUsersOutput(array) {
  return array.length + ' ' + getNoun(array.length, 'участник', 'участника', 'участников')
}