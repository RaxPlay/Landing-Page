//Variables
let body = document.querySelector('body')
let content = document.createElement('div')
content.classList.add('content')

//Functions
function fiveMin() { 
    let fiveMin = document.createElement('p')

    if(content.classList.contains('contains-5-min')){
        content.removeChild()
    }
    
    fiveMin.innerText = '5:00'
    
    content.appendChild(fiveMin)
    body.append(content)

    content.classList.add('contains-5-min')
}

function fifteenMin(){
    let fifteenMin = document.createElement('p')

    if(content.classList.contains('contains-15-min')){
        content.removeChild()

    }
    
    fifteenMin.innerHTML = '15:00';
    
    content.append(fifteenMin)
    body.append(content)

    content.classList.add('contains-15-min')
}

function twentyFiveMin(){
    let twentyFiveMin = document.createElement('p')
    
    if(content.classList.contains('contains-25-min')){
        content.removeChild()
    }

    twentyFiveMin.innerHTML = '25:00';
    
    content.append(twentyFiveMin)
    body.append(content)

    content.classList.add('contains-25-min')
}

function remove(){
    content.remove()
}
