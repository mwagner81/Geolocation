var pWatchId;
var element = document.getElementById('permaCheck');

function getPCurGeoData() {
    
    pWatchId = navigator.geolocation.watchPosition(onPermGeoDataSuccess, getPCurGeoError);
}
    
function getPCurGeoError(error) {
    var d = new Date();
    var span_date = '<span>Zeit: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '</span> '; 
    
    element.innerHTML = '<span><b>Error</b></span> | '+ 
                        span_date + '<br><span>Errorcode: '+ 
                        error.code +'<br>Message: '+ 
                        error.message +'</span><br><hr>'+ element.innerHTML; 
}   
    
function onPermGeoDataSuccess(position) {
    var d = new Date();
    var span_date = '<span>Zeit: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() +'</span>';      
    
    element.innerHTML = '<span><b>Success</b></span> | '+ span_date      + '<br />' +
    'Lat: '          + position.coords.latitude          + '<br />' +
    'Long: '         + position.coords.longitude         + '<br />' +
    'Acc: '          + position.coords.accuracy          + '<br><hr>'+ element.innerHTML;
}