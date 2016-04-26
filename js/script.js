/**
 * Created by Илья Яновой on 15.04.2016.
 */
$(function() {
    var leftUIEl = $('.carousel-left');
    var rightUIEl = $('.carousel-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

});

var tmpl = _.template(document.getElementById('list-template'));

// ..а вот и результат
var result = tmpl({count: 5});
document.write( result );
