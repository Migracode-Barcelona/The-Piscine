
import * as getUsersInput from "./components/get-users-input.mjs"



function setup() {
  getUsersInput.displayInputForm();
  buttonUser();
}

//BUTTON FOR ADDING USER IN MAIN HTML
function buttonUser(){
  const addUserButton = document.getElementById("adding-user");
  addUserButton.addEventListener("click", () => {
   getUsersInput.displayUser();

    if (getUsersInput.getUser.length > 0) {
      const submitButton = document.getElementById("submit-button");
      submitButton.hidden = false
    } else return;

});
}

window.onload = setup;






