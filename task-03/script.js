// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the request
xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.responseText);

    data.forEach(function (country) {
      console.log("Country: " + country.name.common);
      console.log("Region: " + country.region);
      console.log("Subregion: " + country.subregion);
      console.log("Population: " + country.population);
    });
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

// Send the request
xhr.send();
