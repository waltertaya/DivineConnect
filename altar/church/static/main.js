// script.js
const rolesContainer = document.getElementById('roles-container');

// Sample data for roles
const roles = [
  { member: 'John Doe', role: 'Developer' },
  { member: 'Jane Smith', role: 'Designer' },
  { member: 'Mike Johnson', role: 'Project Manager' },
  // Add more roles here
];

// Function to generate role cards
function generateRoleCards() {
  roles.forEach((role) => {
    const roleCard = document.createElement('div');
    roleCard.classList.add('role-card');

    const memberName = document.createElement('h2');
    memberName.textContent = role.member;

    const roleName = document.createElement('p');
    roleName.textContent = role.role;

    roleCard.appendChild(memberName);
    roleCard.appendChild(roleName);

    rolesContainer.appendChild(roleCard);
  });
}

// Call the function to generate role cards
generateRoleCards();
