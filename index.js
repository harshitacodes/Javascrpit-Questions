// Data
const items = [
    { id: 1, name: "Item 1", category: "Category A", color: "red" },
    { id: 2, name: "Item 2", category: "Category B", color: "blue" },
    { id: 3, name: "Item 3", category: "Category A", color: "green" },
    { id: 4, name: "Item 4", category: "Category C", color: "red" }
];

// Get elements
const tableBody = document.getElementById('tableBody');
const search = document.getElementById('search');

// Show items in table
function showItems(items) {
    tableBody.innerHTML = '';
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
        `;

        // Toggle background color on click
        row.onclick = () => {
            row.style.backgroundColor =
                row.style.backgroundColor ? '' : item.color;
        };

        tableBody.appendChild(row);
    });
}

// Search functionality
search.onkeyup = () => {
    const searchText = search.value.toLowerCase();
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText)
    );
    showItems(filteredItems);
};

// Initial display
showItems(items);