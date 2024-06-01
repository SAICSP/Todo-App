let tableBody = document.querySelector("#taskTable tbody");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    if (inp.value.trim() !== "") {
        // Adding the new task to the table
        let taskText = inp.value.toUpperCase();
        let row = tableBody.insertRow(); // Insert a new row
        
        let table = document.querySelector("#taskTable");
        table.style.backgroundColor = "#333"; // Set a dark background color
        table.style.color = "white"; // Set white text color



        let cell1 = row.insertCell(0); // Insert cell for task
        cell1.innerText = taskText;
        
        let cell2 = row.insertCell(1); // Insert cell for action button
        let delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        delBtn.classList.add("delete", "btn", "btn-danger");
        cell2.appendChild(delBtn);
        
        inp.value = ""; // Clear input after adding task
    }
});

// Event delegation for delete action
tableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        row.remove();
    }
});
