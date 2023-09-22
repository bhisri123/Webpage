function filterGrid() {
    var input, filter, grid, items, item, i, txtValue;
    input = document.getElementById('filterInput');
    filter = input.value.toUpperCase();
    grid = document.querySelector('.grid-container');
    items = grid.querySelectorAll('.grid-item');

    for (i = 0; i < items.length; i++) {
        item = items[i];
        txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}
function toggleFilterInput() {
    var filterInput = document.getElementById('filterInput');
    filterInput.classList.toggle('hidden');
}
