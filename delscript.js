delarr = JSON.parse(localStorage.getItem('del'));
let delcontainer = document.getElementById('delcontainer');

delshow();

 function delshow(){
     let str = '';
     
     for(let i=0 ;i<delarr.length;i++){
         str += `
         <div class="boxnote">
         <div class="head">
         <h1 id="heading">${delarr[i]['title'] == ''? 'NoteTitle' : delarr[i]['title'] }</h1>
         <p id="notePara">${delarr[i]['text']}</p>
         </div>
         <div class="btns">
         <button class="btn btn-outline-danger btn-sm" onclick="delper(${i})">Delete Permanently</button>
         </div>
         </div>
         
         `;
     
         delcontainer.innerHTML = str;
     }
 }

function delper(index){
    delarr = JSON.parse(localStorage.getItem('del'));
    let reply = confirm("Are you sure that you want to delete it permanently");
    if (reply== true){
        delarr.splice(index,1);
        delshow();
    }
    delarr = localStorage.setItem('del' , JSON.stringify(delarr));
}