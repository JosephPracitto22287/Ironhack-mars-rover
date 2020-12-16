// Rover Object Goes Here
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}

// ITERATION 1
let rover ={
  direction: "N"
}

//ITERATION 2
function turnLeft(rover){
  if (rover.direction == "N") {
    rover.direction = "W";
} else if (rover.direction ==="W") {
  rover.direction = "S";
} else if (rover.direction ==="S") {
rover.direction = "E";
} else if (rover.direction === "E") {
rover.direction = "N"
}
}

function turnRight(rover){
  if (rover.direction == "S") {
    rover.direction = "E";
} else if (rover.direction ==="E") {
  rover.direction = "N";
} else if (rover.direction ==="N") {
rover.direction = "W";
} else if (rover.direction === "W") {
rover.direction = "S"
}
//iteration 3
console.log("TESTING")
function moveForwarad(rover) {
if(rover.direction === "N") {
  rover.y--;
  console.log(`X: ${rover.x}, ${rover.y}`)
} else if (rover.direction === "S") {
  rover.y++;
  console.log(`X: ${rover.x}, ${rover.y}`)
} else if (rover.direction === "E") {
  rover.x++;
  console.log(`X: ${rover.x}, ${rover.y}`)
} else if(rover.direction == "W") {
  rover.x--;
  console.log(`X: ${rover.x}, ${rover.y}`)
}
}

//ITERATION 4
function commands(steps) {

for(let i = 0; i < steps.length; i++) {
  if(steps.charAt(i) === "l") {
    turnLeft (rover);
  } else if (steps.charAt(i) === "r") {
  turnRight(rover);
} else if else if (steps.charAt(i) === "f") {
  moveForward(rover);
}

}

//ITERATION 5

rover.travalLog.push(steps.charAt(i));

}

console.log("Travel Log: " + rover.travelLog);

}
