$(document).ready(function() {

  $("#directors").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top},
        'slow');
  });

  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_3").offset().top -10},
        'slow');
  });

  $("#contact").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_4").offset().top -50},
        'slow');
  });

    $("#scroll_up").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_1").offset().top},
        'slow');
  });

  $("#scroll_up").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_1").offset().top},
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


