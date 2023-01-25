const name = document.querySelector('#name');
const date = document.querySelector('#date');
const amt = document.querySelector('#amt');
const form = document.querySelector('form');
const table = document.getElementById('table');
const display = document.querySelector('#display')

form.addEventListener('submit', e=> {
    e.preventDefault();

    x = document.querySelector('#name-span')
    y = document.querySelector('#date-span')
    z = document.querySelector('#amt-span')

    let text = document.createElement('div')
    text.classList.add('container')

    //create delete button
    let del = document.createElement('div')
    del.innerHTML = '\u00d7'
    del.classList.add('del-btn')

    let section1 = document.createElement('div')
    let section2 = document.createElement('div')
    let section3 = document.createElement('div')

    section1.classList.add('info')
    section2.classList.add('info')
    section3.classList.add('info')

    
    if(name.value == ''){
        x.innerText = '**pls fill this section'
    }

    if(date.value == ''){
        y = document.querySelector('#date-span')
        y.innerText = '**pls fill this section'
    }
    
    if((amt.value == '') || (amt.value <= 0)){
        z = document.querySelector('#amt-span')
        z.innerText = '**pls fill this section'
    }
    
    else{
        x.innerText=''
        y.innerText=''
        z.innerText=''

        section1.innerText= (name.value)
        section2.innerText= (date.value)
        section3.innerText= '$' + (amt.value) 

        text.append(section1, section2,section3,del)
        table.appendChild(text)

        name.value ='';
        date.value ='';
        amt.value ='';        
    }

    //del btn function
    del.addEventListener('click', e=> {
        table.removeChild(text)
        table.removeChild(del)
    })

    //total expenditure
    total = document.getElementById('btn-2')
    let totalPrice = '';
    total.addEventListener('click', e=> {
         sum = document.createElement('div')
        for(let i = 0;  i < amt.value.length; i++){
            totalPrice += amt.value[i]
        }
        display.innerHTML = totalPrice
        sum.appendChild(display)
    })

})

