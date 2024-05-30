document.addEventListener('DOMContentLoaded', () => {
    const profilesContainer = document.getElementById('profiles');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const profile = document.createElement('div');
                profile.className = 'profile';

                profile.innerHTML = `
                    <img src="https://robohash.org/${user.id}?size=200x200" alt="${user.name}">
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Address:</strong> ${user.address.suite}, ${user.address.street}, ${user.address.city}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                profilesContainer.appendChild(profile);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
