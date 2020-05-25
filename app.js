var homeButton = document.getElementById("home-button");
var aboutUsButton = document.getElementById("about-us-button");
var addNoteButton = document.getElementById("add-note-button");
var savedNotesList = document.getElementById("saved-notes");
var dropdownButton = document.getElementsByClassName("dropdown");
var dropdownOptions = document.getElementsByClassName("dropdown-options");

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
    var newNoteTitle = document.getElementById('note-title').value
    var newNoteContent = document.getElementById('note-content').value;
    console.log(newNoteContent);
    var title = document.createElement('h2');
    var noteContent = document.createElement('p');
    title.appendChild(document.createTextNode(newNoteTitle))
    noteContent.appendChild(document.createTextNode(newNoteContent));

    //create card
    var card = document.createElement('div');
    card.className = 'card container-fluid';
    card.style = 'justify-content: center;';
    card.id = 'note-card';
    card.appendChild(title);
    card.appendChild(noteContent);
    //console.log(card);

    //create drop down button
    var editBtn = document.createElement('a');
    var deleteBtn = document.createElement('a');
    editBtn.href = "#";
    deleteBtn.href = "#";
    var dropOptions = document.createElement('div');
    dropOptions.className = 'dropdown-options';
    dropOptions.appendChild(editBtn);
    dropOptions.appendChild(deleteBtn);
    var dropBtn = document.createElement('button');
    dropBtn.appendChild(document.createTextNode('&equiv;'));
    dropBtn.appendChild(dropOptions);
    var dropdown = document.createElement('div');
    dropdown.className = "dropdown ml-auto";
    dropdown.appendChild(dropBtn);

    //create list item
    var notesLi = document.createElement('li');
    notesLi.className = 'col-xl-4 note';
    notesLi.appendChild(card);
    notesLi.appendChild(dropdown);
    console.log(notesLi);

    //save note
    savedNotesList.appendChild(notesLi);
})

//for dropdown button of each card