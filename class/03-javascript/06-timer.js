
let isStarted = false

let auth = () => {
    if(isStarted === false) {
        //타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("end").disabled = false
        let token = String( Math.floor( Math.random() * 100000)).padStart(6,"0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
    

        let time = 10
        let timer
        
        timer = setInterval(function(){
    
            if( time >= 0) {
                let min = Math.floor( time / 60 )
                let sec = String(time % 60).padStart(2,"0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            }else{
                document.getElementById("end").disabled = true
                isStarted = false
                clearInterval(timer)
            }
    
        },1000)
    }else {
        //타이머가 작동중일때
    }



}