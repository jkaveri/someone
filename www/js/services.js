someone.namespace('someone.services');

someone.services.$module = (function(){
  'use strict';

  var module = angular.module('someone.services',[]);

  //register LocalStorage service.
  module.factory('$localStorage',someone.services.LocalStorage);


  return module;
}());