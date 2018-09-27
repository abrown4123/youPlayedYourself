
let URL = 'https://rocky-ravine-34479.herokuapp.com/anotherone';

function getData(theUrl) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      let info = JSON.parse(xmlHttp.responseText);
      replaceDefaultImage(info.data)
    }
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

function replaceDefaultImage(data) {
  var khaledGif = document.querySelector('#khaled-gif');
  khaledGif.setAttribute('src', data.image_url);
  khaledGif.onload = () => document.querySelector('h1').className += ' hide';
}

getData(URL);
