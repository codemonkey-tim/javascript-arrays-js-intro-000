var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element){

}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element){

}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0,-2)
  return newArray;
}
