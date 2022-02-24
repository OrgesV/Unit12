class Vehicle{
	constructor(make,model,year){
		this.make = make
		this.model = model
		this.year = year
	}
	honk(){
		return "Beep"
	}
	toString(){
		return "The vehicle is a " + this.make + " " + this.model + " from " + this.year
	}
}

class Car extends Vehicle{
	numWheel = 4
}

class Motorcycle extends Vehicle{
	numWheel = 2
	revEngine(){
		return "VROOM!!"
	}
}
class Garage{
	vehicles = []
	constructor(capacity){
		this.capacity = capacity
	}
	add(newVehicle){
	    if (!(newVehicle instanceof Vehicle)) {
	      return "Only vehicles are allowed in here!";
	    }
	    if (this.vehicles.length >= this.capacity) {
	      return "Sorry, we're full.";
	    }
	    this.vehicles.push(newVehicle);
	    return "Vehicle added!";
	}
}
let v = new car("Honda", "Monster Truck", 1999)
console.log(v.toString())
console.log(v.numWheel)