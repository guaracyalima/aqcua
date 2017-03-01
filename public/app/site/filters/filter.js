/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */

// FILTER
angular.module('acquaApp')
.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++) {
            input.push(i);
        }
        return input;
    };
})
.filter('filterLetter', function() {
  return function(items, letter) {

    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.name.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});