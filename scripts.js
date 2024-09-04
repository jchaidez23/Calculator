var num1 = "";
var num2 = "";
var operator = "";

function calculate(num1,num2,operator){
    switch(operator){
        case '+':
            console.log(parseInt(num1) + parseInt(num2));
            break;
        case '-':
            console.log(parseInt(num1) - parseInt(num2));
            break;
        case '/':
            console.log(parseInt(num1) / parseInt(num2));
            break;
        case 'X':
            console.log(parseInt(num1) * parseInt(num2));
            break;
        case '%':
            console.log(parseInt(num1) % parseInt(num2));
            break;
    }
}

function getValue(text){
    let class_name = text;
    console.log(class_name);
    var element = document.getElementById(class_name).textContent;
    console.log(element);
    const operators = ["+","-","X","/","%"];
    if (operators.includes(element) && operator == ""){
        operator = element;
    }
    else if(operators.includes(operator)){
        
        if(element == "="){
            calculate(num1,num2,operator);
        }
        else{
            num2 += element;
            console.log("Num2:" + num2);    
        }
    }
    else{
            num1 += element;
            console.log("Num1" + num1);
    }
    

}

function display(string){
    const div = document.querySelector("#results_row");
    let display = document.createElement("p");
    display.textContent = string;
    display.setAttribute("style", "color: white;");
    div.appendChild(display)
}

function clearValues(){
    /* Need to clear the screen of whatever number is there and then set the values to 0 */
    num1 = "";
    num2 = "";
    operator = "";
    console.log("Clear");
}