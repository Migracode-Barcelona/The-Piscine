export let getUser = [];

//THIS FUNCTION IS GETTING THE USERS FROM INPUT AND PUSHING TO ARRAY AS WELL AS DISPLAY IT
export function displayUser() {
    const inputElement = document.getElementById("user-input"); //input
    getUser.push(" " + (inputElement.value));
    // console.log(getUser);

    //displaying  
    const userContainer = document.createElement("div"); //div p container
    userContainer.id = "users-container";
    const showUsers = document.getElementById("showing-users"); //p 

    showUsers.textContent = getUser;
    
}