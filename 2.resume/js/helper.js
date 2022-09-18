var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = "<span>%data%</span><hr>";

var HTMLcontactGeneric =
  '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile =
  '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail =
  '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter =
  '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub =
  '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog =
  '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation =
  '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart =
  '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills =
  '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = "<em><br>Major: %data%</em>";

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = '<div id="map"></div>';

$(document).ready(function () {
  $("button").click(function () {
    var $name = $("#name");
    var iName = inName($name.text()) || function () {};
    $name.html(iName);
  });
});

var clickLocations = [];

// logs the latitude and lontidute
function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y,
  });
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function (loc) {});

// dispklay the map
var map;

function initializeMap() {
  var locations;

  var mapOptions = {
    disableDefaultUI: true,
  };

  map = new google.maps.Map(document.querySelector("#map"), mapOptions);

  function locationFinder() {
    var locations = [];

    locations.push(bio.contacts.location);

    education.schools.forEach(function (school) {
      locations.push(school.location);
    });

    work.jobs.forEach(function (job) {
      locations.push(job.location);
    });

    return locations;
  }

  function createMapMarker(placeData) {
    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat(); // latitude from the place service
    var lon = placeData.geometry.location.lng(); // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name,
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, "click", function () {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function (place) {
      // the search request object
      var request = {
        query: place,
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  pinPoster(locations);
}
