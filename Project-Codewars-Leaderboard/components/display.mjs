export function displayInputForm() {
  const inputContainer = document.getElementById("input-form"); //div

  const addUserButton = document.createElement("button"); //adduser button
  addUserButton.id = "adding-user";
  addUserButton.type = "button";
  addUserButton.textContent = "Add User";
  addUserButton.setAttribute("aria-label", "Add usernames from the input field");

  const showUsers = document.createElement("p"); //p (paragraph for user)
  showUsers.id = "showing-users";
  showUsers.setAttribute("aria-live", "polite");

  const userContainer = document.createElement("div"); //div p container
  userContainer.id = "users-container";

  const submitButton = document.createElement("button"); //submit Button
  submitButton.id = "submit-button";
  submitButton.type = "button";
  submitButton.textContent = "Submit Users";
  submitButton.hidden = true;

  inputContainer.appendChild(addUserButton);
  userContainer.append(showUsers, submitButton);
  const body = document.querySelector("body");
  body.appendChild(userContainer);
}

export function categoryDisplay() {
  const overall = document.createElement("button");
  overall.id = "overall";
  overall.type = "button";
  overall.textContent = "Overall";

  const completedKatas = document.createElement("button");
  completedKatas.id = "completed-katas";
  completedKatas.type = "button";
  completedKatas.textContent = "Completed Katas";

  const authoredKatas = document.createElement("button");
  authoredKatas.id = "authored-katas";
  authoredKatas.type = "button";
  authoredKatas.textContent = "Authored Katas";

  const ranks = document.createElement("button");
  ranks.id = "ranks";
  ranks.type = "button";
  ranks.textContent = "Ranks";

  const categoryContainer = document.getElementById("category-nav");
  categoryContainer.append(overall, completedKatas, authoredKatas, ranks);
}

export function tableDisplay() {
  const table = document.createElement("table");
  table.id = "table-leaderboards";
  table.setAttribute("aria-label", "Codewars leaderboard table");

  const tableHead = document.createElement("thead");
  const column = document.createElement("tr");
  const tableBody = document.createElement("tbody");

  const tableHead0 = document.createElement("th");
  tableHead0.scope = "col";
  tableHead0.textContent = "POSITION";

  const tableHead1 = document.createElement("th");
  tableHead1.scope = "col";
  tableHead1.textContent = "USER";

  const tableHead2 = document.createElement("th");
  tableHead2.scope = "col";
  tableHead2.textContent = "CLAN";

  const tableHead3 = document.createElement("th");
  tableHead3.scope = "col";
  tableHead3.textContent = "HONOR";

  const tableContainer = document.getElementById("table-container");

  column.append(tableHead0, tableHead1, tableHead2, tableHead3);
  tableHead.appendChild(column);
  table.append(tableHead, tableBody);
  tableContainer.appendChild(table);
}

//

export function modalAddingUser() {
  const modalContainer = document.createElement("div");
  modalContainer.classList = "modal fade";
  modalContainer.id = "myModal";
  modalContainer.tabIndex = -1;
  modalContainer.setAttribute("aria-labelledby", "myModalLabel");
  modalContainer.setAttribute("aria-hidden", "true");
  modalContainer.innerHTML = `<div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title" id="myModalLabel">ADD MORE USERS</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
        <label for="more-users">Type usernames</label>
        <input type="text" placeholder="user1, user2, user3" id="more-users" />
        <p id="more-user-container"></p>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="submit-more-users">Submit Users</button>
        </div>

      </div>
    </div>`;
  document.body.appendChild(modalContainer);
  const modal = new bootstrap.Modal(document.getElementById("myModal"));
  modal.hide();
}

export function addMoreButton() {
  const buttonsContainer = document.getElementById("button-container");

  const backButton = document.createElement("a");
  backButton.id = "back-button";
  backButton.href = "index.html";
  backButton.textContent = "Back to Arena";
  backButton.setAttribute("aria-label", "Back to user input page");

  const addAnotherUserButton = document.createElement("button");
  addAnotherUserButton.type = "button";
  addAnotherUserButton.classList = "btn btn-primary";
  addAnotherUserButton.id = "add-another_user";
  addAnotherUserButton.textContent = "Add Another User";

  buttonsContainer.append(backButton, addAnotherUserButton);
}
