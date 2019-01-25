// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
function CuboidMaker(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
}

CuboidMaker.prototype.volume = function() {
    return this.length * this.width * this.height;
}

CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
} 
const cuboid = new CuboidMaker(4, 5, 5);
*/

class CuboidMaker {
    constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area.
*/

/* This does not make much sence, since a cube has all three dimensions equal. 
There is no need for CubeMaker to inherit length, width and height, since all of them are the same.
But for the purpose of the assignment:
*/
class CubeMaker extends CuboidMaker {
    // no need for constructor function or super() as we inherit all the properties and do not add more
    volume() {
        return Math.pow(this.length, 3);
    }
    surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker(3, 3, 3);

console.log(cube.volume());
console.log(cube.surfaceArea());