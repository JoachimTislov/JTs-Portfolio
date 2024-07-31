import { checkForLoop } from "../BotLogic/Algorithms/checks/checkForLoop"
import { checkIfTwo2DArraysEqual } from "../BotLogic/ArrayLogic"
import { board, botGame, botValue, botVBot, GameOver, playerStatus, ShowWinner, winnerMsg, log, logOverEarlierGames } from "./variables"

export const checkWinner = async () => {
  //check vertical
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < 4; i++) {
      const values = [board[j][i], board[j][i + 1], board[j][i + 2], board[j][i + 3]]

      const coords = [[j,i],[j,i + 1], [j,i + 2], [j,i + 3]]

      const result = await loopThroughValues(coords, values)
      if (result != false) {
        return result
      }
    }
  }

  // check horizontal
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 6; i++) {
      const values = [board[j][i], board[j + 1][i], board[j + 2][i], board[j + 3][i]]

      const coords = [[j,i],[j + 1,i], [j + 2,i], [j + 3,i]]

      const result = await loopThroughValues(coords, values)
      if (result != false) {
        return result
      }
    }
  }

  //cross check, from right
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 3; i++) {
      const values = [board[j][i], board[j + 1][i + 1], board[j + 2][i + 2], board[j + 3][i + 3]]

      const coords = [[j,i],[j + 1,i + 1], [j + 2,i + 2], [j + 3,i + 3]]

      const result = await loopThroughValues(coords, values)
      if (result != false) {
        return result
      }
    }
  }

  //cross check, from right
  for (let j = 6; j > 2; j--) {
    for (let i = 0; i < 3; i++) {
      const values = [board[j][i], board[j - 1][i + 1], board[j - 2][i + 2], board[j - 3][i + 3]]

      const coords = [[j,i],[j - 1,i + 1], [j - 2,i + 2], [j - 3,i + 3]]

      const result = await loopThroughValues(coords, values)
      if (result != false) {
        return result
      }
    }
  }
}

const loopThroughValues = async (coordinates: number[][], values: number[]) => {
  const participants: number[] = [playerStatus.value, botValue.value]

  for (let i = 0; i < participants.length; i++) {
    if (
      values[0] == participants[i] &&
      values[1] == participants[i] &&
      values[2] == participants[i] &&
      values[3] == participants[i]
    ) {
        if (!botVBot.value) {
          for (const coords of coordinates) {
            const [x,y] = coords
            board[x][y] = 4
          }
        }
   
        const mistakenMove: string = JSON.stringify(log.value[log.value.length - 2].coords)

        const entry = {
            board: board,
            log: log.value,
            piece_count: 'Three'
        }

        console.log(!logOverEarlierGames.value[mistakenMove], )

        if (!logOverEarlierGames.value[mistakenMove]) {
          logOverEarlierGames.value[mistakenMove] = [entry]
        } else {

          let alreadyAdded = false
          for (const member of logOverEarlierGames.value[mistakenMove]) {
            const result = checkIfTwo2DArraysEqual(member.board, entry.board)
            if (result) {
              alreadyAdded = true
              console.log('bad move is already added bad move', member.board, entry.board, mistakenMove)
              break
            }
          } 
          if (!alreadyAdded)  {
            console.log('Adding bad move')
            logOverEarlierGames.value[mistakenMove].push(entry)
          }
        }
        
        console.log(logOverEarlierGames.value)

        return await determineWinner(participants[i])
      } 
  }
  return false
}

export const getColor = (int: number) => {
  const colors = ['', 'Red', 'Blue', 'Black', 'Green', 'Blue']
  return colors[int]
}

const determineWinner = async (value: number) => {
  ShowWinner.value = true
  GameOver.value = true

  if(botGame.value) {
    if (value == botValue.value) {
      if(botVBot.value) {
        console.log('running loop from checkWinner')
        await checkForLoop()
        winnerMsg.value = `${getColor(botValue.value)} Bot won`
      } else {
        winnerMsg.value = 'Bot won'
      }
    } else {
      winnerMsg.value = 'You won, congrats'
    }
  } else if(!botGame.value) {
    const color = getColor(playerStatus.value)
    winnerMsg.value = `${color} won`
  }
  return true
}

