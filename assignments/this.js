/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the case to catch pretty much everyting.
* 2. Implicit Binding is the case to tell what this is referencing.
* 3. New Binding is a new object that the interpretor created.
* 4. Explicit Binding is a used as a standalone function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var sayPlayer = function(){
    console.log(this.lastPlayer);
};

var turtle581 = {
    number: "turtle581",
    lastPlayer: "Jim",
    age: 38,
    station: "#4",
    startTime: "5:30pm",
    endTime: "6:23pm"
}
sayPlayer();
window.lastPlayer = "Jim Darkmatter";
sayPlayer();

// Principle 2

// code example for Implicit Binding

var turtle422 = {
    number: "turtle422",
    lastPlayer: "Bin",
    age: 34,
    station: "#2",
    sayStation: function(){
    console.log(this.station)
},
    startTime: "1:30pm",
    endTime: "2:29pm"
}
turtle422.sayStation();

// Principle 3

// code example for New Binding
var newTurtle = function(number, lastPlayer, age, station){
    this.number = number;
    this.lastPlayer = lastPlayer;
    this.age = age;
    this.station = station;
};

var turtle691 = new newTurtle("turtle691", "Jack", "19", "#1")
console.log(turtle691);

// Principle 4

// code example for Explicit Binding
var turtle123 = {
    number:"turtle123",
    lastPlayer:"Toshiro Shimazaki",
    age: 22,
    station: "#8",
    sayStation: function(){
        console.log(this.station)
    },
    startTime:"10:15am",
    endTime:"11:40am"
}

var sayLastPlay = function(){
    console.log(this.lastPlayer + " was assigned " + this.number + " and played at station " + this.station + " from " + this.startTime + " to " + this.endTime + ".");
}

sayLastPlay.call(turtle123);