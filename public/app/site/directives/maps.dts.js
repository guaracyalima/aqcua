/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
app.directive('dtsMaps', function () { 
    // directive link function
    var fnMaps = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        var options = scope.$eval($(element).attr('data-options'));
        var gmaps = $('#gmaps'); 
        
        // SIZE MAPS
        $('#gmaps').width( options.width );
        $('#gmaps').height( options.height );

        // map config
        var mapOptions = {
            center: new google.maps.LatLng(options.centerLat, options.centerLng),
            zoom: options.zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            streetViewControl: options.streetV,
            styles: options.style
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: options.icon
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
            
            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }
        
        // show the map and place some markers
        initMap();
        
        angular.forEach(options.marker, function(value, key ){
            setMarker(map, new google.maps.LatLng(value.lat, value.lng), value.name, value.desc);
        });
        
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps" style="height:200px; width:200px;"></div>',
        replace: true,
        link: fnMaps
    };
    
});