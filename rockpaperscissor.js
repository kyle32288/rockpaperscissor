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
            case 'scisscors':
                result = 'win'
                break;
        }
    }
    else if (playerSelection == 'paper'){
        switch (computerSelection){
            case 'rock':
                result = 'win';
            case 'paper':
                result = 'tie';
            case 'scisscors':
                result = 'lose'
        }
    }
    else if (playerSelection == 'scissors'){
        switch (computerSelection){
            case 'rock':
                result = 'lose';
            case 'paper':
                result = 'win';
            case 'scisscors':
                result = 'tie'
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