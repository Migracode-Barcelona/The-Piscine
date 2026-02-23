let data = [{
    getUser: []
}]


export function displayInputForm() {
    const inputContainer = document.getElementById("input-form"); 
    const userInput = document.createElement("input"); 
    userInput.type = "text";
    userInput.id = "user-input";
    const addUserButton = document.createElement("button");
    addUserButton.id = "submit-button"
    addUserButton.textContent = "Add User"
    
inputContainer.append(userInput, submitButton);
    
}

// export function getUsername() {
//     const inputElement = document.getElementById("user-input");
//     getUser.push(inputElement.value); 
    
// }

//EventListener For userInpu