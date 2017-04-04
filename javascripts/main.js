"use strict";
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("");
  this.lastName = ko.observable("");
  this.fullName = ko.computed(function() {
    return this.firstName() + " " + this.lastName();
  }, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
