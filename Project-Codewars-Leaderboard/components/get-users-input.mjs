export let getUser = [];
export let tempInput = "";
export let inserteduser = [];

// const userData = [];

//GETTING THE USERS INPUT
//idName = inputForm
//storage = MainStorage
//tempStorage = Input Value temporary Storage
//inserted = array Storage that will be pushed to main storage
//display = where to display the value
export function gettingInput(idName, storage, tempStorage, inserted, display) {
  const inputElement = document.getElementById(idName); //input
  tempStorage = inputElement.value.trim();

  if (tempStorage.includes(" ")) {
    inserted = tempStorage.split(" ");
    storage.push(...inserted);
    displayUser(getUser, display);
    
  } else {
    storage.push(tempStorage);
    displayUser(getUser, display);
  }
}

// module.exports = gettingInput;

//THIS FUNCTION IS GETTING THE USERS FROM INPUT AND PUSHING TO ARRAY AS WELL AS DISPLAY IT
export function displayUser(array, displayContainer) {
  const showUsers = document.getElementById(displayContainer); //p users container
  showUsers.textContent = array;
}

export async function fetchUsers(users) {
  let endpoint = "https://www.codewars.com/api/v1/users/";
  const results = [];

  for (let i = 0; i < getUser.length; i++) {
    const userDatas = users.map(async (username) => {
      const res = await fetch(`${endpoint}${username}`);
      if (!res.ok) throw new Error(`Failed to receive data of ${username}`);
      return res.json();
    });

    const allData = await Promise.all(userDatas);
    results.push(...allData);
  }
  console.log(results);
  return results;
}
