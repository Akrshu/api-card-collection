const container = document.getElementById("cardContainer");

// Fetch data from API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
