var hardMode = 6;
var difficulty = hardMode;
var colors = generateColors(difficulty);

var squares = document.querySelectorAll(".square");
var pickedColor = selectRandomColor();;
var pickedColorTitle = document.querySelector("#picked-color");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var reset = document.querySelector("#new-colors");
var easyModeButton = document.querySelector("#easy");
var hardModeButton = document.querySelector("#hard");
pickedColorTitle.textContent = pickedColor;

easyModeButton.addEventListener("click", function() {
  this.classList.add("selected");
  hardModeButton.classList.remove("selected");
  messageDisplay.textContent = "";


  colors = generateColors(3);
  difficulty = 3;
  pickedColor = selectRandomColor();
  pickedColorTitle.textContent = pickedColor;
  console.log(colors);

  for (j = 3; j < squares.length; j++) {
    squares[j].style.display = "none";
  }

  for (i = 0; i < colors.length; i++) {
    squares[i].style.background = colors[i]
    squares[i].addEventListener("click", function() {
      if (this.style.background == pickedColor) {
        messageDisplay.textContent = "Correct!"
        correctColorChosen(pickedColor);
        h1.style.background = pickedColor;
        reset.textContent = "Play again?"

      } else {
          this.style.background = "#232323";
            messageDisplay.textContent = "Wrong! Try again!";
        }
      });
    }
})

hardModeButton.addEventListener("click", function() {
  this.classList.add("selected");
  easyModeButton.classList.remove("selected");
  messageDisplay.textContent = "";


  difficulty = 6;

  colors = generateColors(difficulty);
  pickedColor = selectRandomColor();
  pickedColorTitle.textContent = pickedColor;

  displaySixSquares();
  for (j = 3; j < squares.length; j++) {
    squares[j].style.display = "block";
  }

})



reset.addEventListener("click", function() {
  colors = generateColors(difficulty);
  pickedColor = selectRandomColor();
  pickedColorTitle.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  reset.textContent = "New Colors"

for (i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]
  squares[i].addEventListener("click", function() {
    if (this.style.background == pickedColor) {
      messageDisplay.textContent = "Correct!"
      correctColorChosen(pickedColor);
      h1.style.background = pickedColor;
      reset.textContent = "Play again?"
    } else {
        this.style.background = "#232323";
          messageDisplay.textContent = "Wrong! Try again!";
      }
    });
  }
});




for (i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i]
	squares[i].addEventListener("click", function() {
		if (this.style.background == pickedColor) {
			messageDisplay.textContent = "Correct!"
			correctColorChosen(pickedColor);
			h1.style.background = pickedColor;
      reset.textContent = "Play again?"

		} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Wrong! Try again!";
			}
	});
}

function correctColorChosen(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function selectRandomColor() {
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateColors(numOfColors) {
  var colors = [];
  
  var red = 0;
  var green = 0;
  var blue = 0;
  
  var currentMix = [];
  
  for (i = 0; i < numOfColors; i++) {
    red = Math.floor(Math.random() * 256);
    currentMix.push(red);
    
    green = Math.floor(Math.random() * 256);
    currentMix.push(green);
    
    blue = Math.floor(Math.random() * 256);
    currentMix.push(blue);
    color = currentMix.join(", ");
    color = "rgb" + "(" + color + ")";
    colors.push(color);
    currentMix = [];
  }
  return colors;
}

function displaySixSquares() {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
    squares[i].addEventListener("click", function() {
      if (this.style.background == pickedColor) {
        messageDisplay.textContent = "Correct!"
        correctColorChosen(pickedColor);
        h1.style.background = pickedColor;
      } else {
          this.style.background = "#232323";
          messageDisplay.textContent = "Wrong! Try again!";
        }
    });
  }
}



