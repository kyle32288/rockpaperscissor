function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function play(playerSelection = prompt('Please enter your choice'), computerSelection = getComputerChoice()){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    let result
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    if (playerSelection == 'rock'){
        switch (computerSelection){
            case 'rock':
                result = 'tie';
                break;
            case 'paper':
                result = 'lose';
                break;
            case 'scissors':
                result = 'win'
                break;
        }
    }
    else if (playerSelection == 'paper'){
        switch (computerSelection){
            case 'rock':
                result = 'win';
                break;
            case 'paper':
                result = 'tie';
                break;
            case 'scissors':
                result = 'lose'
                break;
        }
    }
    else if (playerSelection == 'scissors'){
        switch (computerSelection){
            case 'rock':
                result = 'lose';
            case 'paper':
                result = 'win';
            case 'scissors':
                result = 'tie'
        }
    }   
    else {
        return ('Invalid selection. Choose rock, paper, or scissors');   
    }      
    let explanation;
    switch (result){
        case 'win':
            explanation = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
            break;
        case 'lose':
            explanation = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
            break;
        case 'tie':
            explanation = `You both chose ${playerSelection.toUpperCase()}`;
            break;

    }
    return (`You ${result}! ${explanation}`);
}
while(true){
    console.log(play());
}