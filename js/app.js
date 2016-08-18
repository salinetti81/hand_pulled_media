$(document).ready(function() {

  $("#directors").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top},
        'slow');
  });

  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_3").offset().top},
        'slow');
  });

  $("#contact").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_4").offset().top},
        'slow');
  });

  });//ends document.ready

var app = angular.module('HandPulledMedia', []);

app.controller('BodyController', [function($scope,ngBody){ 
    
    this.displayContent = false;

    // click to reveal content
    var controller = this;
    this.showContent = function() {
      controller.displayContent = !controller.displayContent;
    }
}]);


