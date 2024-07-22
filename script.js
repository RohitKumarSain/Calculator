
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let decimal= document.getElementById("decimal");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let rbrac = document.getElementById("rbrac");
let lbrac = document.getElementById("lbrac");
let backspace = document.getElementById("backspace");
let result = document.getElementById("result");
let ac = document.getElementById("AC");
let input= document.getElementById("input");
let key = document.getElementsByClassName("operator_btn");

function calc(){
    
    let a="";
    input.innerHTML ="";

    one.onclick = ()=>{
        a+="1";
        input.innerHTML+="1";
    }
    two.onclick = ()=>{
        a+="2";
        input.innerHTML+="2";
    }
    three.onclick = ()=>{
        a+="3";
        input.innerHTML+="3";
    }
    four.onclick = ()=>{
        a+="4";
        input.innerHTML+="4";
    }
    five.onclick = ()=>{
        a+="5";
        input.innerHTML+="5";
    }
    six.onclick = ()=>{
        a+="6";
        input.innerHTML+="6";
    }
    seven.onclick = ()=>{
        a+="7";
        input.innerHTML+="7";
    }
    eight.onclick = ()=>{
        a+="8";
        input.innerHTML+="8";
    }
    nine.onclick = ()=>{
        a+="9";
        input.innerHTML+="9";
    }
    zero.onclick = ()=>{
        a+="0";
        input.innerHTML+="0";
    }
    add.onclick = ()=>{
        a+="+";
        input.innerHTML+="+"
    }
    subtract.onclick = ()=>{
        a+="-";
        input.innerHTML+="-";
    }
    multiply.onclick = ()=>{
        a+="*";
        input.innerHTML+="×"
    }
    divide.onclick = ()=>{
        a+="/";
        input.innerHTML+="÷";
    }
    decimal.onclick = ()=>{
        a+=".";
        input.innerHTML+=".";
    }
    rbrac.onclick = ()=>{
        a+="*(";
        input.innerHTML+="(";
    }
    lbrac.onclick = ()=>{
        a+=")";
        input.innerHTML+=")";
    }

    backspace.onclick = () =>{
        p=input.innerHTML.slice(0,(a.length-1));
        input.innerHTML = p;
        a=p;
    }

    equal.onclick = ()=>{

        if (SyntaxError){
            result.innerHTML="Error"
        }

        a=eval(a)
        result.innerHTML=a;
        
    }

    ac.onclick = () =>{
        result.innerHTML="";
        history.go()
    }

}

calc()