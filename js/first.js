let playBtn = $("#playBtn");
let resetBtn = $("#resetBtn");
let output = $("#output");
let memory = document.getElementById("memory");

let RandomNum = giveRandomNum();
playBtn.click(() => {
    let input = $("#input").val();
    
    console.log(RandomNum);
    console.log(input);
    if (input < RandomNum) {
        output.removeClass("alert-primary");
        output.addClass("alert-danger");
        output.text("Your guess is too low!");
        memory.innerHTML += `<li class='list-group-item'>You guessed ${input}</li>`; 
        console.log("Your guess is too low!");
    } else if (input > RandomNum) {
        output.removeClass("alert-danger");
        output.addClass("alert-warning");
        memory.innerHTML += `<li class='list-group-item'>You guessed ${input}</li>`; 
        output.text("Your guess is too high!");
        console.log("Your guess is too high!");
    } else {
        output.removeClass("alert-warning");
        output.removeClass("alert-danger");
        output.addClass("alert-success");
        memory.innerHTML += `<li class='list-group-item'>You guessed ${input}</li>`; 
        output.text("Awesome, You guessed right!!");
        console.log("Awesome, You guessed right!!");
        RandomNum = giveRandomNum();
    }
         
});
resetBtn.click(() => {
    console.log("Reset Button");
    output.removeClass("alert-danger");
    output.removeClass("alert-warning");
    output.removeClass("alert-success");
    output.addClass("alert-primary");
    $("#input").val("");
    memory.innerHTML = ``; 
    output.text("Enter a number from 0 to 100");
});

function giveRandomNum() {
    let num = Math.floor(Math.random() * 100 + 1);
    return num;
}