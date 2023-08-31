let stampHtml = ``

class Dog {
    constructor(data){
        Object.assign( this, data )
    }
    
    setHasBeenSwiped(swipe){
        this.hasBeenSwiped = true
        this.hasBeenLiked = swipe
    
        if(this.hasBeenLiked){
            return  stampHtml = `<img class="stamp-img-like" id="stamp-like" src="/images/badge-like.png">`
            }  if(!this.hasBeenLiked && this.hasBeenSwiped){
            return  stampHtml = `<img class="stamp-img-nope" id="stamp-nope" src="/images/badge-nope.png">`
            }
        getDogHtml()  
     }
    
    getDogHtml(){
        const {name, avatar, age, bio} = this
        if(!this.hasBeenSwiped){
          stampHtml = ``
           }
           
        return `  
         <div class="hero-container" >
            <img class="hero-img" src="/${avatar}">
            ${stampHtml}
            <div class="hero-text-container">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
        </div>`
    }
}

export default Dog
