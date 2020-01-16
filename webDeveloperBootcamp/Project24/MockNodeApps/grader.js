
// Gets a random integer, multiply by 100, round to 2nd place value.
let mRand = function(){
   let x = Math.round(Math.random()*100, 2);
   return x;
}

// Averages the two arays and prints them to the console.
let average = function(){
    let tmp = 0;
    let tmp2 = 0;
    // Iterate over each value and add to the tmp total
    for (let a = 0; a < 10; a++)
    {
        tmp += scores[a];
        tmp2 += scores2[a];
    }
    tmp = tmp / scores.length;
    tmp2 = tmp2 / scores2.length;
    console.log(scores)
    console.log(scores2)
    console.log("The average for this bracked would be: ", tmp);
    console.log("The average for this bracked would be: ", tmp2);
}

let scores = [];
let scores2 = [];

// Assign random integers to the scores array(s)
for (let i = 0; i < 10; i ++)
{
    let n = mRand();
    scores.push(n);
    n = mRand();
    scores2.push(n);
}
// Call function and log averages
average();
