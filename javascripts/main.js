"use strict";
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
// function AppViewModel() {
//   this.firstName = ko.observable("");
//   this.lastName = ko.observable("");
//   this.fullName = ko.computed(function() {
//     return this.firstName() + " " + this.lastName();
//   }, this);
//   this.capitalizeLastName = function() {
//     var currentVal = this.lastName();
//     this.lastName(currentVal.toUpperCase());
//   };
//   this.capitalizeFullName = function() {
//     var last = this.lastName();
//     this.lastName(last.toUpperCase());
//     var first = this.firstName();
//     this.firstName(first.toUpperCase());
//   };
//   this.lowerCaseFullName = function() {
//     var last = this.lastName();
//     this.lastName(last.toLowerCase());
//     var first = this.firstName();
//     this.firstName(first.toLowerCase());
//   };
//   this.consoleLogFullName = function() {
//     console.log(this.fullName());
//   };
// }



// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
  var self = this;

  // Non-editable catalog data - would come from the server
  self.availableMeals = [
    { mealName: "Standard (sandwich)", price: 0 },
    { mealName: "Premium (lobster)", price: 34.95 },
    { mealName: "Ultimate (whole zebra)", price: 290 }
  ];

  // Editable data
  self.seats = ko.observableArray([
    new SeatReservation("Steve", self.availableMeals[0]),
    new SeatReservation("Bert", self.availableMeals[0])
  ]);
  self.addSeat = function() {
    self.seats.push(new SeatReservation("", self.availableMeals[0]));
  };
  self.removeSeat = function(seat) {
    self.seats.remove(seat);
  };
}
// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
  var self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);
  self.formattedPrice = ko.computed(function() {
    var price = self.meal().price;
    return price ? "$" + price.toFixed(2) : "None";
  });
}


// Activates knockout.js
ko.applyBindings(new ReservationsViewModel());
// ko.applyBindings(new AppViewModel());
