import * as getUsersInput from "./components/get-users-input.mjs";
import * as display from "./components/display.mjs";


//DISPLAYING FOR MAIN PAGE

display.displayInputForm();

//BUTTON FOR ADDING USER IN MAIN HTML
const addUserButton = document.getElementById("adding-user");
addUserButton.addEventListener("click", () => {
  getUsersInput.gettingInput(
    "user-input",
    getUsersInput.getUser,
    getUsersInput.tempInput,
    getUsersInput.inserteduser,
    "showing-users",
  );

  if (getUsersInput.getUser.length > 0) {
    const submitButton = document.getElementById("submit-button");
    submitButton.hidden = false;
  } else return;
});

//EVENT LISTENER FOR SUBMIT BUTTON
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  sessionStorage.setItem("users", JSON.stringify(getUsersInput.getUser)); // FETCHING USERS FROM INDEX.HTML
  submitButton.href = "leaderboard.html"; //FORWARDING
  getUsersInput.fetchUsers(getUsersInput.getUser);
  // getUsersInput.fetchUsers(getUsersInput.getUser);
});
