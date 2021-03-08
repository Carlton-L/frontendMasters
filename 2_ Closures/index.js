// CHALLENGE 1
function createFunction() {
  return function outputFunction() {
    console.log('hello');
  };
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function outputFunction() {
    console.log(input);
  };
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  return function outputFunction(num) {
    // console.log(num + x)
    return num + x;
  };
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let val;
  return function outputFunction(args) {
    if (!val) {
      val = func(args);
    }
    return val;
  };
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let i = 0;
  return function outputFunction(args) {
    if (i === count - 1) {
      func(args);
    } else {
      i++;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log('hello');
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {
  let done = false;
  setTimeout(function () {
    done = true;
  }, wait);
  return function outputFunction() {
    if (done) {
      func();
    }
  };
}

const delayedHello = delay(called, 3000);
delayedHello(); // prints nothing
setTimeout(delayedHello, 1000); // prints nothing
setTimeout(delayedHello, 4000); // prints 'hello' after 4 seconds

// CHALLENGE 7
function rollCall(names) {
  let i = 0;
  return function outputFunction() {
    if (i < names.length) {
      console.log(names[i]);
      i++;
    } else {
      console.log('Everyone accounted for');
    }
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  let argObj = {};
  return function outputFunction(arg) {
    if (arg === magicWord) {
      return argObj;
    } else {
      argObj[arg] = func(arg);
      return argObj[arg];
    }
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let i = 0;
  return function outputFunction() {
    let item = array[i];
    i < array.length - 1 ? i++ : (i = 0);
    return item;
  };
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  return function outputFunction(args) {
    return func(arg, args);
  };
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  return function outputFunction(args) {
    const dateTime = new Date();
    return {
      dateTime: func(args),
    };
  };
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  let dictionary = {};
  return function outputFunction() {
    if (arguments[1]) {
      // Check for second argument
      // Add pair to dictionary
      dictionary[arguments[0]] = arguments[1];
    } else {
      let string = arguments[0];
      for (const word in dictionary) {
        string = string.replaceAll(word, dictionary[word]);
      }
      return string;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  return {
    getSecret: function () {
      // console.log(secret)
      return secret;
    },
    setSecret: function () {
      secret = arguments[0];
    },
  };
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14
function callTimes() {
  let i = 0;
  return function outputFunction() {
    i++;
    // console.log(i)
    return i;
  };
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function russianRoulette(num) {
  let i = 0;
  return function outputFunction() {
    i++;
    if (i < num) {
      return 'click';
    } else if (i === num) {
      return 'bang';
    }
    return 'reload to play again';
  };
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16
function average() {
  let i = 0;
  let total = 0;
  return function outputFunction() {
    if (arguments[0]) {
      i++;
      total += arguments[0];
    }
    return total / i;
  };
  // This solution will return 'NaN' instead of '0' on the first function call contrary to the below answer, which I think is more accurate
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  return function outputFunction(callback) {
    for (let i = 0; i < arrOfTests.length; i++) {
      if (callback(arrOfTests[i][0]) !== arrOfTests[i][1]) {
        return false;
      }
    }
    return true;
  };
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  let history = [];
  return function outputFunction(str) {
    if (str === 'undo') {
      if (history.length > 0) {
        return `${history.pop()} undone`;
      } else {
        return 'nothing to undo';
      }
    }
    history.push(str);
    if (history.length > limit) {
      history.splice(0, 1);
    }
    return `${str} done`;
  };
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  let scoreBoard = {}; // "global" scoreboard for all the players
  let i = 0; // number of times the dealer has dealt a set of cards (player number)
  return function dealer(num1, num2) {
    let sum = num1 + num2;
    let dealt = false;
    let busted = false;
    return function player() {
      if (dealt && !busted) {
        sum += array.shift();
        if (sum > 21) {
          busted = true;
          return 'bust';
        }
        return sum;
      } else if (busted) {
        return 'you are done';
      } else {
        dealt = true;
        return sum;
      }
    };
  };
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2,
  6,
  1,
  7,
  11,
  4,
  6,
  3,
  9,
  8,
  9,
  3,
  10,
  4,
  5,
  3,
  7,
  4,
  9,
  6,
  10,
  11,
]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
