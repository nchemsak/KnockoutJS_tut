"use strict";
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("");
  this.lastName = ko.observable("");
  this.fullName = ko.computed(function() {
    return this.firstName() + " " + this.lastName();
  }, this);
  this.capitalizeLastName = function() {
    var currentVal = this.lastName();
    this.lastName(currentVal.toUpperCase());
  };
  this.capitalizeFullName = function() {
    var last = this.lastName();
    this.lastName(last.toUpperCase());
    var first = this.firstName();
    this.firstName(first.toUpperCase());
  };
  this.lowerCaseFullName = function() {
    var last = this.lastName();
    this.lastName(last.toLowerCase());
    var first = this.firstName();
    this.firstName(first.toLowerCase());
  };
  this.consoleLogFullName = function() {
    console.log(this.fullName());
  };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
