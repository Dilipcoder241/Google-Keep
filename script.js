let title = document.getElementById('title');
let textNote = document.getElementById("textNote");
let addbtn = document.getElementById('addbtn');
let notediv = document.getElementsByClassName('notes')[0];

addbtn.addEventListener('click' , update);
let notes = [];
let delarr = [];
let archive = [];
showNote();

function update(){ 

    if (textNote.value===''){
        alert('write someting in note section');
        return;
    }
    notes = JSON.parse(localStorage.getItem('note'));
    if(notes === null){
        notes =[];
    }
    noteObj = {
        title : title.value,
        text : textNote.value
    }
    notes.push(noteObj);
    localStorage.setItem('note', JSON.stringify(notes));
    showNote();
    title.value = '';
    textNote.value = '';
}


function showNote(){
    let str = '';

    notes = localStorage.getItem('note');
    if(notes===null){
        return;
    }
    else {
        notes = JSON.parse(notes)
    }
    for(let i=0;i<notes.length;i++){
         str += `
    <div class="boxnote">
    <div class="head">
    <h1 id="heading">${notes[i]['title'] == ''? 'NoteTitle' : notes[i]['title'] }</h1>
    <p id="notePara">${notes[i]['text']}</p>
    </div>
    <div class="btns">
    <button class="btn btn-outline-dark btn-sm" onclick="edit(${i})"><img class = "editicon" src="editIcon.png" alt="" id="edit"></button>
    <button class="btn btn-outline-info btn-sm" onclick="arc(${i})">Archive</button>
    <button class="btn btn-outline-danger btn-sm" onclick="del(${i})">Delete</button>
    </div>
    </div>
    `;


    }
    notediv.innerHTML = str;
}


function del(index){
    
    notes = JSON.parse(localStorage.getItem('note'));
    delarr = JSON.parse(localStorage.getItem('del')) == null? delarr = [] : delarr = JSON.parse(localStorage.getItem('del'));
    delarr.push(notes[index]);
    notes.splice(index,1);
    localStorage.setItem('note',JSON.stringify(notes));
    showNote();
    localStorage.setItem('del' , JSON.stringify(delarr));
}


function arc(index){
    notes = JSON.parse(localStorage.getItem('note'));
    archive = JSON.parse(localStorage.getItem('arch')) == null? archive =[] : archive = JSON.parse(localStorage.getItem('arch'));
    archive.push(notes[index]);
    notes.splice(index,1);
    localStorage.setItem('note' , JSON.stringify(notes));
    localStorage.setItem('arch' , JSON.stringify(archive));
    showNote();

}


function edit(index){
    notes = JSON.parse(localStorage.getItem('note'));
    title.value = notes[index]['title'];
    textNote.value = notes[index]['text'];
    notes.splice(index,1);
    localStorage.setItem('note' , JSON.stringify(notes));
    showNote();
}