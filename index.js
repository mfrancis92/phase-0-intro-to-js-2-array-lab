// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
}
function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
}
function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
}
function removeLastCat() {
    const newArray = cats.slice(0, 2);
    return newArray;
}

function removeFirstCat() {
    const newArray = cats.slice(1);
    return newArray;
}