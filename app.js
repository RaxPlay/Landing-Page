//Variables
let body = document.querySelector('body')
let content = document.createElement('div')
content.classList.add('content')

let activeFunc = '';

//Functions
function fiveMin() { 
    let fiveMin = document.createElement('p')

    if(content.classList.contains('active-counter')){
        content.remove()
    }

    content.classList.add('active-counter')

    let minutes = 4;
    let seconds = 59;
    let leadingSec = 0;

    timerInterval = window.setInterval(function(){
        seconds--
        if(seconds*1 === 0){
            seconds = 59
            minutes--;
            if(minutes*1 === -1 && seconds*1 ===0){
                seconds = 0;
                minutes = 0;
            }
        }
        if(seconds < 10){
        leadingSec = '0' + seconds.toString();
        } else {
        leadingSec = seconds
        }

        if(minutes === 0){
            leadingSec = 0;
            fifteenMin.innerHTML = minutes + ':00' + seconds
        }

        fiveMin.innerHTML = minutes + ':' + leadingSec

        if(minutes*1 === 0){
            leadingSec = 0;
            minutes = 0;
        }

        content.appendChild(fiveMin)
        body.append(content)
    }, 1000);

    activeFunc = '5'
}

function fifteenMin(){
    let fifteenMin = document.createElement('p')

    if(content.classList.contains('active-counter')){
        content.remove()
    }

    content.classList.add('active-counter')

    let minutes = 14;
    let seconds = 59;
    let leadingSec = 0;

    timerInterval = window.setInterval(function(){
        seconds--
        if(seconds*1 === 0){
            seconds = 59
            minutes--;
            if(minutes*1 === 0){
                seconds = 0;
                minutes = 0;
            }
        }
        if(seconds < 10){
        leadingSec = '0' + seconds.toString();
        } else {
        leadingSec = seconds
        }

        if(minutes === 0){
            leadingSec = 0;
            fifteenMin.innerHTML = minutes + ':0' + seconds
        }

        fifteenMin.innerHTML = minutes + ':' + leadingSec

        content.appendChild(fifteenMin)
        body.append(content)
    }, 1000);

    activeFunc = '15'
}

function twentyFiveMin(){
    let twentyFiveMin = document.createElement('p')
    
    if(content.classList.contains('active-counter')){
        content.remove()
    }

    content.classList.add('active-counter')

    let minutes = 24;
    let seconds = 59;
    let leadingSec = 0;

    timerInterval = window.setInterval(function(){
        seconds--
        if(seconds*1 === 0){
            seconds = 59
            minutes--;
            if(minutes*1 === 0){
                seconds = 0;
                minutes = 0;
            }
        }
        if(seconds < 10){
        leadingSec = '0' + seconds.toString();
        } else {
        leadingSec = seconds
        }

        if(minutes === 0){
            leadingSec = 0;
            twentyFiveMin.innerHTML = minutes + ':0' + seconds
        }

        twentyFiveMin.innerHTML = minutes + ':' + leadingSec

        content.appendChild(twentyFiveMin)
        body.append(content)
    }, 1000);

    activeFunc = '25'
}

function remove(){
    
}
function pause(minutes, seconds){
    minutes = 0;
    seconds = 0;

    content()
}
