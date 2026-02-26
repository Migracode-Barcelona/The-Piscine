//DISPLAYING FOR LEADERBOARD PAGE
//BUTTONS

function setup(){
    leaderboardButtons();
    addNavCategory();
}

function leaderboardButtons() {
  const buttonsContainer = document.getElementById("button-container");
  const backButton = document.createElement("button");
  backButton.id = "back-button";
  backButton.textContent = "Back to Arena"
  const addAnotherUserButton = document.createElement("button");
  addAnotherUserButton.id = "add-another_user"; 
  addAnotherUserButton.textContent = "Add Another User"

  buttonsContainer.append(backButton, addAnotherUserButton);

}

function addNavCategory() {
    const overall = document.createElement("button");
    overall.id = "overall"
    overall.textContent = "Overall";
    const completedKatas = document.createElement("button");
    completedKatas.id = "completed-katas";
    completedKatas.textContent = "Completed Katas";
    const authoredKatas = document.createElement("button");
    authoredKatas.id = "authored-katas";
    authoredKatas.textContent = "Authored Katas";
    const ranks = document.createElement("button");
    ranks.id = "ranks";
    ranks.textContent = "Ranks";
    const categoryContainer = document.getElementById("category-nav")

    categoryContainer.append(overall, completedKatas, authoredKatas, ranks);
}



window.onload = setup;