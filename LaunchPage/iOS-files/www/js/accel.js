// The watch id references the current `watchAcceleration`
var watchID = null;


function onError() {
    window.alert('onError!');
}
// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
    window.alert('success');
    var element = document.getElementById('accelerometer');
    element.innerHTML = 
    'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: '      + acceleration.timestamp + '<br />';
}
// Stop watching the acceleration
//
function stopWatch() {
    window.alert('Stopping');
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

function startWatch() {
    window.alert('Starting');
    // Update acceleration every 3 seconds
    var options = { frequency: 1000 };
    
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}




function onDeviceReady() {
    startWatch();
}



/*function onSuccess(acceleration) {
 window.alert('Acceleration X: ' + acceleration.x + '\n' +
 'Acceleration Y: ' + acceleration.y + '\n' +
 'Acceleration Z: ' + acceleration.z + '\n' +
 'Timestamp: '      + acceleration.timestamp + '\n');
 }; */

/*function onErrorA() {
 window.alert('onError!');
 }; */

var options = { frequency: 1000 };  // Update every 1 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);







$("#accelBtn").live("click", function(e) {
                    
    onDeviceReady();
                    
});
