function ludo1() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  console.log(dice1);

  const player1 = document.getElementById('play1');

  const img1 = `image/s${dice1}.jpg`;

  console.log(player1);

  console.log(img1);

  const setimage1 = player1.setAttribute('src', img1);

  const dice2 = Math.floor(Math.random() * 6) + 1;
  console.log(dice2);

  const player2 = document.getElementById('play2');

  const img2 = `image/s${dice2}.jpg`;

  console.log(player2);
  console.log(img2);
  const setimage2 = player2.setAttribute('src', img2);

  if (dice1 > dice2) {
    document.getElementById('new').innerHTML = 'Player' + ' ' + 1 + ' ' + 'Won';
  } else if (dice2 > dice1) {
    document.getElementById('new').innerHTML = 'Player' + ' ' + 2 + ' ' + 'Won';
  } else {
    document.getElementById('new').innerHTML = 'Tie';
  }
}
