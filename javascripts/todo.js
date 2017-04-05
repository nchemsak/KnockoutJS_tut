"use strict";

function Task(data) {
  this.title = ko.observable(data.title);
  this.isDone = ko.observable(data.isDone);
}

function TaskListViewModel() {
  // Data
  var self = this;
  self.tasks = ko.observableArray([]);
  self.newTaskText = ko.observable();
  self.incompleteTasks = ko.computed(function() {
    return ko.utils.arrayFilter(self.tasks(), function(task) {
      return !task.isDone() && !task._destroy;
    });
  });

  // Operations
  self.addTask = function() {
    self.tasks.push(new Task({ title: this.newTaskText() }));
    self.newTaskText("");
  };
  self.removeTask = function(task) { self.tasks.remove(task); };


  // Load initial state from server, convert it to Task instances, then populate self.tasks
  // $.getJSON("/tasks", function(allData) {
  //   var mappedTasks = $.map(allData, function(item) {
  //     return new Task(item);
  //   });
  //   self.tasks(mappedTasks);
  // });

  self.save = function() {
    $.ajax("/tasks", {
      data: {
        json: ko.toJSON({
          tasks: self.tasks
        })
      },
      type: "post",
      dataType: 'json',
      // contentType: "application/json",
      success: function(result) {
        alert(ko.toJSON(result));
      }
    });
  };


  // Load initial state from server, convert it to Task instances, then populate self.tasks
  $.getJSON("/tasks", function(allData) {
    var mappedTasks = $.map(allData, function(fakeData) {
      return new Task(fakeData);
    });
    self.tasks(mappedTasks);
  });

  // Load initial state from server, convert it to Task instances, then populate self.tasks

  // $.ajax("/tasks", {
  //   data: {
  //     json: ko.toJSON(fakeData)
  //   },
  //   type: "get",
  //   dataType: 'json',
  //   success: function(data) {
  //     var mappedTasks = $.map(data, function(item) {
  //       return new Task(item);
  //     });
  //     self.tasks(mappedTasks);
  //   }
  // });
}
var fakeData = [{
  "title": "Wire the money to Panama",
  "isDone": true
}, {
  "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"",
  "isDone": false
}, {
  "title": "Book taxi to airport",
  "isDone": false
}, {
  "title": "Arrange for someone to look after the cat",
  "isDone": false
}];


ko.applyBindings(new TaskListViewModel());
