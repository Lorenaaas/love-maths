//wait for the DOM to finish before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")==="submit"){
                alert("You clicked Submit!");
            }else {
                let gaeType = this.getAttribute("data-type");
                alert('You clicked ${gameType}');
            }
        })
    }
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswers() {

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion() {

}

function multiplyQuestion() {

}



