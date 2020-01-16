let difficulty = document.querySelectorAll(".diff");
const squares = document.querySelectorAll(".square");
let colors = [];
let hColor = document.querySelector("#colorDisplay");
let answer = document.querySelector("#answer");
let scoreBoard = document.querySelector("#score");
let resetBtn = document.querySelector("#reset");
let headContainer = document.querySelector(".headContainer");
let score = 0;
let gameOver = false;
let gameHard = true;
let correct;
// Global Functions
function getRandomInteger(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

function setColors()
{
    if (!correct)
    {
        answer.textContent = undefined;
        answer.classList.remove("text-danger");
    }
    else
    {
        answer.textContent = undefined;
        answer.classList.remove("text-success");
    }
    //  apply colors to squares
    if (gameHard)
    {
        for (var i = 0; i < squares.length; i++)
        {
            squares[i].classList.remove("fade");

            colors[i] = ("rgb(" + getRandomInteger(256) + ", " + getRandomInteger(256) + ", " + getRandomInteger(256) + ")")

            squares[i].style.backgroundColor = colors[i];
        }
        hColor.textContent = squares[getRandomInteger(6)].style.backgroundColor;
    }
    else
    {
        for (var i = 0; i < squares.length; i++)
        {
                if (i < 3)
            {
                colors[i] = ("rgb(" + getRandomInteger(256) + ", " + getRandomInteger(256) + ", " + getRandomInteger(256) + ")")
                
                squares[i].style.backgroundColor = colors[i];
            }
            else
            {
                squares[i].classList.add("fade");
            }
            
        }
        for (var i = 3; i < squares.length - 6; i++)
        {
            console.log(i);
            squares[i].style.backgroundColor = "black";
        }
        hColor.textContent = squares[getRandomInteger(3)].style.backgroundColor;
    }
    
}





// processes

// add difficulty to buttons
difficulty[0].addEventListener("click", function()
{
    gameHard = false;
    console.log(gameHard);
    setColors();
    score = 0;
    scoreBoard.textContent = score;
    gameOver = false;
    headContainer.style.backgroundColor = "inherit";
});
difficulty[1].addEventListener("click", function()
{
    gameHard = true;
    console.log(gameHard);
    setColors();
    score = 0;
    scoreBoard.textContent = score;
    gameOver = false;
    headContainer.style.backgroundColor = "inherit";
});


// give colors array its appropriate rgb values
for (var i = 0; i < 6; i++)
{
    squares[i].addEventListener("click", function()
    {
        if (!gameOver)
        {
            if (this.style.backgroundColor != hColor.textContent)
            {
                correct = false;
                this.classList.add("fade");
                score -= 1;
                answer.textContent = "Wrong!"
                answer.classList.add("text-danger")
                gameOver = true;
            } 
            else
            {
                correct = true;
                answer.textContent = "Correct!";
                answer.classList.add("text-success")
                score += 1;
                gameOver = true;
                headContainer.style.backgroundColor = hColor.textContent;
                document.querySelector(".headContainer").style.backgroundColor = hColor.textContent;
            }
            scoreBoard.textContent = score;
        }
        this.classList.remove("fade");
    });
}

// Instantiate game
setColors();

// Reset Button
resetBtn.addEventListener("click", function()
{
    setColors();
    gameOver = false;
    headContainer.style.backgroundColor = "inherit";
});





// Make header include the correct square color

