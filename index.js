// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
   
function destructivelyAppendCat(Ralph){
    cats.push ("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift ("Bob");
}
function destructivelyRemoveLastCat(Ralph){
    cats.pop ("Ralph")
}
function destructivelyRemoveFirstCat(Bob){
    cats.shift ("Bob")
}

function appendCat(rick){
    const newcats = [...cats, rick]
    return newcats
}
function prependCat(cole){
    const beforecat = [cole, ...cats]
    return beforecat
}
function removeLastCat(){
    const removecat = cats.slice(0, -1)
    return removecat
}
function removeFirstCat(){
    const firstcatgone = cats.slice(-2)
    return firstcatgone
}