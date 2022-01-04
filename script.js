"use strict";

let from = document.querySelector("#select-from option[selected]").value;
let to = document.querySelector("#select-to option[selected]").value;
let val = 0;
let output;

document.querySelector("select#select-from").addEventListener("change", function () {from = this.value; calculate()});
document.querySelector("select#select-to").addEventListener("change", function () {to = this.value; calculate()});
document.querySelector("#convert").addEventListener("keyup", ()=>{val = document.querySelector("#convert").value; calculate();})

function calculate(){
    const c = '℃';
    const f = '℉';
    val = Number(document.querySelector("#convert").value);
    from == 'celsius' && to == 'fahrenheit'? output = `${val}${c} = ${((val * (9/5)) + 32)}${f}` : null;
    from == 'celsius' && to == 'kelvin'? output = `${val}${c} = ${val + 273.15}K` : null;
    from == 'fahrenheit' && to == 'celsius'? output = `${val}${f} = ${Math.floor((val - 32) * 5/9)}${c}` : null;
    from == 'fahrenheit' && to == 'kelvin'? output = `${val}${f} = ${((val - 32)* 5/9 + 273.15).toFixed(2)}K`  : null;
    from == 'kelvin' && to == 'celsius'? output = `${val}K = ${(val - 273.15).toFixed(2)}${c}` : null;
    from == 'kelvin' && to == 'fahrenheit'? output = `${val}K = ${((val - 273.15) * (9/5) + 32).toFixed(2)}${f}` : null;
    from == to? output = "Make sure you have selected two different options!": null;
    
    document.querySelector(".output p").textContent = output;
}

calculate();
