// Game creation run just once
// let apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
// const game = {
//   "name": "Mm The Game"
// };
// gameId = "VweAZKDll3qd5Cc5zJGw"; made with postman
// const fetchOptions = {
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   },
//   body: JSON.stringify(game),
//   method: "POST",
// };

// fetch(apiUrl, fetchOptions)
// .then( data =>{ return data.json(); }) // converts the response into json
// .then( res => { console.log(res); }) // prints the data to the console
// .catch( error => { console.log(error) }); // if there is an error it logs it to the console
const gameID='uBQGIE809ExVe6lR1BYH'; // made with the code above
let apiScoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
apiScoreURL = apiScoreURL + gameID + '/scores/';


function updateMessage(data) {
  const msg = document.getElementById('message');
  console.log(data);
  //msg.innerHTML = resp.result;
}

function addScore() { 

  const player = document.getElementById('player-name');
  const score = document.getElementById('player-score');

  const scoreData = {
    "user": player.nodeValue,
    "score": score.value,
  };

  const fetchOptions = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(scoreData),
    method: "POST",
  };

  const resp = fetch(apiScoreURL, fetchOptions)
  .then( data => { return data.json() } ) // converts the response into json
  .then( response => {updateMessage(response)})
  .catch( error => { console.log(error) }); // if there is an error it logs it to the console

  
}

const scrbtn = document.getElementById('score-button');
scrbtn.addEventListener('click', addScore);
//console.log(apiScoreURL);