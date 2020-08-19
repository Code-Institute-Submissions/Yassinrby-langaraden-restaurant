function initMap() {
  var langaraden = { lat: 59.34728, lng: 18.324622 };

  var map = new google.maps.Map(document.getElementById("map"), {zoom: 15, center: langaraden,
  });

  var marker = new google.maps.Marker({ 
      postition: langaraden, 
      map: map,
    });

    marker.setMap(map);

}


