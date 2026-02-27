import * as userData from "./components/get-users-input.mjs";

let tableData = [];
let moreUser = [];

function setup() {
  leaderboardButtons();
  addNavCategory();
  addTable();
  backButtonForwarding();
  addUserLeaderboard();
  addMoreUsers();
}

function leaderboardButtons() {
  const buttonsContainer = document.getElementById("button-container");
  const backButton = document.createElement("a");
  backButton.id = "back-button";
  backButton.textContent = "Back to Arena";
  const addAnotherUserButton = document.createElement("button");
  addAnotherUserButton.type = "button";
  addAnotherUserButton.classList = "btn btn-primary";
  //   addAnotherUserButton.setAttribute("data-bs-toggle", "modal");
  //   addAnotherUserButton.setAttribute("data-bs-target", "#myModal");
  addAnotherUserButton.id = "add-another_user";
  addAnotherUserButton.textContent = "Add Another User";

  buttonsContainer.append(backButton, addAnotherUserButton);
}

function addNavCategory() {
  const overall = document.createElement("button");
  overall.id = "overall";
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
  const categoryContainer = document.getElementById("category-nav");

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

  for (let i = 0; i < userData.getUser.length; i++) {}
}

function backButtonForwarding() {
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
    backButton.href = "index.html";
  });
}

//MODAL  FOR ADD USER
function modalAddUser() {
  //   if (document.getElementById("myModal")) {
  //     document.getElementById("myModal").remove();
  //   }

  const modalContainer = document.createElement("div");
  modalContainer.classList = "modal fade";
  modalContainer.id = "myModal";
  modalContainer.tabIndex = -1;
  modalContainer.innerHTML = `<div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title" id="myModalLabel">ADD MORE USERS</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
        <p>Type usernames</p>
        <input type="text" placeholder="user1, user2, user3" id="more-users"></input>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="submit-more-users">Submit Users</button>
        </div>

      </div>
    </div>`;

  document.body.appendChild(modalContainer);

  const modal = new bootstrap.Modal(document.getElementById("myModal"));
  modal.show();
}

function addUserLeaderboard() {
  const addUserButton = document.getElementById("add-another_user");
  addUserButton.addEventListener("click", () => {
    modalAddUser();
  });
}

//FUNCTION FOR SUBMIT BUTTON FOR ADD MORE USERS
function addMoreUsers() {
  const addUser = document.getElementById("submit-more-users");
  addUser.addEventListener("click", () => {
    userData.gettingInput("more-users", moreUser);
    // console.log(moreUser);
  });
}

//CONTINUE
//GETTING USERS FROM SUBMIT BUTTON IN ADDING MORE USERS AND PUSHING THEM INTO THE ARRAY

window.onload = setup;
