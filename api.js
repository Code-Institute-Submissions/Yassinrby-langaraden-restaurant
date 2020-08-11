function initMap () {
    let langaraden = {lat: 59.347280, lng: 18.324622};

    let map = new google.maps.Map(document.getElementById('map'), {zoom: 3, center: langaraden});

    let marker = new google.maps.Marker({postition: langaraden, map: map});
}