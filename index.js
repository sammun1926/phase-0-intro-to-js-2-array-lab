// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
   const newCats = [...cats, name];
   return newCats;
}


function prependCat(name) {
    const prepCat = [name, ...cats]
    return prepCat ;
}

function removeLastCat() {
    const lastCat= cats.slice(0, -1);
    return lastCat;
}

function removeFirstCat() {
    const firstCat = cats.slice(1);
    return firstCat;
}