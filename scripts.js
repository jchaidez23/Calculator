function getValue(num,text){
    let operators = ["clear","+","-","/","*"];
    if(operators.includes(text)){
        if(text === "clear"){
            clear();
        }
        else if(text === "+"){
            add();
        }
        else if(text === "-"){
            subtract();
        }
        else if(text === "/"){
            divide();
        }
        else{
            multiply();
        }
    }
    else{
        num += text;
    }
    return 

}

function clear(num1, num2, operator){
    /* Need to clear the screen of whatever number is there and then set the values to 0 */
    num1 = "0";
    num2 = "0";
    operator = "";
    let values = [num1, num2, operator];
    return num1, num2, operator;
}