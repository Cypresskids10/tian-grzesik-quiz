let score = 0;
let points = 10;

function correct(button){
    score+=10; //add 10 to score
    button.style.backgroundColor = 'green';
    let parent = button.parentNode;
    let siblings = parent.childNodes; //list of buttons (answers)
    siblings.forEach(element => {
        element.disabled = true; //disabling
    });
}
function incorrect(button){
    score-=5; //minus 5 to score
    button.style.backgroundColor = 'red';
    let parent = button.parentNode;
    let siblings = parent.childNodes; //list of buttons (answers)
    siblings.forEach(element => {
        element.disabled = true; //disabling
    });
}

function  calculateScore(button){
    button.innerHTML = "Score: " + score; 
}