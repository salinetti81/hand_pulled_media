var app = angular.module('HandPulledMedia', []);

app.controller('BodyController', [function($scope,ngBody){ 
    
    this.displayContent = false;

    // click to reveal content
    var controller = this;
    this.showContent = function() {
      controller.displayContent = !controller.displayContent;
    }
}]);


