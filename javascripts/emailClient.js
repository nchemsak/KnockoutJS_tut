"use strict";

function WebmailViewModel() {
  // Data
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();

  //Behaviours
  self.goToFolder = function(folder) {
    self.chosenFolderId(folder);

    // populate  chosenFolderData by performing an Ajax request:
    $.get('/mail', { folder: folder }, self.chosenFolderData);

  };

  //go to Inbox folder by default
  self.goToFolder('Inbox');
}

ko.applyBindings(new WebmailViewModel());
