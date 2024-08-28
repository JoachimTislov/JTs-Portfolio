import { botValue, playerStatus } from '@/Logic/FourInARow/GameLogic/variables'
import type { _pattern } from '@/Logic/FourInARow/Types'

export function getAmountOfConnections(pattern: _pattern) {
  let connections = 0

  let botValueB = false
  let playerValueB = false

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] == botValue) {
      botValueB = true
    }

    if (pattern[i] == playerStatus.value) {
      playerValueB = true
    }

    if (playerValueB && botValueB) {
      return connections
    } else {
      if (pattern[i] == botValue || pattern[i] == playerStatus.value) {
        connections++
      }
    }
  }

  return connections
}
