let counter = 0;

function tickUp() {
  counter++;
  document.getElementById("counter").textContent = counter;
}

function tickDown() {
  counter--;
  document.getElementById("counter").textContent = counter;
}

function runForLoop() {
  let output = "";
  for (let i = 0; i <= counter; i++) {
    output += i + " ";
  }
  document.getElementById("forLoopResult").textContent = output.trim();
}

function showOddNumbers() {
  let output = "";
  for (let i = 1; i <= counter; i++) {
    if (i % 2 !== 0) {
      output += i + " ";
    }
  }
  document.getElementById("oddNumberResult").textContent = output.trim();
}

function addMultiplesToArray() {
  let multiples = [];

  if (counter >= 5) {
    for (let i = counter; i >= 5; i--) {
      if (i % 5 === 0) {
        multiples.push(i);
      }
    }
  }

  console.log(multiples);
}

function printCarObject() {
  let car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}

function loadCar(carNumber) {
  let selectedCar;

  if (carNumber === 1) {
    selectedCar = carObject1;
  } else if (carNumber === 2) {
    selectedCar = carObject2;
  } else if (carNumber === 3) {
    selectedCar = carObject3;
  }

  if (selectedCar) {
    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
  }
}

function changeColor(colorNumber) {
  let paragraph = document.getElementById("styleParagraph");

  if (colorNumber === 1) {
    paragraph.style.color = "red";
  } else if (colorNumber === 2) {
    paragraph.style.color = "green";
  } else if (colorNumber === 3) {
    paragraph.style.color = "blue";
  }
}
