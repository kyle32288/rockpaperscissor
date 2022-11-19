function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scisscors';
    }
}
function play(playerSelection = prompt('Please enter your choice').toLowerCase, computerSelection = getComputerChoice().toLowerCase){
    let result
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
            case 'scisscors':
                result = 'lose'
                break;
        }
    }
    else if (playerSelection == 'scissors'){
        switch (computerSelection){
            case 'rock':
                result = 'lose';
                break;
            case 'paper':
                result = 'win';
                break;
            case 'scissors':
                result = 'tie'
                break;
        }
    }   
    else {
        return ('Invalid selection. Choose rock, paper, or scissors');   
    }      
    let explanation;
    switch (result){
        case 'win':
            explanation = `${playerSelection} beats ${computerSelection}`;
            break;
        case 'lose':
            explanation = `${playerSelection} beats ${computerSelection}`;
            break;
        case 'tie':
            explanation = `You both chose ${playerSelection}`;
            break;

    }
    return (`You ${result}! ${explanation}`);
}
console.log(play())