
function initMap() {
   myLat = document.getElementById('currentLat').value;
   myLng = document.getElementById('currentLng').value;
   console.log(myLat);
   console.log(myLng);

    var myLatLng = {lat: Number(myLat) , lng: Number(myLng) };
    console.log(myLatLng);
    
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 4
        });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,

        });
}

function init(){

    $('#submit').click(function(){
             initMap();
    });
}

$(document).ready(function(){
    init();
});