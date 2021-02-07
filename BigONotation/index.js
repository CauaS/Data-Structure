// Big O notation is uses to classify how scalable a algorithm  of functio...

// Constant runtime
// Big O Notation: '0 (1)'
function log(array){
    console.log(array[0]) // does not matter the size of the array, it always shows the same position
    console.log(array[1])
}

log([1,2,3,4])
log([1,2,3,4,6,7,8,9,10])




//Linear runtime
// Big o Notation: '0 (n)'
// It is proportional to size of the input

function logAll(array){
    for (let index = 0; index < array.length; index++) { //iterate through the whole array
        console.log(array[index]);                       // and log out each element
    }
}

logAll([1,2,3,4])
logAll([1,2,3,4,6,7,8,9,10])


//Exponentioal runtime
// Big O Notation: '0 (n^2)'
function addAndLog(array){
    for (let index = 0; index < array.length; index++) { //iterate through out the array 
        for (let j = 0; j < array.length; j++) {         // iterate throught out the array again
            console.log(array[index] + console.log([j])) // getting the all possible combinations and log them out
        }
    }
}

addAndLog([1,2,3,4])
addAndLog([1,2,3,4,6,7,8,9,10]);

// Binary Search Algorithm
// if search value is greater then middle, then the begin value receives the middle + 1
// if search value is lower then middle, then the end value receives the middle - 1
// and right after that the middle value is recalculated

const array = [1,2,3,4,5,6,7,8,10,9];

function binarySearch(array, seachValue){
  let begin = 0;
  let end = array.length-1;

  while(begin <= end ){
    let mid = Math.floor((begin + end) / 2);
      if(array[mid] === seachValue) return "Value was found :" + mid;

      if(seachValue > array[mid]){
        begin = mid + 1;
      }  
      if(seachValue < array[mid] ){
        end = mid - 1;
      }else {
        console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }
}
binarySearch(array, 8)
