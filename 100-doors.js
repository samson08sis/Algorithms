/**
 * There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.
 */

function getFinalOpenedDoors(numDoors) {
  let opened = [];
  let i = 0;
  while (i < numDoors) {
    opened.push(false);
    i++;
  }

  let passNum = 1;
  for (let h = 1; h <= numDoors; h++) {
    for (let i = passNum; i <= numDoors; i += passNum) {
      opened[i] = !opened[i];
    }
    passNum++;
  }

  let openedDoors = [];
  for (let i = 0; i < opened.length; i++) {
    if (opened[i] === true) {
      openedDoors.push(i);
    }
  }
  return openedDoors;
}

console.log("1  :", getFinalOpenedDoors(1));
console.log("2  :", getFinalOpenedDoors(2));
console.log("3  :", getFinalOpenedDoors(3));
console.log("4  :", getFinalOpenedDoors(4));
console.log("5  :", getFinalOpenedDoors(5));
console.log("10 :", getFinalOpenedDoors(10));
console.log("20 :", getFinalOpenedDoors(20));
console.log("100:", getFinalOpenedDoors(100));
