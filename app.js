var homeButton = document.getElementById("home-button");
var aboutUsButton = document.getElementById("about-us-button");
var addNoteButton = document.getElementById("add-note-button");
var savedNotesList = document.getElementById("saved-notes");
var deleteButton = document.getElementsByClassName("delete-btn");
var editButton = document.getElementsByClassName("edit-btn");
var editStatus = false;
var noteNumber = 0;

//for home button in nav bar
homeButton.addEventListener('click', () => {
    if (!(homeButton.classList.contains("active"))) {
        var current = document.getElementsByClassName("active");
        //console.log(current);
        current[0].classList.remove("active");
        homeButton.classList.add("active");
    }
})

//for about us button in nav bar
aboutUsButton.addEventListener('click', () => {
    if(!(aboutUsButton.classList.contains("active"))) {
        var current = document.getElementsByClassName("active");
        //console.log(current);
        current[0].classList.remove("active");
        aboutUsButton.classList.add("active");
    }
})

//for adding a new note  
addNoteButton.addEventListener('click', () => {
    //console.log("Creating new note");

    //take note typed by user
    var newNoteTitle = document.getElementById('note-title').value;
    var newNoteContent = document.getElementById('note-content').value;
    if (newNoteTitle === "" || newNoteContent === "null") {
        alert("Please fill all entries");
    }
    else {
        console.log(newNoteContent);
        var title = document.createElement('h2');
        var noteContent = document.createElement('p');
        title.appendChild(document.createTextNode(newNoteTitle))
        noteContent.appendChild(document.createTextNode(newNoteContent));

        //create edit and delete buttons
        var buttons = document.createElement('div');
        var editBtn = document.createElement('a');
        var edit = document.createElement('i');
        var deleteBtn = document.createElement('a');
        var del = document.createElement('i');
        edit.className = 'far fa-edit';
        del.className = 'far fa-trash-alt';
        editBtn.className = 'edit-btn';
        editBtn.href = '#';
        deleteBtn.className = 'delete-btn';
        deleteBtn.href = '#';
        editBtn.appendChild(edit);
        deleteBtn.appendChild(del);
        buttons.className = 'ml-auto';
        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        //create card
        var card = document.createElement('div');
        card.className = 'card container-fluid';
        card.style = 'justify-content: center;';
        card.id = 'note-card';
        card.appendChild(title);
        card.appendChild(noteContent);
        card.appendChild(buttons);
        //console.log(card);

        //create list item
        var notesLi = document.createElement('li');
        notesLi.className = 'col-xl-4 note';
        notesLi.appendChild(card);
        console.log(notesLi);

        //save note
        savedNotesList.appendChild(notesLi);

        //event listener for delete button
        deleteBtn.addEventListener('click', () => {
            if(confirm("Are you sure you wanna delete this note?"))
                savedNotesList.removeChild(notesLi);
        })

    //event listener for edit button
        editBtn.addEventListener('click', () => {
            document.getElementById('note-title').value = newNoteTitle;
            document.getElementById('note-content').value = newNoteContent;
            savedNotesList.removeChild(notesLi);
        })

        //clear the input areas once note is added
        document.getElementById('note-title').value = "";
        document.getElementById('note-content').value = "";
    }
})