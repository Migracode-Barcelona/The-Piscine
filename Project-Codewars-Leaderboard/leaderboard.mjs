//DISPLAYING FOR LEADERBOARD PAGE
//BUTTONS

import * as userData from "./components/get-users-input.mjs"

let tableData = [];

function setup(){
    leaderboardButtons();
    addNavCategory();
    addTable();
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

//Displaying the table
function addTable() {

    const table = document.createElement("table"); 
    table.id = "table-leaderboards";
    const column = document.createElement("tr");
    const tableHead0 = document.createElement("th");
    tableHead0.textContent = "POSITION";
    const tableHead1 = document.createElement("th");
    tableHead1.textContent = "USER";
    const tableHead2 = document.createElement("th");
    tableHead2.textContent = "CLAN";
    const tableHead3 = document.createElement("th");
    tableHead3.textContent = "HONOR";
    const tableContainer = document.getElementById("table-container");

    column.append(tableHead0, tableHead1, tableHead2, tableHead3); 
    table.appendChild(column);
    tableContainer.appendChild(table);

    for(let i = 0; i < userData.getUser.length; i++) {

    }
}



window.onload = setup;