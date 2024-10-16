// Vehicle Generator 


# Vehicle Generator

// This project allows users to create vehicles and perform various actions like starting, accelerating, and stopping them.

## Features
// List of features the application provides.
- Create and manage vehicles (Cars, Trucks, Motorbikes).
- Perform various actions such as:
  - Starting a vehicle
  - Accelerating and decelerating
  - Turning and stopping
  - Reversing
- Special actions:
  - Tow vehicles with Trucks.
  - Perform wheelies with Motorbikes.
- Generate unique Vehicle Identification Numbers (VIN) automatically.

## Installation

// Instructions to clone the repository and install dependencies.
1. Clone the repository:
Install dependencies:
Copy code
// Command to install the required npm packages.
npm install
Usage
// Instructions to run the Vehicle Generator application. Start the application:


Copy code
// Command to run the project.
node index.js
// Explain how the user interacts with the application. Follow the prompts to:

Create a new vehicle (Car, Truck, or Motorbike).
Perform actions on selected vehicles.
Exit the application when done.
Code Structure
// Brief explanation of the main files in the codebase.

Truck.js: Contains the Truck class, handles truck-related functionality.
Car.js: Manages car-specific operations.
Motorbike.js: Manages motorbike-specific operations.
Cli.js: Main CLI class that controls user interactions and vehicle management.
License
