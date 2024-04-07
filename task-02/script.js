// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the request
xhr.open("GET", "https://restcountries.com/v3.1/all", true);

// Define what happens when data is loaded
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse the JSON response
    var data = JSON.parse(xhr.responseText);

    // Log the flags to the console
    data.forEach(function (country) {
      console.log(country.flags.svg);
    });
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

// Define what happens in case of an error
xhr.onerror = function () {
  console.error("Request failed");
};

// Send the request
xhr.send();
