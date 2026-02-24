
let getUser = [];
let user = "";

function setup() {
  displayInputForm();
  buttonUser();
}

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


function displayUser() {
    const inputElement = document.getElementById("user-input"); //input
    getUser.push(" " + (inputElement.value));
    // console.log(getUser);

    //displaying  
    const userContainer = document.createElement("div"); //div p container
    userContainer.id = "users-container";
    const showUsers = document.getElementById("showing-users"); //p 
    
    // for (let element of getUser) {
    //     user += `${element} `;
    //     // console.log("hello");
    //     return user;
    // }
    // console.log(user);

    showUsers.textContent = getUser;
    // showUsers.textContent = user;
    // render();
    
}


function buttonUser(){
  const addUserButton = document.getElementById("adding-user");
  addUserButton.addEventListener("click", () => {
    displayUser();
    // console.log(getUser);

    if (getUser.length > 0) {
      const submitButton = document.getElementById("submit-button");
      submitButton.hidden = false
    } else return;

});
}


window.onload = setup;






