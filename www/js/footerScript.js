var pWatchId;
var element = document.getElementById('permaCheck');

function getPCurGeoData() {
    var options = {
        enableHighAccuracy: false, 
        timeout: 10000, 
        maximumAge:120000
    };        
    
    pWatchId = navigator.geolocation.watchPosition(onPermGeoDataSuccess, getPCurGeoError, options);
}
    
function getPCurGeoError(error) {
    var d = new Date();
    var span_date = '<span>Zeit: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '</span> '; 
    
//    element.innerHTML = '<span><b>Error</b></span> '+ span_date + '<br><hr>'+ element.innerHTML;
    
    switch (error.code) {
        case error.PERMISSION_DENIED:
            element.innerHTML = "<span><b>Error</b></span> "+ span_date + "<br>User denied the request for Geolocation.<br><hr>";
            break;
        case error.POSITION_UNAVAILABLE:
            element.innerHTML = "<span><b>Error</b></span> "+ span_date + "<br>Location information is unavailable..<br><hr>";
            break;
        case error.TIMEOUT:
            element.innerHTML = "<span><b>Error</b></span> "+ span_date + "<br>The request to get user location timed out.<br><hr>";
            break;
        case error.UNKNOWN_ERROR:
            element.innerHTML = "<span><b>Error</b></span> "+ span_date + "<br>An unknown error occurred.<br><hr>";
            break;
    }
    
}   
    
function onPermGeoDataSuccess(position) {
    var d = new Date();
    var span_date = '<span>Zeit: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() +'</span>';      
    
    element.innerHTML = '<span><b>Success</b></span> | '+ span_date      + '<br />' +
    'Lat: '          + position.coords.latitude          + '<br />' +
    'Long: '         + position.coords.longitude         + '<br />' +
    'Acc: '          + position.coords.accuracy          + '<br><hr>'+ element.innerHTML;
}