// Add 1 Point to Team 1 Score
const addteam1Score = () => {
  let team1Score = document.querySelector('.team-1-score').textContent
  if (parseInt(team1Score) === 21) {
    document.querySelector('.team-1-name').textContent = 'YOU WIN!'
    document.querySelector('.team-2-name').textContent = 'YOU LOSE!'
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.update-team-1-name').disabled = true
    console.log('TM1Max')
  } else {
    console.log('Add-T1', team1Score)
    team1Score = parseInt(team1Score) + 1
    document.querySelector('.team-1-score').textContent = team1Score
  }
}
// Subract 1 Point from Team 1 Score
const subteam1Score = () => {
  let team1Score = document.querySelector('.team-1-score').textContent
  if (parseInt(team1Score) === 0) {
    console.log('TM1S0')
  } else {
    console.log('Sub-T1', team1Score)
    team1Score = parseInt(team1Score) - 1
    document.querySelector('.team-1-score').textContent = team1Score
  }
}
//* ***************************************************
// Add 1 Point to Team 2 Score
const addteam2Score = () => {
  let team2Score = document.querySelector('.team-2-score').textContent
  if (parseInt(team2Score) === 21) {
    document.querySelector('.team-2-name').textContent = 'YOU WIN!'
    document.querySelector('.team-1-name').textContent = 'YOU LOSE!'
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    console.log('TM2Max')
  } else {
    console.log('Add-T2', team2Score)
    team2Score = parseInt(team2Score) + 1
    document.querySelector('.team-2-score').textContent = team2Score
  }
}
// Subtract 1 Point from Team 2 Score
const subteam2Score = () => {
  let team2Score = document.querySelector('.team-2-score').textContent
  if (parseInt(team2Score) === 0) {
    console.log('TM2S0')
  } else {
    console.log('Sub-T2', team2Score)
    team2Score = parseInt(team2Score) - 1
    document.querySelector('.team-2-score').textContent = team2Score
  }
}
//* ***************************************************
// Update Team 1 Name
const updateTeam1Name = () => {
  const team1Name = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = team1Name
}
// Update Team 2 Name
const updateTeam2Name = () => {
  const team2Name = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = team2Name
}
//* ***************************************************
// Add 1 Inning
const addInning = () => {
  let currentInning = document.querySelector('.current-inning').textContent
  console.log('Add-Inn', currentInning)
  currentInning = parseInt(currentInning) + 1
  document.querySelector('.current-inning').textContent = currentInning
}
// Subtract 1 Inning
const subtractInning = () => {
  let currentInning = document.querySelector('.current-inning').textContent
  console.log('Sub-Inn', currentInning)
  currentInning = parseInt(currentInning) - 1
  document.querySelector('.current-inning').textContent = currentInning
}
//* ***************************************************
// Reset Game
const resetGame = () => {
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('.current-inning').textContent = 0
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  document.querySelector('.team-1-input').value = ''
  document.querySelector('.team-2-input').value = ''
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  console.log('Reset', resetGame)
}
//* ***************************************************
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addteam1Score)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subteam1Score)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addteam2Score)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subteam2Score)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeam1Name)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeam2Name)
document
  .querySelector('.inning-add-1-button')
  .addEventListener('click', addInning)
document
  .querySelector('.inning-subtract-1-button')
  .addEventListener('click', subtractInning)
document.querySelector('.game-reset').addEventListener('click', resetGame)
