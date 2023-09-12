let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = ''

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
)

var img1 = document.querySelector("amber")
var img2 = document.querySelector("gateway")
var img3 = document.querySelector("gate")
var img4 = document.querySelector("lotus")
var img5 = document.querySelector("victoria")

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
)