/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the case to catch pretty much everything.
* 2. Implicit Binding is the case to tell what this is referencing.
* 3. New Binding is a new object that the interpretor created.
* 4. Explicit Binding is a used as a standalone function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myTitle(title) {
    console.log(this);
    return title;
}

myTitle("Jenkins");

// Principle 2

// code example for Implicit Binding

let guestOne = {
    name: "Binwin Stonearms",
    table: "2",
    whichTable: function() {
        console.log(this.name + ' is at table ' + this.table + ' from ' + this.startTime  + ' to ' + this.endTime + '!')
    },
    startTime: "2:30pm",
    endTime: "3:30pm"
}
guestOne.whichTable();

// Principle 3

// code example for New Binding
let newGuest = function(name, table, startTime, endTime){
    this.name = name;
    this.table = table;
    this.startTime = startTime;
    this.endTime = endTime;
};

let guestTwo = new newGuest("Jake Strasburg", "3", "12:00pm", "1:00pm");
console.log(guestTwo);

// Principle 4

// code example for Explicit Binding
let guestThree = {
    name:"Tim Lee",
    table: "1",  
    startTime:"10:00am",
    endTime:"11:00am"
}

let sayLastGuest = function() {
    console.log(this.name + " was assigned to table " + this.table + " and autographed from " + this.startTime + " to " + this.endTime + ".");
}

sayLastGuest.call(guestThree);