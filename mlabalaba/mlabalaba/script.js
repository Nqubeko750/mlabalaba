function board(){

    let field = []
    const empty = ''
    for (let index = 0; index < 9; index++) {
        field.push(empty)
        
    }
    let symbolO = 'O'
    let symbolX = 'X'
    return{field, empty, symbolO, symbolX}
}

function player(name,symbol){

    return{name, symbol}
}


function match(){
    function decide(){
    
        let chance = Math.random()
    
        if(chance <= 0.5){
            return board().symbolX
        } else if(chance > 0.5){
            return board().symbolO
        }
    }
    
    let player1 = player('Nobuhle', decide())
    let player2

    if(player1.symbol === board().symbolX){

        player2 = player('Nqubeko', board().symbolO)
    
    } else if(player1.symbol === board().symbolO){

        player2 = player('Nqubeko', board().symbolX)

    }

    return {player1, player2}
}

const input = (function(){
    const start = board().field
    const {player1, player2} = match()
    function first(){
        let chance = Math.random()
        if(chance <= 0.5){
            return 'player1'
        } else if(chance > 0.5){
            return 'player2'
        }
    }
    const turn = first()

    return{start, player1, player2, turn}
})()

const playerInput = (function(){
     const container = document.querySelector('.container')
     const gameStatus = document.querySelector('.game-status')
     const player1Status = document.querySelector('.player1-status')
     const player2Status = document.querySelector('.player2-status')
     const turn = document.querySelector('.game-turn')
     const start = document.querySelector('.start')
     const restart = document.querySelector('.restart')
     const boardGame = document.querySelector('.container-board')
     const box1 = document.querySelector('#box-1')
     const box2 = document.querySelector('#box-2')
     const box3 = document.querySelector('#box-3')
     const box4 = document.querySelector('#box-4')
     const box5 = document.querySelector('#box-5')
     const box6 = document.querySelector('#box-6')
     const box7 = document.querySelector('#box-7')
     const box8 = document.querySelector('#box-8')
     const box9 = document.querySelector('#box-9')
     const changeName = document.querySelector('.change-name')
     const playerName1 = document.querySelector('#player1-name')
     const playerName2 = document.querySelector('#player2-name')
     
     return{
        container,
        gameStatus,
        player1Status,
        player2Status,
        turn,
        start,
        restart,
        boardGame,
        box1,
        box2,
        box3,
        box4,
        box5,
        box6,
        box7,
        box8,
        box9,
        changeName,
        playerName1,
        playerName2,
     }
})()

function linkDataSymbol(arr){
    playerInput.box1.textContent = arr.at(0)
    playerInput.box2.textContent = arr.at(1) 
    playerInput.box3.textContent = arr.at(2) 
    playerInput.box4.textContent = arr.at(3) 
    playerInput.box5.textContent = arr.at(4) 
    playerInput.box6.textContent = arr.at(5) 
    playerInput.box7.textContent = arr.at(6) 
    playerInput.box8.textContent = arr.at(7) 
    playerInput.box9.textContent = arr.at(8) 
}

function display(){
    const btn = document.createElement('button')
    btn.classList.toggle('restart')
    btn.textContent = 'restart'
    playerInput.container.appendChild(btn)
    btn.addEventListener('click',function(){
        input.start = board().field
        linkDataSymbol(input.start)
        playerInput.gameStatus.textContent = 'Game Start!'
    })

    return btn
}

function start(){

    function startInt(){

        playerInput.start.addEventListener('click', play)

    }

    function play(){

        playerInput.boardGame.addEventListener('click', inputPlayer)
        playerInput.start.remove()
        display()
        playerInput.gameStatus.textContent = 'Game Start!'
        playerInput.player1Status.textContent = `player1 has name ${input.player1.name} and symbol ${input.player1.symbol}`
        playerInput.player2Status.textContent = `player2 has name ${input.player2.name} and symbol ${input.player2.symbol}`
        playerInput.turn.textContent = `First turn for ${input.turn}!`
    }

    return startInt()

}

start()

playerInput.changeName.addEventListener('click',function(){
    if( playerInput.playerName1.value === ''
        && playerInput.playerName2.value === ''
    ){

    }
    else if(   playerInput.playerName1.value === ''
                && playerInput.playerName2.value !== ''
    ){
            input.player2.name = playerInput.playerName2.value
    }
    else if(   playerInput.playerName1.value !== ''
                && playerInput.playerName2.value === ''
    ){
            input.player1.name = playerInput.playerName1.value
    }
    else{
            input.player1.name = playerInput.playerName1.value
            input.player2.name = playerInput.playerName2.value
    }
    playerInput.player1Status.textContent = `player1 has name ${input.player1.name} and symbol ${input.player1.symbol}`
    playerInput.player2Status.textContent = `player2 has name ${input.player2.name} and symbol ${input.player2.symbol}`
    playerInput.playerName1.value = ''
    playerInput.playerName2.value = ''
})

function inputPlayer(event){

    function symbol1(position){
        return input.start.splice(position-1, 1, input.player1.symbol)
    }
    function symbol2(position){
        return input.start.splice(position-1, 1, input.player2.symbol)
    }

    const scan1 = input.start.filter(sign1Detect).length
    function sign1Detect(sign){
        return sign === input.player1.symbol        
    }
    const scan2 = input.start.filter(sign2Detect).length
    function sign2Detect(sign){
        return sign === input.player2.symbol        
    }

    if(input.turn === 'player1'){

        if(scan1 === 0 && scan2 === 0){

            switch (event.target.id){
                case 'box-1':
                    symbol1(1)
                    linkDataSymbol(input.start)
                    break;
                case 'box-2':
                    symbol1(2)
                    linkDataSymbol(input.start)
                    break;
                case 'box-3':
                    symbol1(3)
                    linkDataSymbol(input.start)
                    break;
                case 'box-4':
                    symbol1(4)
                    linkDataSymbol(input.start)
                    break;
                case 'box-5':
                    symbol1(5)
                    linkDataSymbol(input.start)
                    break;
                case 'box-6':
                    symbol1(6)
                    linkDataSymbol(input.start)
                    break;
                case 'box-7':
                    symbol1(7)
                    linkDataSymbol(input.start)
                    break;
                case 'box-8':
                    symbol1(8)
                    linkDataSymbol(input.start)
                    break;
                case 'box-9':
                    symbol1(9)
                    linkDataSymbol(input.start)
                    break;
                default:
                    console.log('not set')
                    break;
            }
        }else if(input.start.at(0) === input.player1.symbol
                && input.start.at(1) === input.player1.symbol
                && input.start.at(2) === input.player1.symbol

                || input.start.at(0) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(8) === input.player1.symbol

                || input.start.at(0) === input.player1.symbol
                && input.start.at(3) === input.player1.symbol
                && input.start.at(6) === input.player1.symbol

                || input.start.at(1) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(7) === input.player1.symbol
            
                || input.start.at(3) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(5) === input.player1.symbol
            
                || input.start.at(2) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(6) === input.player1.symbol
            
                || input.start.at(2) === input.player1.symbol
                && input.start.at(5) === input.player1.symbol
                && input.start.at(8) === input.player1.symbol
            
                || input.start.at(6) === input.player1.symbol
                && input.start.at(7) === input.player1.symbol
                && input.start.at(8) === input.player1.symbol){

                    alert(`game over! ${input.player1.name} win!`)
        }else if(input.start.at(0) === input.player2.symbol
                && input.start.at(1) === input.player2.symbol
                && input.start.at(2) === input.player2.symbol

                || input.start.at(0) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(8) === input.player2.symbol
            
                || input.start.at(0) === input.player2.symbol
                && input.start.at(3) === input.player2.symbol
                && input.start.at(6) === input.player2.symbol
                
                || input.start.at(1) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(7) === input.player2.symbol

                || input.start.at(3) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(5) === input.player2.symbol
            
                || input.start.at(2) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(6) === input.player2.symbol
            
                || input.start.at(2) === input.player2.symbol
                && input.start.at(5) === input.player2.symbol
                && input.start.at(8) === input.player2.symbol
            
                || input.start.at(6) === input.player2.symbol
                && input.start.at(7) === input.player2.symbol
                && input.start.at(8) === input.player2.symbol){

                    alert(`game over!${input.player2.name} win!`)
        }else if(scan1 > scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol2(1)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(1) === input.player2.symbol
                        && input.start.at(2) === input.player2.symbol
        
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol
                    
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(3) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol2(2)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(1) === input.player2.symbol
                        && input.start.at(2) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol2(3)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(1) === input.player2.symbol
                        && input.start.at(2) === input.player2.symbol
                    
                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol
                    
                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol2(4)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(3) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol
                    
                        || input.start.at(3) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol2(5)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol
                    
                        || input.start.at(1) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol

                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol

                        || input.start.at(3) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol2(6)
                        linkDataSymbol(input.start)
                        if(input.start.at(3) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol

                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol2(7)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(3) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol
                    
                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol

                        || input.start.at(6) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol2(8)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                    
                        || input.start.at(6) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol2(9)
                        linkDataSymbol(input.start)
                        if(input.start.at(2) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol
                    
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol

                        || input.start.at(6) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                    }
                    break;
                default:
                    break;
            }
        }else if(scan1 === scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol1(1)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(1) === input.player1.symbol
                        && input.start.at(2) === input.player1.symbol
        
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol
                    
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(3) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol1(2)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(1) === input.player1.symbol
                        && input.start.at(2) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol1(3)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(1) === input.player1.symbol
                        && input.start.at(2) === input.player1.symbol
                    
                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol
                    
                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol1(4)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(3) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol
                    
                        || input.start.at(3) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    else if(scan1 === 4 && scan2 === 4){
                        playerInput.gameStatus.textContent = 'Draw!'
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol1(5)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol
                    
                        || input.start.at(1) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol

                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol

                        || input.start.at(3) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol1(6)
                        linkDataSymbol(input.start)
                        if(input.start.at(3) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol

                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol1(7)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(3) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol
                    
                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol

                        || input.start.at(6) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol1(8)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                    
                        || input.start.at(6) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol1(9)
                        linkDataSymbol(input.start)
                        if(input.start.at(2) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol
                    
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol

                        || input.start.at(6) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
            
                default:
                    break;
            }
        }else{
            console.error('not set');
        }


    }else if(input.turn === 'player2'){

        if(scan1 === 0 && scan2 === 0){

            switch (event.target.id){
                case 'box-1':
                    symbol2(1)
                    linkDataSymbol(input.start)
                    break;
                case 'box-2':
                    symbol2(2)
                    linkDataSymbol(input.start)
                    break;
                case 'box-3':
                    symbol2(3)
                    linkDataSymbol(input.start)
                    break;
                case 'box-4':
                    symbol2(4)
                    linkDataSymbol(input.start)
                    break;
                case 'box-5':
                    symbol2(5)
                    linkDataSymbol(input.start)
                    break;
                case 'box-6':
                    symbol2(6)
                    linkDataSymbol(input.start)
                    break;
                case 'box-7':
                    symbol2(7)
                    linkDataSymbol(input.start)
                    break;
                case 'box-8':
                    symbol2(8)
                    linkDataSymbol(input.start)
                    break;
                case 'box-9':
                    symbol2(9)
                    linkDataSymbol(input.start)
                    break;
                default:
                    console.log('not set')
                    break;
            }
        }else if(input.start.at(0) === input.player1.symbol
                && input.start.at(1) === input.player1.symbol
                && input.start.at(2) === input.player1.symbol

                || input.start.at(0) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(8) === input.player1.symbol
            
                || input.start.at(0) === input.player1.symbol
                && input.start.at(3) === input.player1.symbol
                && input.start.at(6) === input.player1.symbol

                || input.start.at(1) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(7) === input.player1.symbol

                || input.start.at(3) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(5) === input.player1.symbol
            
                || input.start.at(2) === input.player1.symbol
                && input.start.at(4) === input.player1.symbol
                && input.start.at(6) === input.player1.symbol
            
                || input.start.at(2) === input.player1.symbol
                && input.start.at(5) === input.player1.symbol
                && input.start.at(8) === input.player1.symbol
            
                || input.start.at(6) === input.player1.symbol
                && input.start.at(7) === input.player1.symbol
                && input.start.at(8) === input.player1.symbol){

                    alert(`game over! ${input.player1.name} win!`)
        }else if(input.start.at(0) === input.player2.symbol
                && input.start.at(1) === input.player2.symbol
                && input.start.at(2) === input.player2.symbol

                || input.start.at(0) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(8) === input.player2.symbol
            
                || input.start.at(0) === input.player2.symbol
                && input.start.at(3) === input.player2.symbol
                && input.start.at(6) === input.player2.symbol
            
                || input.start.at(1) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(7) === input.player2.symbol

                || input.start.at(3) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(5) === input.player2.symbol
            
                || input.start.at(2) === input.player2.symbol
                && input.start.at(4) === input.player2.symbol
                && input.start.at(6) === input.player2.symbol
            
                || input.start.at(2) === input.player2.symbol
                && input.start.at(5) === input.player2.symbol
                && input.start.at(8) === input.player2.symbol
            
                || input.start.at(6) === input.player2.symbol
                && input.start.at(7) === input.player2.symbol
                && input.start.at(8) === input.player2.symbol){

                    alert(`game over! ${input.player2.name} win!`)
        }else if(scan1 < scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){
                        
                        alert(`choose another box`)
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol1(1)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(1) === input.player1.symbol
                        && input.start.at(2) === input.player1.symbol
        
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol
                    
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(3) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol1(2)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(1) === input.player1.symbol
                        && input.start.at(2) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol1(3)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(1) === input.player1.symbol
                        && input.start.at(2) === input.player1.symbol
                    
                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol
                    
                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol1(4)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(3) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol
                    
                        || input.start.at(3) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol1(5)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol
                    
                        || input.start.at(1) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol

                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol

                        || input.start.at(3) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol1(6)
                        linkDataSymbol(input.start)
                        if(input.start.at(3) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol

                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol1(7)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player1.symbol
                        && input.start.at(3) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol
                    
                        || input.start.at(2) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(6) === input.player1.symbol

                        || input.start.at(6) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol1(8)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                    
                        || input.start.at(6) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol1(9)
                        linkDataSymbol(input.start)
                        if(input.start.at(2) === input.player1.symbol
                        && input.start.at(5) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol
                    
                        || input.start.at(0) === input.player1.symbol
                        && input.start.at(4) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol

                        || input.start.at(6) === input.player1.symbol
                        && input.start.at(7) === input.player1.symbol
                        && input.start.at(8) === input.player1.symbol){
                            playerInput.gameStatus.textContent = `${input.player1.name} win!`
                        }
                    }
                    break;
                default:
                    console.error('not set');
                    break;
            }
        }else if(scan1 === scan2){
            switch (event.target.id){
                case 'box-1':
                    if(input.start.at(0) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(0) === board().empty){
                        
                        symbol2(1)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(1) === input.player2.symbol
                        && input.start.at(2) === input.player2.symbol
        
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol
                    
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(3) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-2':
                    if(input.start.at(1) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(1) === board().empty){
                        
                        symbol2(2)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(1) === input.player2.symbol
                        && input.start.at(2) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-3':
                    if(input.start.at(2) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(2) === board().empty){
                        
                        symbol2(3)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(1) === input.player2.symbol
                        && input.start.at(2) === input.player2.symbol
                    
                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol
                    
                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-4':
                    if(input.start.at(3) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(3) === board().empty){
                        
                        symbol2(4)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(3) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol
                    
                        || input.start.at(3) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-5':
                    if(input.start.at(4) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(4) === board().empty){
                        
                        symbol2(5)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol
                    
                        || input.start.at(1) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol

                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol

                        || input.start.at(3) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-6':
                    if(input.start.at(5) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(5) === board().empty){
                        
                        symbol2(6)
                        linkDataSymbol(input.start)
                        if(input.start.at(3) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol

                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-7':
                    if(input.start.at(6) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(6) === board().empty){
                        
                        symbol2(7)
                        linkDataSymbol(input.start)
                        if(input.start.at(0) === input.player2.symbol
                        && input.start.at(3) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol
                    
                        || input.start.at(2) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(6) === input.player2.symbol

                        || input.start.at(6) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-8':
                    if(input.start.at(7) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(7) === board().empty){
                        
                        symbol2(8)
                        linkDataSymbol(input.start)
                        if(input.start.at(1) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                    
                        || input.start.at(6) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                case 'box-9':
                    if(input.start.at(8) !== board().empty){

                        alert('choose another box')
                    }else if(input.start.at(8) === board().empty){
                        
                        symbol2(9)
                        linkDataSymbol(input.start)
                        if(input.start.at(2) === input.player2.symbol
                        && input.start.at(5) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol
                    
                        || input.start.at(0) === input.player2.symbol
                        && input.start.at(4) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol

                        || input.start.at(6) === input.player2.symbol
                        && input.start.at(7) === input.player2.symbol
                        && input.start.at(8) === input.player2.symbol){
                            playerInput.gameStatus.textContent = `${input.player2.name} win!`
                        }
                        else if(scan1 === 4 && scan2 === 4){
                            playerInput.gameStatus.textContent = 'Draw!'
                        }
                    }
                    break;
                default:
                    console.error('not set');
                    break;
            }
        }else{
            console.error('not set')
        }

    }else{
        console.error('not set');
    }
}