const DOMselectors = {
    clr: document.getElementById('clr'),
    fname: document.getElementById('fname'),
    lname: document.getElementById('lname'),
    color: document.getElementById('color'),
    char: document.getElementById('char'),
    location: document.getElementById('location'),
    sub: document.getElementById('sub'),
    colchange: document.getElementById('changer'),
    container: document.getElementById('container'),
}
let value =[]
function pull(fn,ln,color,char,location){
    value.push(fn,ln,color,char,location)
    console.log('value of inputs on pull: ' + value)
}
function convertToImage(word){
    if (word.toLowerCase() ==='spongebob'){
        image = 'spongebob.png'
    } else if(word.toLowerCase()==='patrick'){
        image = 'patrick.png'
    } else if(word.toLowerCase()==='squidward'){
        image = 'squidward.png'
    } else if(word.toLowerCase()==='mr.krabs'){
        image = 'krabs.jpg'
    } else if(word.toLowerCase()==='plankton'){
        image = 'plankton.webp'
    } else{
        image = word
    }
    return image
}

function push_to_screen(values){
    value = values
    console.log('character input ' + convertToImage(DOMselectors.char.value))
    DOMselectors.container.insertAdjacentHTML(
        'afterbegin',
        `<div class='block'>
            <h2>${value[0]} ${value[1]}</h2>
            <img src='${convertToImage(DOMselectors.char.value)}' alt='Image Could Not Load' class='images'>
            <p>I live in ${value[4]}</p>
            <p>MY FAVORITE CAHRACTER IS ${value[3]} hahaha</p>
            <p>My favorite color is ${value[2]} </p>
            <button type="button" name="button" id="remove">Delete</button>
        </div>`
    )
}
function remove_btn(){
    let btns = document.querySelectorAll('#remove')
    btns.forEach((button)=>{
        button.addEventListener('click', function(event){
            console.log(event.target.parentElement)
            event.target.parentElement.remove()
        })
    })
}
DOMselectors.sub.addEventListener('click', function(){
    value.length = 0
    pull(DOMselectors.fname.value,DOMselectors.lname.value,DOMselectors.color.value,DOMselectors.char.value,DOMselectors.location.value)
    push_to_screen(value)
    remove_btn()
})
DOMselectors.clr.addEventListener('click', function(){
    console.log(value + ' value at clear')
    value.length = 0
    DOMselectors.fname.value = ""
    DOMselectors.lname.value = ""
    DOMselectors.color.value = ""
    DOMselectors.char.value = ""
    DOMselectors.location.value = ""
})
