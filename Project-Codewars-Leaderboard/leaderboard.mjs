import * as userData from "./components/get-users-input.mjs";
import * as display from "./components/display.mjs";

let userArray = JSON.parse(sessionStorage.getItem("users")) ?? []; //RETRIEVE USERS FROM INDEX

//BACK-BUTTON AND ADD MORE USERS BUTTON (LEADERBOARD PAGE)
display.addMoreButton();

//CATEGORY NAVIGATION
display.categoryDisplay();
display.tableDisplay();
display.modalAddingUser();

//BUTTON FOR ADDING MORE USERS (EVENTLISTENER)
const addUserButton = document.getElementById("add-another_user");
addUserButton.addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("myModal"));
  modal.show();
});

//FUNCTION FOR SUBMIT BUTTON FOR ADD MORE USERS
const addMoreUser = document.getElementById("submit-more-users");
addMoreUser.addEventListener("click", () => {
  const newUsers = userData.gettingInput(
    "more-users",
    userArray,
    "",
    [],
    "more-user-container",
  );

  if (newUsers.length > 0) {
    sessionStorage.setItem("users", JSON.stringify(userArray));
    console.log("[Local] Added users:", newUsers);
  }
});
