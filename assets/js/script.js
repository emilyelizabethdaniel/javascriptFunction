//--------------------------------------------------------------------------------------------------------//
//coding practice//
//--------------------------------------------------------------------------------------------------------//

let n = 9;
let numberArray = [];

function sumOfN(n) {
    for (let i = 0; i <= n; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            numberArray.push(i);
            var sum = numberArray.reduce((total, sum) => total + sum);
            console.log(sum);
        } else {
            console.log('not a value divisible by 3 or 5, try again!')
        }
    }
};

// sumOfN(n);

function productOfN(n) {
    for (let i = 1; i <= n; i++) {
        numberArray.push(i);
        var product = numberArray.reduce((total, product) => total * product);
        console.log(product);
    }
}

// productOfN(n);

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

fixPotholes(pothole1);