"use strict";
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  var self = this;
  self.firstName = ko.observable("");
  self.lastName = ko.observable("");
  self.fullName = ko.computed(function() {
    return self.firstName() + " " + self.lastName();
  }, self);
  self.capitalizeLastName = function() {
    var currentVal = self.lastName();
    self.lastName(currentVal.toUpperCase());
  };
  self.capitalizeFullName = function() {
    var last = self.lastName();
    self.lastName(last.toUpperCase());
    var first = self.firstName();
    self.firstName(first.toUpperCase());
  };
  self.lowerCaseFullName = function() {
    var last = self.lastName();
    self.lastName(last.toLowerCase());
    var first = self.firstName();
    self.firstName(first.toLowerCase());
  };
  self.consoleLogFullName = function() {
    console.log(self.fullName());
  };
}

ko.applyBindings(new AppViewModel());
