import { debounce } from './utils.js';

const userListEl = document.getElementById("user-list");
const userDetailsEl = document.getElementById("user-details");
const searchInput = document.getElementById("search-input");
const baseUrl = "https://api.github.com";

let allUsers = [];

// Debounce search handler
const handleSearch = debounce(() => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = allUsers.filter(user =>
    user.login.toLowerCase().includes(query)
  );
  displayUsers(filtered);
}, 300);

// Bind search input
searchInput.addEventListener("input", handleSearch);

// Fetch and store users
async function fetchUsers() {
  try {
    const response = await fetch(`${baseUrl}/users`);
    const users = await response.json();

    allUsers = users;
    displayUsers(allUsers);
  } catch (error) {
    userListEl.textContent = "Error loading users.";
    console.error("Error fetching user list:", error);
  }
}

// Display user cards
function displayUsers(users) {
  userListEl.innerHTML = "";
  if (users.length === 0) {
    userListEl.textContent = "No users found.";
    return;
  }

  users.forEach(user => {
    const userDiv = document.createElement("div");
    userDiv.className = "user-item";
    userDiv.innerHTML = `
      <img src="${user.avatar_url}" alt="${user.login}">
      <span>${user.login}</span>
    `;
    userDiv.addEventListener("click", () => fetchUserDetails(user.id));
    userListEl.appendChild(userDiv);
  });
}

// Fetch and show user details
async function fetchUserDetails(id) {
  try {
    const response = await fetch(`${baseUrl}/user/${id}`);
    const user = await response.json();

    userDetailsEl.innerHTML = `
      <div class="user-details-header">
        <h3>${user.name || user.login}</h3>
        <span class="close-btn" id="close-details">&times;</span>
      </div>
      <p><strong>Location:</strong> ${user.location || "N/A"}</p>
      <p><strong>Bio:</strong> ${user.bio || "N/A"}</p>
      <button><a href="${user.html_url}" target="_blank">GitHub Profile</a></button>
    `;
    //close button
    document.getElementById("close-details").addEventListener("click", () => {
      userDetailsEl.innerHTML = `Click on the user to get user details`; // Hides details
    });
  } catch (error) {
    userDetailsEl.textContent = "Error loading user details.";
    console.error("Error fetching user details:", error);
  }
}

// Initialize
fetchUsers();
