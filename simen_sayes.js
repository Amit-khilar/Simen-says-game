comp=[];
user=[];

started=false;
level=0

btns=["yellow","red","purple","green"]

h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("key pressed")
        // document.querySelector("body").style.backgroundColor="white" 
        started=true


        levelUp()
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash") 
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)

}

function userFlash(btn){
    btn.classList.add("userflash") 
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}

function levelUp(){
    user=[]
    level++;
    h2.innerText=`Level ${level}`

    randIdx=Math.floor(Math.random()*4);
    randColor=btns[randIdx]
    randBtn=document.querySelector(`.${randColor}`)
    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)

    comp.push(randColor)
    console.log(comp)
    btnFlash(randBtn)
}

function checkAns(idx){
    if(user[idx]==comp[idx]){
        if (user.length==comp.length){
            setTimeout(levelUp,1000)
        }
        console.log("game run")
    }else {
    
        h2.innerHTML=`<b>Game over! your score is ${level}</b> <br> press any key to start again`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"   
        },400)
        reset() 
    }
}

function btnPress(){
    btn=this
    userFlash(btn)
   userColor=btn.getAttribute("id")
   user.push(userColor)
   checkAns(user.length-1)
}

allBtns=document.querySelectorAll(".btn")
for (btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false
    level=0
    comp=[]
    user=[]
}