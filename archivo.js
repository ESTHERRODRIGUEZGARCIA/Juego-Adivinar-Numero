// Secret number: what the user will have to guess
const secretNumber = Math.round(Math.random() * 100);

// Iteration 3: Add a try counter variable
let tryCounter = 0;
let maxAttemps = difficultSelector();
let leftAttemps = maxAttemps;
// Iteration 1: Select the input
let userInput = document.getElementById("guess-input").value;
console.log(userInput);
// Iteration 4: Complete the function
function checkGuess(e) {
  e.preventDefault();
  console.log('I am working', secretNumber, tryCounter);
  tryCounter += 1;
  leftAttemps -= 1;
  /* Your code goes here */
  let userInput = document.getElementById("guess-input").value;
  userInput = maniputaleInmput(userInput);
  let color = '';
  console.log(userInput);
  if (leftAttemps <= 0) {
    alert(`Lo siento, te quedaste sin intentos, el número era ${secretNumber}`);
    button.onclick = function(e) {
      alert('no tienes más intentos')
    }
  }

  if (secretNumber == userInput) {
    alert(`Adivinaste el número secreto! Era ${secretNumber}, has usado ${tryCounter} intentos`);
  }
  else if (secretNumber > userInput) {
    alert(`Muy bajo, te quedan ${leftAttemps} intentos`);
    color = 'ligthred';
  }
  else if (secretNumber < userInput) {
    alert(`Te pasaste, te quedan ${leftAttemps} intentos`);
    color = 'ligthblue';
  }



  let newElement = document.createElement('li');
  bewElement.id = color;
  newElement.style.backgroundColor = color;
  newElement.innerHTML = `Intento ${tryCounter} - ${userInput}`;

  let list = document.getElementById('intentos');
  list.appendChild(newElement);
}

// Iteration 2: Select the button and add the event listener
let button = document.getElementById("guess-btn");

button.onclick = function(e) {
  checkGuess(e)
}


function difficultSelector() {
  let difficultWord = prompt("¿Qué dificultad quieres? ((F)ácil/(M)edia/(D)ificultad)?");
  if (difficultWord == 'F') {
    attemps = 20;
  }
  else if (difficultWord == 'M') {
    attemps = 10;
  }
  else if (difficultWord == 'D') {
    attemps = 5;
  }
  else {
    attemps = 10;
  }
  return attemps;
}


function maniputaleInmput(input) {
  let rand = Math.round(Math.random() * 2);
  if (rand == 1) {
    input = Math.round(Math.random() * 200);
    alert(`jajajaj has escrito ${input}?`)
  }
  return input;
}