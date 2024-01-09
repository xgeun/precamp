const changeFocus1 = () => {
    
    let phone1 = document.getElementById("phone1").value

    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
}

const changeFocus2 = () => {
    
    let phone2 = document.getElementById("phone2").value

    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}


let isStarted = false

let code = () => {
    if(isStarted === false) {
        //타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("confirmNum").disabled = false
        let token = String( Math.floor( Math.random() * 100000)).padStart(6,"0")
        document.getElementById("codeNumber").innerText = token
        document.getElementById("codeNumber").style.color = "#" + token
    

        let time = 5
        let timer
        
        timer = setInterval(function(){
    
            if( time >= 0) {
                let min = Math.floor( time / 60 )
                let sec = String(time % 60).padStart(2,"0")
                document.getElementById("confirmNum").innerText = min + ":" + sec
                time = time - 1
            }else{
                document.getElementById("confirmNum").disabled = true
                isStarted = false
                clearInterval(timer)
            }
    
        },1000)
    }else {
        //타이머가 작동중일때
    }
}