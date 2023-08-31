import  dogsData  from './data.js'
import Dog from './Dog.js'
const acceptBtn = document.getElementById('accept-button')
const rejectBtn = document.getElementById('reject-button')

let nextDogIndex = 0
let nextDog = getNewDog()
let nextDogsData = {}

function getNewDog(){
    let nextDogsData = dogsData[nextDogIndex]      
    return  new Dog(dogsData[nextDogIndex]) 
}

function endListHtml(){
    setTimeout(()=>{
        document.getElementById("hero-section").innerHTML  = `
            <div class="end-list-container">
                <h1 class="end-list">Sorry, there are no more dogs in your area...</h1>
            </div>`  
    },500)
}

acceptBtn.addEventListener("click", function(){
    acceptBtn.disabled = true
    rejectBtn.disabled = true
    nextDog.setHasBeenSwiped(true)
    render()
    
    setTimeout(function(){
    if(nextDogIndex < dogsData.length - 1){
        acceptBtn.disabled = false
        rejectBtn.disabled = false
        nextDogIndex ++
        nextDog = getNewDog()
        render()
    } else { endListHtml() }
    render()
   },750)
})

rejectBtn.addEventListener("click", function(){
    rejectBtn.disabled = true
    acceptBtn.disabled = true
    nextDog.setHasBeenSwiped(false)
    render()
    
    setTimeout(function(){
        if(nextDogIndex < dogsData.length - 1){
            rejectBtn.disabled = false
            acceptBtn.disabled = false
            nextDogIndex ++
            
            nextDog = getNewDog()
        } else { endListHtml() }
        
    render()
    },750)
})



function render(){
    document.getElementById("hero-section").innerHTML = nextDog.getDogHtml()
}

render()

