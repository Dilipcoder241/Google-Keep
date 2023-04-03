archcontainer = document.getElementById('archcontainer');
archive = JSON.parse(localStorage.getItem('arch'));


archshow();

function archshow(){
    let str = '';
    for(let i=0;i<archive.length; i++){
        str += `
        <div class="boxnote">
         <div class="head">
         <h1 id="heading">${archive[i]['title']}</h1>
         <p id="notePara">${archive[i]['text']}</p>
         </div>
         <div class="btns">
         <button class="btn btn-outline-success btn-sm" onclick="restore(${i})">Restore</button>
         <button class="btn btn-outline-danger btn-sm" onclick="delper(${i})">Delete Permanently</button>
         </div>
         </div>
        `;

        archcontainer.innerHTML = str;
    }
}

function restore(index){
    archive = JSON.parse(localStorage.getItem('arch'));
    notes = JSON.parse(localStorage.getItem('note'));
    notes.push(archive[index]);
    archive.splice(index,1);
    localStorage.setItem('note' , JSON.stringify(notes));
    localStorage.setItem('arch' , JSON.stringify(archive));
    archshow();
}


function delper(index){
    archive = JSON.parse(localStorage.getItem('arch'));
    let reply = confirm("Are you sure that you want to delete it permanently");
    if (reply == true){
        archive.splice(index,1);
        archshow();
    }
    delarr = localStorage.setItem('arch' , JSON.stringify(archive));
}
