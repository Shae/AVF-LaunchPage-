

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
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
    
    // initialize();
   
}

// PhoneGap is ready
//

function getPosition() {
   // window.alert("test Device Rdy");        
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
}




/*
// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);
*/

$("#testBtn").live("click", function(e) {

       //navigator.notification.alert("the message!", callbackFunction, "the title!", "button text!");
    getPosition();
       // navigator.notification.alert("the nav message!");
       // alert("Test Alert Message");
       // console.log("console message");
       // window.alert("window test1");             
    });


$("#alertBtn").live("click", function(e) {
                   
        //navigator.notification.alert("the message!", callbackFunction, "the title!", "button text!");
        // navigator.notification.alert("the nav message!");
        // alert("Test Alert Message");
        // console.log("console message");
    window.alert("This is a test.  This is only a test of the iOS window ALERT system.");   
   // window.confirm("Looky!  A confirm button too!"); 
});


$("#backBtn").live("click", function(e) {
       window.history.back()
});
