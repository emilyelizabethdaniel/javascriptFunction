//--------------------------------------------------------------------------------------------------------//
//coding practice//
//--------------------------------------------------------------------------------------------------------//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function productOfN(n) {
    for (let i = 1; i <= n; i++) {
        numberArray.push(i);
        var product = numberArray.reduce((total, product) => total * product);
        console.log(product);
    }
};

// productOfN(n);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sumOrProduct(n, choice) {
    if (choice === 'sum') {
        sumOfN(n);
    } else if (choice === 'product') {
        productOfN(n);
    } else {
        console.log('not a valid choice, please try again');
    }
};

// sumOrProduct(6, 'product');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function sumOfN() {
    let numberArray = [];
    let questionOneValue = document.getElementById("input3");
    let questionOneClick = document.getElementById("submit3");
    const div3 = document.getElementById("3");
    const answer = document.createElement("h5");


    questionOneClick.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('click working');
        let userNumber = questionOneValue.value;
        for (let i = 0; i <= userNumber; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                numberArray.push(i);
                let sum = numberArray.reduce((total, sum) => total + sum);
                console.log(sum);
                answer.textContent = sum;
                div3.appendChild(answer);

            } else {
                console.log('not a value divisible by 3 or 5, try again!');
                answer.textContent = "not divisible by 3 or 5!";
                div3.append(answer);
            }
        }
    })
};

sumOfN();

// function button3() {
//     document.getElementById("button3").addEventListener('click', function(e){
//         document.getElementById("3").innerHTML = "";
//         document.getElementById("3").innerHTML = function sumOfN() {
//             let numberArray = [];
//             let questionOneValue = document.getElementById("input3");
//             let questionOneClick = document.getElementById("submit3");
//             const div3 = document.getElementById("3");
//             const answer = document.createElement("h5");
        
        
//             questionOneClick.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 console.log('click working');
//                 let userNumber = questionOneValue.value;
//                 for (let i = 0; i <= userNumber; i++) {
//                     if (i % 3 === 0 || i % 5 === 0) {
//                         numberArray.push(i);
//                         let sum = numberArray.reduce((total, sum) => total + sum);
//                         console.log(sum);
//                         answer.textContent = sum;
//                         div3.appendChild(answer);
        
//                     } else {
//                         console.log('not a value divisible by 3 or 5, try again!');
//                         answer.textContent = "not divisible by 3 or 5!";
//                         div3.append(answer);
//                     }
//                 }
//             })
//         };
//     })
// };

// button3(); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function printAllPrimeNumbers() {
    let n = 1;
    while (n <= 10000) {
        if (n % 2 != 0 && n % 3 != 0 && n % 4 != 0 && n % 5 != 0 && n % 6 != 0 && n % 7 != 0 && n % 8 != 0 && n % 9 != 0) {
            console.log(n);
            n++
        } else
            n++;
    }
};

// printAllPrimeNumbers();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function guessingGame() {
    let numberToGuess = 13;
    let guess = document.getElementById("input");
    let submit = document.getElementById("submit");
    let timesGuessed = 0;

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        var getUserGuess = guess.value;
        console.log(getUserGuess);
        if (getUserGuess > numberToGuess) {
            alert("Your guess is bigger, try again!");
            timesGuessed++;
            console.log(timesGuessed);
        } else if (getUserGuess < numberToGuess) {
            alert("Your guess is smaller, try again!");
            timesGuessed++;
            console.log(timesGuessed);
        } else {
            timesGuessed++;
            alert(`You nailed it! You guessed ${timesGuessed} times`);

        }
    });
}
// guessingGame();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reccordLeapYears() {
    var yearsReccorded = 0;
    let currentLeapYear = new Date(1709186400000);
    console.log(currentLeapYear);
    do {
        var nextLeapYear = new Date(currentLeapYear.setFullYear(currentLeapYear.getFullYear() + 4));
        var stringDate = nextLeapYear.toDateString();
        console.log(stringDate);
        yearsReccorded++;
    } while (yearsReccorded < 20);

};

// reccordLeapYears();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pothole1 = ["X", ".", ".", "X", "X", ".", ".", "X", ".", "."]
function fixPotholes(pothole) {
    let potholesToFix = 0;
    for (let i = 0; i < pothole.length; i++) {
        if (pothole[i] === "X") {
            console.log("fill me up!")
            potholesToFix++;
            console.log(potholesToFix);
        } else {
            console.log('no need!')
        };
    }
};

// fixPotholes(pothole1);