var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element){

}

function destructivelyAddElementToEndOfArray(array, element){

}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){

}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){

}
