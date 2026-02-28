import * as userData from "./components/get-users-input.mjs";
import * as display from "./components/display.mjs";

let tableData = [];
let moreUsers = "";
let userArray = JSON.parse(sessionStorage.getItem("users")); //RETRIEVE USERS FROM INDEX

//BACK-BUTTON AND ADD MORE USERS BUTTON (LEADERBOARD PAGE)
display.addMoreButton();
//

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

//BACK-BUTTON(EVENTLISTENER)
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", () => {
  backButton.href = "index.html";
});
//

//FUNCTION FOR SUBMIT BUTTON FOR ADD MORE USERS
const addMoreUser = document.getElementById("submit-more-users");
addMoreUser.addEventListener("click", () => {
  userData.gettingInput("more-users", userArray); //pushing
  console.log(userArray);
});

//CONTINUE
//GETTING USERS FROM SUBMIT BUTTON IN ADDING MORE USERS AND PUSHING THEM INTO THE ARRAY
