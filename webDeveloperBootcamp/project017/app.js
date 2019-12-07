let difficulty = document.querySelectorAll(".diff");
const squares = document.querySelectorAll(".square");
let colors = [];
let hColor = document.querySelector("#colorDisplay");
let score;

// Global Functions
function getRandomInteger(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}



// Processes


// add difficulty to buttons
for (var i = 0; i < 2; i++)
{
    difficulty[i].addEventListener("click", function()
    {
        if (i = 1) {
            for (var i = 3; i < 6;i++)
            {
                squares[i].classList.add("tSquare");
            }
        }
    })
}

// give colors array its appropriate rgb values
for (var i = 0; i < 6; i++)
{
    colors[i] = ("rgb(" + getRandomInteger(256) + ", " + getRandomInteger(256) + ", " + getRandomInteger(256) + ")")
   
    
    squares[i].addEventListener("click", function()
    {
        if (this.style.backgroundColor != hColor.textContent)
        {
            this.classList.add("fade");
        } 
        else
        {
            this.classList.add("correct")
            score += 1;
        }
    });
}

//  apply colors to squares
for (var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
}

// Make header include the correct square color
hColor.textContent = squares[getRandomInteger(6)].style.backgroundColor;

