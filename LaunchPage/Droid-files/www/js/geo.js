/*
function watchLocation(successCallback, errorCallback) {
  successCallback = successCallback || function(){};
  errorCallback = errorCallback || function(){};

  // Try HTML5-spec geolocation.
  var geolocation = navigator.geolocation;

  if (geolocation) {
    // We have a real geolocation service.
    try {
      function handleSuccess(position) {
        successCallback(position.coords);
      }

      geolocation.watchPosition(handleSuccess, errorCallback, {
        enableHighAccuracy: true,
        maximumAge: 5000 // 5 sec.
      });
    } catch (err) {
      errorCallback();
    }
  } else {
    errorCallback();
  }
}

function init() {
  watchLocation(function(coords) {
    document.getElementById('geolocation').innerHTML = 'coords: ' + coords.latitude + ',' + coords.longitude;
  }, function() {
    document.getElementById('geolocation').innerHTML = 'error';
  });
}*/


function onError(error) {
    window.alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        //'Altitude: '           + position.coords.altitude              + '<br />' +
                        //'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        //'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                       // 'Heading: '            + position.coords.heading               + '<br />' +
                       // 'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          + new Date(position.timestamp)          + '<br />';
}


function getPosition() {  
	navigator.geolocation.getCurrentPosition(onSuccess, onError); 
}


$("#testBtn").live("click", function(e) {
    //init();
    getPosition();
    });


$("#alertBtn").live("click", function(e) {
    window.alert("This is a test.  This is only a test of the Android ALERT system.");   
});


$("#backBtn").live("click", function(e) {
    window.history.back();
});










