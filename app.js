/* AARTI RATHI 
Topic: Note Making App
My website - https://shinchancode.github.io/3d-react-portfolio/ */


console.log("Welcome to Note App");
showNotes();
// if user adds a note, add it to the local storage

let addBtn = document.getElementById('addbtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});


// function to show elements from local Storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (e, index) {
        html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${e}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else
    {
        notesElm.innerHTML=`Nothing to show ! \n Use Add notes Section :)`;
    }
}



// Function to delete Node
function deleteNote(index)
{
    console.log(`I m deleting ${index}`);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//function for search

let search=document.getElementById("searchTxt");
search.addEventListener("input",function (){
    let inputVal=search.value.toLowercase;
    let notecards=document.getElementsByClassName("notecard")
    Array.from(notecards).forEach(function(e){
        let cardText=e.getElementsByTagName("p")[0].innerText;

        if(cardText.includes(inputVal))
        {
            e.style.display="block";
        }
        else
        {
            e.style.display="none";
        }
        
    })
    
});

/* Further features
1| Add title
2| Marking Node as important
3| Separate notes by user
4| Sink with server and host

*/


