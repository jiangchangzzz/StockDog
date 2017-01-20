'use strict';

describe('Controller: ChildeCtrl', function () {

  // load the controller's module
  beforeEach(module('stockDogApp'));

  var ChildeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChildeCtrl = $controller('ChildeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChildeCtrl.awesomeThings.length).toBe(3);
  });
});
