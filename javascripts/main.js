"use strict";
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("");
  this.lastName = ko.observable("");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
