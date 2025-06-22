
let btns = ["red", "green","yellow","purple"];
let started = false;
let level = 0;
let h4 = document.querySelector("h4")
let userSeq=[]
let gameSeq=[]
allbtns = document.querySelectorAll(".box")

for(btn of allbtns){
    btn.addEventListener("click", function(e){
        let col = e.target.classList[1]
        userSeq.push(col)
        userFlash(this)
        idx = userSeq.length - 1
        check(idx)

    })
}

document.addEventListener("keypress",function(){
    if (started ==false){
        console.log("game has started")
        started = true
        levelUp()
    }

})

function gameFlash(btn){
    btn.classList.add("white")
    setTimeout(function(){
        btn.classList.remove("white")
    },500)
}

function userFlash(btn){
    btn.classList.add("darkgreen")
    setTimeout(function(){
        btn.classList.remove("darkgreen")
    },200)
}

function levelUp(){
    userSeq=[]
    level++
    h4.innerText = `Level ${level}`
    let randColor = btns[Math.floor(Math.random()*4)]
    gameSeq.push(randColor)
    let btn = document.querySelector("."+randColor)
    gameFlash(btn)
    console.log(gameSeq)
}

function check(idx){
    if (userSeq[idx]== gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,500)
        }
    }
    else {
        h4.innerText = `GAME OVER! YOUR SCORE IS ${level} CLICK ANY KEY TO START`
        started = false
        userSeq=[]
        gameSeq=[]
        level = 0
    }
}




