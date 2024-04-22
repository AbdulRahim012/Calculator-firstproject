
const display=document.getElementById("display");
console.log("In display")

function appendtodisplay(input){
    console.log("In appendToDisplay")
    display.value+=input;
}

function calculate(){
    
    try{
        display.value=eval(display.value);
    }

    catch(error){
        display.value="Error";
    }

    console.log("In calculate")
}

function clear(){
    console.log("About to clear")

    display.value="";
    
}
