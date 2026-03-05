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
  const inputElement = document.getElementById(idName);
  if (!inputElement) return [];

  tempStorage = inputElement.value.trim();
  if (!tempStorage) return [];

  inserted = tempStorage
    .split(/[,\s]+/)
    .map((username) => username.trim())
    .filter(Boolean);

  if (inserted.length === 0) return [];

  const newUsers = inserted.filter((username) => !storage.includes(username));
  storage.push(...newUsers);
  displayUser(storage, display);
  inputElement.value = "";

  return newUsers;
}

// module.exports = gettingInput;

//THIS FUNCTION IS GETTING THE USERS FROM INPUT AND PUSHING TO ARRAY AS WELL AS DISPLAY IT
export function displayUser(array, displayContainer) {
  const showUsers = document.getElementById(displayContainer); //p users container
  if (!showUsers) return;
  showUsers.textContent = array.join(", ");
}

export async function fetchUsers(users) {
  const endpoint = "https://www.codewars.com/api/v1/users/";
  const usernames = [...new Set(users.map((user) => user.trim()).filter(Boolean))];

  if (usernames.length === 0) {
    console.warn("[API] No usernames to fetch.");
    return [];
  }

  const requests = usernames.map(async (username) => {
    try {
      const res = await fetch(`${endpoint}${username}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const userData = await res.json();
      console.log(`[API] Fetched ${username}:`, userData);
      return userData;
    } catch (error) {
      console.error(`[API] Failed to fetch ${username}:`, error);
      return null;
    }
  });

  const results = (await Promise.all(requests)).filter(Boolean);
  console.log(`[API] Fetch complete: ${results.length}/${usernames.length} users fetched.`);
  return results;
}
