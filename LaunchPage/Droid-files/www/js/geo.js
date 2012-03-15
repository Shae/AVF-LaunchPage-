
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
    window.alert("reaching this point");
    navigator.device.capture.captureImage(onSuccessPhoto, onFailPhoto) ;
}




////////////////////////  Movement ///////////////////


function  getAccel() {
navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onError);
}

//onSuccess: Get a snapshot of the current acceleration
function onAccelerationSuccess(acceleration) {
alert( 'Acceleration X: ' + acceleration.x + ', Acceleration Y: ' + acceleration.y 
+ ', Acceleration Z: ' + acceleration.z );
}

//onError: Failed to get the acceleration
function onError() {
alert ("onError");
}

//////////////
/*
function getAccel() {
	navigator.accelerometer.watchAcceleration(onAccelerationSuccess, onErrorA);
}

// onSuccess: Get a snapshot of the current acceleration
function onAccelerationSuccess(acceleration) {

    
var element = document.getElementById('accelData');
    
    element.innerHTML = 
    	'Acceleration X: '			+ acceleration.x             + '<br />' +
        'Acceleration Y: '         	+ acceleration.y             + '<br />' +
        'Acceleration Z: '         	+ acceleration.z             + '<br />' ;
}

// onError: Failed to get the acceleration
function onErrorA(x) {
    alert ("error: " + x);
}

*/
//////////////////////////////////////////////////////////// GEO////////////////////////////////////////

// onError Callback receives a PositionError object
//
function onErrorG(error) {
    window.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

// onSuccess Geolocation
//
function onSuccessG(position) {
    alert("Got this far in geo");
    var element = document.getElementById('geolocation');
    
    element.innerHTML = 
        'Latitude: '           + position.coords.latitude              + '<br />' +
        'Longitude: '          + position.coords.longitude             + '<br />' ;
        //'Altitude: '           + position.coords.altitude              + '<br />' +
        //'Accuracy: '           + position.coords.accuracy              + '<br />' +
        //'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
        //'Heading: '            + position.coords.heading               + '<br />' +
        //'Speed: '              + position.coords.speed                 + '<br />' +
        //'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    

   
}

// PhoneGap is ready
//

function getPosition() {
      
	navigator.geolocation.getCurrentPosition(onSuccessG,onErrorG, { enableHighAccuracy: true });
    
}

///////////////////////END GEO////////////////////////////////


$("#testBtn").live("click", function(e) {
    getPosition();         
});

$("#alertBtn").live("click", function(e) {
    window.alert("This is a test.  This is only a test of the iOS window ALERT system.");   
});

$("#backBtn").live("click", function(e) {
   window.history.back();
});

$("#takePhotoBtn").live("click", function(e) {
  getImage();
    // capturePhoto();
});

$("#detect").live("click", function(e) {
    detectConnection();
});

$("#accelBtn").live("click", function(e) {
    getAccel();
});
