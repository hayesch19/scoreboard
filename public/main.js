const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
document.addEventListener('DOMContentLoaded', main)

// Add 1 Point to Team 1 Score
const addteam1Score = () => {
  let team1Score = document.querySelector('.team-1-score').textContent
  console.log('Add-T1', team1Score)
  team1Score = parseInt(team1Score) + 1
  document.querySelector('.team-1-score').textContent = team1Score
}
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addteam1Score)

// Subract 1 Point from Team 1 Score
const subteam1Score = () => {
  let team1Score = document.querySelector('.team-1-score').textContent
  console.log('Sub-T1', team1Score)
  team1Score = parseInt(team1Score) - 1
  document.querySelector('.team-1-score').textContent = team1Score
}
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subteam1Score)

//* ***************************************************
// Add 1 Point to Team 2 Score
const addteam2Score = () => {
  let team2Score = document.querySelector('.team-2-score').textContent
  console.log('Add-T2', team2Score)
  team2Score = parseInt(team2Score) + 1
  document.querySelector('.team-2-score').textContent = team2Score
}
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addteam2Score)

// Subtract 1 Point from Team 2 Score
const subteam2Score = () => {
  let team2Score = document.querySelector('.team-2-score').textContent
  console.log('Sub-T2', team2Score)
  team2Score = parseInt(team2Score) - 1
  document.querySelector('.team-2-score').textContent = team2Score
}
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subteam2Score)

//* ***************************************************
// Update Team 1 Name
const updateTeam1Name = () => {
  const team1Name = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = team1Name
}
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeam1Name)

// Update Team 2 Name
const updateTeam2Name = () => {
  const team2Name = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = team2Name
}
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeam2Name)
