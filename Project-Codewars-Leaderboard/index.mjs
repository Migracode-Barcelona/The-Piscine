
import * as getUsersInput from "./components/get-users-input.mjs"

function setup() {
  displayInputForm();
  buttonUser();
}

//DISPLAYING FOR MAIN PAGE
function displayInputForm() {
    const inputContainer = document.getElementById("input-form"); //div 

    const userInput = document.createElement("input");  //input text
    userInput.type = "text";
    userInput.id = "user-input";

    const addUserButton = document.createElement("button"); //adduser button
    addUserButton.id = "adding-user"
    addUserButton.textContent = "Add User"

    const showUsers = document.createElement("p"); //p (paragraph for user)
    showUsers.id = "showing-users"; 
    // showUsers.innerHTML = "";
    // showUsers.textContent = "Hello World";
    // showUsers.hidden = true; 

    const userContainer = document.createElement("div"); //div p container
    userContainer.id = "users-container";
    
    inputContainer.append(userInput, addUserButton);   

    const submitButton = document.createElement("button"); //submit Button 
    submitButton.id = "submit-button";
    submitButton.textContent = "Submit Users";
    submitButton.hidden = true;

    userContainer.append(showUsers, submitButton);
    const body = document.querySelector("body"); 
    body.appendChild(userContainer);
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






