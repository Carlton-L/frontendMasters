// Challenge 1

function sayHello() {
    setTimeout(() => {
        console.log('Hello');
    }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

// Challenge 2
var promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Resolved!');
    }, 1000);
});

// Should print out "Resolved!"
promise.then((res) => {
    console.log(res);
});

// Challenge 3

promise = new Promise(function (resolve, reject) {
    reject('Rejected!');
});

// Should print out "Reject!"
promise.catch((res) => {
    console.log(res);
});

// Challenge 4

promise = new Promise(function (resolve, reject) {
    resolve('Promise has been resolved!');
});

// Uncomment the lines below when ready
promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!"); // This line executes first because synchroous code always executes before async code

// Challenge 5
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// /*** This will actually log 'Hello' after 2000ms since sayHello() actually has its own timeout ***/
delay().then(sayHello);

// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise((resolve, reject) => {
    resolve('Second!');
});
var firstPromise = new Promise((resolve, reject) => {
    resolve(secondPromise);
});

firstPromise.then().then((res) => {
    console.log(res);
});
// firstPromise.then() resolves to secondPromise, after which the above line evaluates to:
// secondPromise.then((res) => { console.log('Second!') })
// This then evaluates to:
// ((res = 'Second!') => { console.log(res) })()

// Challenge 7
const fakePeople = [
    { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
    { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
    { name: 'Harold', hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
        if (i >= 0 && i < fakePeople.length) {
            setTimeout(() => resolve(fakePeople[i]), returnTime);
        } else {
            reject({ message: 'index out of range' });
        }
    });
};

function getAllData() {
    let promiseArray = [];
    for (let i = 0; i < fakePeople.length; i++) {
        promiseArray[i] = fakeAPICall(i);
    }
    return promiseArray;
}

Promise.all(getAllData()).then((res) => {
    console.log(JSON.stringify(res));
});

// A strange bug occurs in the csbin.io IDE when running Challenge 7 on its own:
// The response string may not get logged in the console sometimes
// This bug does not occur if there is any other console.log() executed in the code
// The response string also sometimes gets logged after clicking the 'End Code' button
// If you know of an explanation for why this might be happening, please let me know! :)
