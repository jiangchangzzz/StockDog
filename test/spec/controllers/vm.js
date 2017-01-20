'use strict';

describe('Controller: VmCtrl', function () {

  // load the controller's module
  beforeEach(module('stockDogApp'));

  var VmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VmCtrl = $controller('VmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VmCtrl.awesomeThings.length).toBe(3);
  });
});
