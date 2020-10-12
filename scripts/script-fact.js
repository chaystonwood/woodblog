function onClick(e) {
  e.preventDefault();
  let random = Math.floor(Math.random() * 263);
  
  // setup URL
  let url = "https://cat-fact.herokuapp.com/facts";
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      updateResult(json.all[random].text);
    });
}

function updateResult(info) {
  document.getElementById('catFact').innerHTML = info;
}

document.getElementById('get').addEventListener('click', onClick);
