var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element){

}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element){}
function destructivelyAddElementToEndOfArray(array, element){}
function accessElementInArray(array, index){}
function destructivelyRemoveElementFromBeginningOfArray(array){
  var newArray = array;
  newArray.shift();
  return newArray;
}

function removeElementFromBeginningOfArray(array){}
function destructivelyRemoveElementFromBeginningOfArray(array){}
function destructivelyRemoveElementFromEndOfArray(array){}
function removeElementFromEndOfArray(array){}
