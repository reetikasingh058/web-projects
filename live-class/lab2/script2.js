let addEle= document.getElementById("add");
let subEle= document.getElementById("sub");
let mulEle= document.getElementById("mul");
let divEle= document.getElementById("div");

let inputOneEle= document.getElementById("inputOne");
let inputTwoEle= document.getElementById("inputTwo");


//let outputEle= document.getElementById("calculate");
//outputEle.textContent=0;

//let selectedOperator='';

//addEle.addEventListener('click',function(){

//})
//outputEle.textContent=0;

let calculateEle = document.getElementById("calculate");
let outputEle = document.getElementById("output");

let selectedOperator = "";

// choose the operator
addEle.addEventListener("click", function () {
    selectedOperator = "+";
});

subEle.addEventListener("click", function () {
    selectedOperator = "-";
});

mulEle.addEventListener("click", function () {
    selectedOperator = "*";
});

divEle.addEventListener("click", function () {
    selectedOperator = "/";
});

// calculate when the button is clicked
calculateEle.addEventListener("click", function () {
    if (inputOneEle.value === "" || inputTwoEle.value === "") {
        alert("Enter both numbers!");
        return;
    }

    if (selectedOperator === "") {
        alert("Select an operator first!");
        return;
    }

    let numOne = Number(inputOneEle.value);
    let numTwo = Number(inputTwoEle.value);
    let result;

    if (selectedOperator === "+") {
        result = numOne + numTwo;
    } else if (selectedOperator === "-") {
        result = numOne - numTwo;
    } else if (selectedOperator === "*") {
        result = numOne * numTwo;
    } else if (selectedOperator === "/") {
        if (numTwo === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        result = numOne / numTwo;
    }

    outputEle.textContent = "Result: " + result;
});

