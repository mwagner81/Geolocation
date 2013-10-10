document.addEventListener("online",  function(){
    document.getElementById('onlineTest').innerHTML = "<br /><br /><span style='font-weight:bold;color:green'>Online</span>";
}, false);

document.addEventListener("offline",  function(){
    document.getElementById('onlineTest').innerHTML = "<br /><br /><span style='font-weight:bold;color:red'>Offline</span>";
}, false);

document.addEventListener("deviceready", function(){
    document.getElementById('readyTest').innerHTML = "<br /><br /><span style='font-weight:bold;color:green'>deviceready</span>";
    
}, false);

var pWatchId;

var element = document.getElementById('permaCheck');

function getPCurGeoData() {
        
    var options = {
        enableHighAccuracy: true, 
        timeout: 10000, 
        maximumAge:120000
    };        

    pWatchId = navigator.geolocation.watchPosition(onPermGeoDataSuccess, getPCurGeoError, options);
        		
}
    
function getPCurGeoError(error) {
        
    var d;
        
    d = new Date();

    var span_date = '<span>Zeit: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '</span> ';  
    
    element.innerHTML = '<span><b>Permanent Error</b></span> '+ span_date + '<br><hr>'+ element.innerHTML;
    
    
}   
    
function onPermGeoDataSuccess(position) {

    var d = new Date();
    //console.log(getTime() + " setGeoData r_key => " + r_key);

    var span_date = '<span>Zeit: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() +'</span>';      
    
    
    
    element.innerHTML = '<span><b>Success</b></span> | '+ span_date      + '<br />' +
        'Lat: '          + position.coords.latitude          + ' | ' +
        'Long: '         + position.coords.longitude         + '<br />' +
        'Acc: '          + position.coords.accuracy          + ' | ' +
        'Alt: '          + position.coords.altitude          + ' | ' +
        'Alt Acc: '      + position.coords.altitudeAccuracy  + '<br />' +
        'Heading: '      + position.coords.heading           + '|' +
        'Speed: '        + position.coords.speed             + '<br><hr>'+ element.innerHTML;

}