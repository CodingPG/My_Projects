const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to show notes from local storage
function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    notesContainer.innerHTML = savedNotes ? savedNotes : ""; // Handle empty storage gracefully
}

// Function to update local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Call showNotes to load notes on page refresh
showNotes();

// Create a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";

    // Append new note and delete button
    notesContainer.appendChild(inputBox).appendChild(img);

    // Update storage when new note is added
    updateStorage();
});

// Event listener for delete and edit operations
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // Update storage after deleting a note
    }
});

// Event listener for editing notes
notesContainer.addEventListener("keyup", function (e) {
    if (e.target.className === "input-box") {
        updateStorage(); // Update storage on note edit
    }
});
