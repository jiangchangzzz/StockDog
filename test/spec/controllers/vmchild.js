'use strict';

describe('Controller: VmchildctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('stockDogApp'));

  var VmchildctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VmchildctrlCtrl = $controller('VmchildctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VmchildctrlCtrl.awesomeThings.length).toBe(3);
  });
});
