function generateButtons(){
    const result_div = document.querySelector("#calculator_container");
    let row = document.createElement("div");
    for(let i = 0; i < 4; i++){
        row.setAttribute("style", "border: black 10px solid;")
        row.className = "added_row";
        result_div.appendChild(row);
    }

}