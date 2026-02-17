let counter = 0;

function tickup(){
  counter++
   document.getElementById("counter").textContent = counter;
}

function tickdown(){
  counter--
   document.getElementById("counter").textContent = counter;
}

function runforloop(){
  let output = "";
  for(let i = 0; i <= counter, i++){
    output =+ i + "";
  }
   document.getElementById("forLoopResult").textContent = counter;
}

function showoddnumbers(){
  let output = "";
  for(let i = 1; i<= counter; i++){
    if (i % 2 !== 0){
      outuput =+ i + "";
    }
  }
   document.getElementById("oddNumberResult").textContent = counter;
}
