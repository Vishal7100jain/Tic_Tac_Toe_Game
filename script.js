let boxes = document.querySelectorAll('.square')
let Restartbtn = document.getElementById('restartbtn')
console.log("vishal")
let turn = "X"
let tingSound = new Audio("ting.mp3")
let GameOver = new Audio("gameover.mp3")
let Music = new Audio("music.mp3")

//To change the turn
const changeturn = () => {
    return turn == "X" ? "0" : "X"
}

//Check who win
function CheckWin() {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((e) => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== "")) {
            document.getElementById('dancing-bubu').style.width = "7em"
            document.querySelector('.board').style.paddingTop = "0em"
            GameOver.play()
            Music.play()
        }
    })
}

//Game logic
boxes.forEach(box => {
    box.addEventListener('click', () => {
        tingSound.play()
        box.innerHTML = turn;
        CheckWin()
        if (box.innerHTML == "X") {
            box.style.color = "rgba(0, 0, 0, 0.76)"
        }
        else if (box.innerHTML == "0") {
            box.style.color = "white"
        }
        turn = changeturn()
        Restartbtn.addEventListener('click', () => {
            box.innerHTML = "";
            document.getElementById('dancing-bubu').style.width = "0em" 
            document.querySelector('.board').style.paddingTop = "7em"
            Music.pause()
        })
    })
})
