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
var touch = window.ontouchstart
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0);

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

var app = angular.module('HandPulledMedia', []);

app.controller('BodyController', [function($scope,ngBody){ 
    
    this.displayContent = false;

    // click to reveal content
    var controller = this;
    this.showContent = function() {
      controller.displayContent = !controller.displayContent;
    }
}]);


