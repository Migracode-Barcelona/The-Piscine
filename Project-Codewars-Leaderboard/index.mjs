import * as getUsersInput from "./components/get-users-input.mjs";

//DISPLAYING FOR MAIN PAGE
function displayInputForm() {
  const inputContainer = document.getElementById("input-form"); //div

  const addUserButton = document.createElement("button"); //adduser button
  addUserButton.id = "adding-user";
  addUserButton.textContent = "Add User";

  const showUsers = document.createElement("p"); //p (paragraph for user)
  showUsers.id = "showing-users";

  const userContainer = document.createElement("div"); //div p container
  userContainer.id = "users-container";

  const submitButton = document.createElement("a"); //submit Button
  submitButton.id = "submit-button";
  submitButton.textContent = "Submit Users";
  submitButton.hidden = true;

  inputContainer.appendChild(addUserButton);
  userContainer.append(showUsers, submitButton);
  const body = document.querySelector("body");
  body.appendChild(userContainer);
}

displayInputForm();

//BUTTON FOR ADDING USER IN MAIN HTML
const addUserButton = document.getElementById("adding-user");
addUserButton.addEventListener("click", () => {
  getUsersInput.gettingInput("user-input", getUsersInput.getUser);
  getUsersInput.displayUser();

  if (getUsersInput.getUser.length > 0) {
    const submitButton = document.getElementById("submit-button");
    submitButton.hidden = false;
  } else return;
});

//EVENT LISTENER FOR SUBMIT BUTTON
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  submitButton.href = "leaderboard.html";
});
