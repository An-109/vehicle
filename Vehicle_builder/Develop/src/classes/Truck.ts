// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Car class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists\
    const vehicleDetails = `${this.make} ${this.model}`;
    if (vehicle !== this) {

    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`towing ${vehicleDetails}`)
    } else{
      console.log(`too heavy to tow ${vehicleDetails}`)
    }
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  }

}
override printDetails(): void {
  // Call the parent class's printDetails method
  super.printDetails();

  // Log the Truck details
  console.log(`Truck Details: 
    VIN: ${this.vin}
    Make: ${this.make}
    Model: ${this.model}
    Year: ${this.year}
    Weight: ${this.weight}
    Top Speed: ${this.topSpeed}
    Color: ${this.color}
    Towing Capacity: ${this.towingCapacity}
    Wheels: ${this.wheels.length}`)
}
}
// Export the Truck class as the default export
export default Truck;
