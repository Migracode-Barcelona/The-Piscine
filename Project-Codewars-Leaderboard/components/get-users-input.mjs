export let getUser = [];

const userData = [];

//GETTING THE USERS INPUT
export function gettingInput(idName, storage) {
  const inputElement = document.getElementById(idName); //input
  storage.push(" " + inputElement.value);
}

//THIS FUNCTION IS GETTING THE USERS FROM INPUT AND PUSHING TO ARRAY AS WELL AS DISPLAY IT
export function displayUser() {
  //displaying
  const userContainer = document.createElement("div"); //div p container
  userContainer.id = "users-container";
  const showUsers = document.getElementById("showing-users"); //p

  showUsers.textContent = getUser;
}

// async function fetchUsers(users) {
//   let endpoint = "https://www.codewars.com/api/v1/users/";
//   const results = [];

//   for (let i = 0; i < getUser.length; i++) {
//     const userDatas = users.map(async (username) => {
//       const res = await fetch(`${endpoint}${username}`);
//       if (!res.ok) throw new Error(`Failed to receive data of ${username}`);
//       return res.json();
//     });

//     const allData = await Promise.all(userDatas);
//     results.push(...allData);
//   }
//   return results;
// }
