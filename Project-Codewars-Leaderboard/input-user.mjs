function get_users(){

}

export function displayInputForm() {
    const inputContainer = document.getElementById("input-form"); 
    const userInput = document.createElement("input"); 
    userInput.type = "text";
    const submitButton = document.createElement("button");
    
inputContainer.append(userInput, submitButton);
    
}