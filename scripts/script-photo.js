function loadPhoto(e) {
  e.preventDefault();

  // setup URL
  let url = "https://api.thecatapi.com/v1/images/search";

  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      updateImage(json[0].url);
    });
}

function updateImage(url) {
  document.getElementById('catPhoto').src = url;
}

document.getElementById('get').addEventListener('click', loadPhoto);
