let number=0
const WinningCombination = [
[0, 1, 2, 3],
[1, 2, 3, 4],
[2, 3, 4, 5],
[3, 4, 5, 6],
[10, 11, 12, 13],
[11, 12, 13, 14],
[12, 13, 14, 15],
[13, 14, 15, 16],
[20, 21, 22, 23],
[21, 22, 23, 24],
[22, 23, 24, 25],
[23, 24, 25, 26],
[30, 31, 32, 33],
[31, 32, 33, 34],
[32, 33, 34, 35],
[33, 34, 35, 36],
[40, 41, 42, 43],
[41, 42, 43, 44],
[42, 43, 44, 45],
[43, 44, 45, 46],
[50, 51, 52, 53],
[51, 52, 53, 54],
[52, 53, 54, 55],
[53, 54, 55, 56],
[0, 10, 20, 30],
[1, 11, 21, 31],
[2, 12, 22, 32],
[3, 13, 23, 33],
[4, 14, 24, 34],
[5, 15, 25, 35],
[6, 16, 26, 36],
[10, 20, 30, 40],
[11, 21, 31, 41],
[12, 22, 32, 42],
[13, 23, 33, 43],
[14, 24, 34, 44],
[15, 25, 35, 45],
[16, 26, 36, 46],
[20, 30, 40, 50],
[21, 31, 41, 51],
[22, 32, 42, 52],
[23, 33, 43, 53],
[24, 34, 44, 54],
[25, 35, 45, 55],
[26, 36, 46, 56],
[0, 11, 22, 33],
[1, 12, 23, 34],
[2, 13, 24, 35],
[3, 14, 25, 36],
[10, 21, 32, 43],
[11, 22, 33, 44],
[12, 23, 34, 45],
[13, 24, 35, 46],
[20, 31, 42, 53],
[21, 32, 43, 54],
[22, 33, 44, 55],
[23, 34, 45, 56],
[3, 12, 21, 30],
[4, 13, 22, 31],
[5, 14, 23, 32],
[6, 15, 24, 33],
[13, 22, 31, 40],
[14, 23, 32, 41],
[15, 24, 33, 42],
[16, 25, 34, 43],
[23, 32, 41, 50],
[24, 33, 42, 51],
[25, 34, 43, 52],
[26, 35, 44, 53],
]

// function pushToWinningCombinationHorizontal (number) {
//     while (number < 54) {
//         if (number % 10 == 0 || number % 10 == 1 || number % 10 == 2 || number % 10 == 3) {
//             let NewCombination = [number,number+1,number+2,number+3]
//             WinningCombination.push(NewCombination)
//         }number ++
//     }number = 0
// }

// function pushToWinningCombinationVertical (number) {
//     while (number < 27) {
//         if (number%10==0||number % 10 == 1 ||number % 10 == 2 ||number % 10 == 3 ||number % 10 == 4 ||number % 10 == 5 ||number % 10 == 6) {
//             let NewCombination = [number,number+10,number+20,number+30]
//             WinningCombination.push(NewCombination)
//         } number ++
//     } number = 0
// }

// function pushToWinningCombinationDiagonalEastSouth (number) {
//     while (number < 24) {
//         if (number % 10 == 0 || number % 10 == 1 || number % 10 == 2 || number % 10 == 3) {
//             let NewCombination = [number,number+11,number+22,number+33]
//             WinningCombination.push(NewCombination)
//         } number ++
//     } number = 0
// }

// function pushToWinningCombinationDiagonalWestSouth (number) {
//     while (number < 27) {
//         if (number % 10 == 3 || number % 10 == 4 || number % 10 == 5 || number % 10 == 6){
//             let NewCombination = [number,number+9,number+18,number+27]
//             WinningCombination.push(NewCombination)
//         } number ++
//     } number = 0
// }

// pushToWinningCombinationHorizontal(number)
// pushToWinningCombinationVertical(number)
// pushToWinningCombinationDiagonalEastSouth(number)
// pushToWinningCombinationDiagonalWestSouth(number)
// console.log(WinningCombination)

let redTurn
const Red_Class = "red"
const Yellow_Class = "yellow"

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text')
const restartButton = document.getElementById('restartButton')

startGame()

restartButton.addEventListener('click' , startGame)

function startGame() {
    redTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(Yellow_Class)
        cell.classList.remove(Red_Class)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}


function handleClick(e) {
    const cell = e.target
    const currentClass = redTurn ? Red_Class : Yellow_Class
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        SwapTurns()
        setBoardHoverClass()
    }
}

 
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${redTurn ? "Red" : "Yellow"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(Red_Class) || cell.classList.contains(Yellow_Class)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function SwapTurns() {
    redTurn = !redTurn
}

function setBoardHoverClass() {
    board.classList.remove(Red_Class)
    board.classList.remove(Yellow_Class)
    if (redTurn) {
        board.classList.add(Red_Class)
    } else {
        board.classList.add(Yellow_Class)
    }
}

function checkWin(currentClass) {
    return WinningCombination.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}