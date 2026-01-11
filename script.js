document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to the Pixell River Employee Directory!");
    // Employee and Department data
    const departments = [
        {
            name: "Executive Leadership",
            employees: [
                { firstName: "Mary", lastName: "Redsky" },
                { firstName: "James", lastName: "Daniels" }
            ]
        },
        {
            name: "Information Technology",
            employees: [
                { firstName: "Alex", lastName: "Thompson" },
                { firstName: "Samantha", lastName: "Lee" },
                { firstName: "Khush", lastName: "Patel" }
            ]
        },
        {
            name: "Finance",
            employees: [
                { firstName: "Linda", lastName: "Brown" },
                { firstName: "Michael", lastName: "Wilson" }
            ]
        }
    ];

    const main = document.getElementById("employee-directory");

    // Inject departments and employees
    departments.forEach(department => {
        const section = document.createElement("section");
        section.classList.add("department");

        const heading = document.createElement("h2");
        heading.textContent = department.name;

        const list = document.createElement("ul");

        department.employees.forEach(employee => {
            const listItem = document.createElement("li");
            listItem.textContent = `${employee.firstName} ${employee.lastName || ""}`;
            list.appendChild(listItem);
        });

        section.appendChild(heading);
        section.appendChild(list);
        main.appendChild(section);
    });

    // Footer year
    const year = new Date().getFullYear();
    document.getElementById("copyright")
        .textContent = `© ${year} Pixell River Financial.`;
});
