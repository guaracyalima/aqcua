/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')       
.config(function(ngJcropConfigProvider){
    ngJcropConfigProvider.setJcropConfig({
        bgColor: 'black',
        bgOpacity: .4,
        aspectRatio: 1,
        maxWidth: 300,
        maxHeight: 300
    });
    // Used to differ the upload example
    ngJcropConfigProvider.setJcropConfig('upload', {
        bgColor: 'black',
        bgOpacity: .4,
        aspectRatio: 1,
        maxWidth: 300,
        maxHeight: 300
    });
    // Used to differ the another upload example
    ngJcropConfigProvider.setJcropConfig('another-upload', {
        bgColor: 'black',
        bgOpacity: .4,
        aspectRatio: 1,
        maxWidth: 300,
        maxHeight: 300
    });
    // Used to differ the url example
    ngJcropConfigProvider.setJcropConfig('url-config', {
        bgColor: 'black',
        bgOpacity: .4,
        aspectRatio: 1,
        maxWidth: 300,
        maxHeight: 300,
        eventName: 'blur'
    });
    ngJcropConfigProvider.setJcropConfig('truesize-config', {
        bgColor: 'black',
        bgOpacity: .4,
        aspectRatio: 1,
        maxWidth: 300,
        maxHeight: 300,
        trueSize: [600, 600]
    });
});