
const buttons = document.querySelectorAll('.selection-button')

const div = document.querySelector('.dom-div')

const divContainer = document.querySelector('.container')

const restartButton = document.createElement('button')

restartButton.classList.add("restart-button")

let playerDecition 

const DOMcontroll = () => {
    if(returnedValue === 'Computer Won' || returnedValue === 'Player Won'){
        return `Player selected ${playerDecition}, Computer selected ${getComputerChoice().toUpperCase()}. Player has ${playerScore} points, Computer has ${computerScore} points`;
    }else{
        return `Tie no points to each. Player has ${playerScore} points, Computer has ${computerScore} points`
    }
}

buttons.forEach(button => button.addEventListener('click' , (e) => {
    playerDecition = e.target.textContent.toString()
    returnedValue = playGame(playerDecition, getComputerChoice())
    game(returnedValue)
    div.innerText = DOMcontroll();
    if(playerScore === 5 || computerScore === 5){
        buttons.forEach(item => item.disabled = true)

        const result = () => {
            if(playerScore > computerScore){
                return "Player wins restart the game"
            }else{
                return "Computer wins restart the game"
            }
        }
        div.innerText = `${result()}`;
        
        restartButton.textContent = "RESTART THE GAME"
        divContainer.appendChild(restartButton);
     }
}))
        restartButton.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            div.innerText = `Player has ${playerScore} points, Computer has ${computerScore} points`;
            buttons.forEach(button => button.disabled = false)
            divContainer.removeChild(restartButton);
            
        })




function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) 
    let rockPaperSc = ['Rock', 'Paper', 'Scissors'];
    return rockPaperSc[randomNumber]
}
    let superiorNumber = 0
    let superiorNumberComputer = 0



function playGame(playerSelection, computer){
    let playerSelectionCase = playerSelection.toLowerCase();
    let upperCase = playerSelectionCase.charAt(0).toUpperCase() + playerSelectionCase.slice(1);
    console.log("player " +upperCase)
    console.log("computer " + computer)

    if (upperCase === computer) {
        return 'Tie'
    }
    else if (playerSelectionCase == 'rock') {
        if (computer == 'Paper') {
            
            return  'Computer Won';

        } else {
            
            return 'Player Won'
        }
    }
    else if (playerSelectionCase == 'scissors') {
        if (computer == 'Rock') {
            
            return 'Computer Won';
            
        } else {
            
            return 'Player Won';
        
        }
    }
    else if (playerSelectionCase == 'paper') {
        if (computer == 'Scissors') {
            
            return 'Computer Won';
            
        } else {
            
            return 'Player Won';
            
        }
    }
}
    
//     if(playerSelectionCase === "rock"){
//         superiorNumber = 1
//     }else if(playerSelectionCase === "paper"){
//         superiorNumber = 2
//     }else if(playerSelectionCase === "scissors"){
//         superiorNumber = 3
// }
//     if(computerSelection === "Rock"){
//         superiorNumberComputer = 1
//     }else if(computerSelection === "Paper"){
//         superiorNumberComputer = 2
//     }else if(computerSelection === "Scissors"){
//         superiorNumberComputer = 3
// }
// console.log(superiorNumber)
// console.log(superiorNumberComputer)
// if(superiorNumber > superiorNumberComputer){
//     return("Player Wins!! " + upperCase + " Beats " + computerSelection )
// }else if(superiorNumber < superiorNumberComputer){
//     return("Computer Wins!! " + computerSelection + " Beats " + upperCase)
// }else{
//     return("No winners, DRAW!!")
// }

        let returnedValue  


        let computerScore = 0;
        let playerScore = 0;


function game(result){
    
        
        if(result === 'Player Won'){
            playerScore += 1
        return "Player wins the game" ,playerScore
        }else if(result === 'Computer Won'){
            computerScore += 1
            return "Computer wins the game" ,computerScore
        }else{
            return "Its draw"
        }
        
    
    
}




const restartGame = () => {
    playerPoint = 0;
    computerPoint = 0;
}
