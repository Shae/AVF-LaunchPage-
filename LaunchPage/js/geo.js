
//////////////////CONNECTION TYPE////////////////
function detectConnection() {
    var networkState = navigator.network.connection.type;
    var postIt = document.getElementById('detectPost');
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'No network connection';
    postIt.innerHTML = 'Connection type: ' + states[networkState];
}

//////////// CAMERA /////////////////////
function onFailPhoto(error) {
    window.alert("Fail when getting image. Code = " + error.code);
}

function onSuccessPhoto(imageURI) {
    window.alert("Image taken");
}

function getImage() {
    // window.alert("reaching this point");
    navigator.device.capture.captureImage(onSuccessPhoto, onFailPhoto) ;
}




////////////////////////  Movement ///////////////////
window.ondevicemotion = function(event) {
    
    var element = document.getElementById('accelerometer');
    
    element.innerHTML = 
    'Acceleration X: ' + event.accelerationIncludingGravity.x + '<br />' +
    'Acceleration Y: ' + event.accelerationIncludingGravity.y + '<br />' +
    'Acceleration Z: ' + event.accelerationIncludingGravity.z + '<br />' ;
};

///////////////////////////////////////////////////
/*
 // The watch id references the current `watchAcceleration`
var watchID = null;



// PhoneGap is ready
//
function onDeviceReadyA() {
    window.alert("step 1");  
    startWatchA();
}

// Start watching the acceleration
//
function startWatchA() {
    window.alert("step 2");  
    
    window.ondeviceorientation = function(event) {
        window.alert(event.alpha);
        window.alert(event.beta);
        window.alert(event.gamma);
    };
    // Update acceleration every 3 seconds
    var optionsA = { frequency: 1000 };
    
    watchID = navigator.accelerometer.watchAcceleration(onSuccessA, onErrorA, optionsA);
}

// Stop watching the acceleration
//
function stopWatchA() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// onSuccess: Get a snapshot of the current acceleration
//
function onSuccessA(acceleration) {
    window.alert("step 3");  
    var element = document.getElementById('accelerometer');
    element.innerHTML = 
    'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: '      + acceleration.timestamp + '<br />';
}

// onError: Failed to get the acceleration
//
function onErrorA() {
    window.alert("error");  
    alert('onErrorA!');
}
*/
//////////////////////////////////////////////////////////// GEO////////////////////////////////////////

// onError Callback receives a PositionError object
//
function onError(error) {
    window.alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// onSuccess Geolocation
//
function onSuccess(position) {
    
    var element = document.getElementById('geolocation');
    
    element.innerHTML = 
        'Latitude: '           + position.coords.latitude              + '<br />' +
        'Longitude: '          + position.coords.longitude             + '<br />' +
        'Altitude: '           + position.coords.altitude              + '<br />' +
        'Accuracy: '           + position.coords.accuracy              + '<br />' +
        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
        //'Heading: '            + position.coords.heading               + '<br />' +
        //'Speed: '              + position.coords.speed                 + '<br />' +
        'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    

   
}

// PhoneGap is ready
//

function getPosition() {
      
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
}

///////////////////////END GEO////////////////////////////////


$("#testBtn").live("click", function(e) {
    getPosition();
           
    });


$("#alertBtn").live("click", function(e) {
    window.alert("This is a test.  This is only a test of the iOS window ALERT system.");   

});


$("#backBtn").live("click", function(e) {
    parent.history.back();
        return false;
});

$("#takePhotoBtn").live("click", function(e) {
  getImage();
    // capturePhoto();
});

$("#detect").live("click", function(e) {
    detectConnection();
});


