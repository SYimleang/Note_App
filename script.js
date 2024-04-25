const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

// Fetch and display data from local storage
const displayNotes = () => {
    try {
        const savedData = localStorage.getItem("notesData");
        if (savedData !== null) {
            notesContainer.innerHTML = savedData;
        }
    } catch (error) {
        console.log(error);
    }
};

displayNotes();

// Update notes data to local storage
const updateStorage = () => {
    try {
        localStorage.setItem("notesData", notesContainer.innerHTML);
    } catch (error) {
        console.error(error);
    }
};

// Handle "Create Notes" button and display input box
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    const deleteImg = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    deleteImg.src = "img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(deleteImg);
    updateStorage();
})

// Delete note function
notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
    
})

