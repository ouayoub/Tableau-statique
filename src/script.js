let users = [
 {
   id: "123456789",
   createdDate: "2021-01-06T00:00:00.000Z",
   status: "En validation",
   firstName: "Mohamed",
   lastName: "Taha",
   userName: "mtaha",
   registrationNumber: "2584",
 },
  {
   id: "987654321",
   createdDate: "2021-07-25T00:00:00.000Z",
   status: "Validé",
   firstName: "Hamid",
   lastName: "Orrich",
   userName: "horrich",
   registrationNumber: "1594",
 },
    {
   id: "852963741",
   createdDate: "2021-09-15T00:00:00.000Z",
   status: "Rejeté",
   firstName: "Rachid",
   lastName: "Mahidi",
   userName: "rmahidi",
   registrationNumber: "3576",
 }
];



function addTr(id,date, etat, nom, prenom, nomd, mat) {
 users.push({
  id: id,
  createdDate: "2021-09-15T00:00:00.000Z",
  status: "Rejeté",
  firstName: "Rachid",
  lastName: "Mahidi",
  userName: "rmahidi",
  registrationNumber: "3576",
 });
 let styleClass = getEtatClass(etat);
return `<tr class="border-top" id="user-${id}">
<td class="id" id="id">${id}</td>
<td class="date" id="date">${date}</td>
<td class="etat"  id="etat">
 <a href="#" class="p-2 pe-3 ps-3 rounded-2 ${styleClass}">
  ${etat}
 </a>
</td>
<td class="nom">${nom}</td>
<td class="prenom">${prenom}</td>
<td class="nomd">${nomd}</td>
<td class="mat">${mat}</td>
<td class="action" id="action"><img src="../img/trash-bin.png" alt=""
  onclick="removeTr(${id})"></td>
</tr>`;
}
function btnAjouter() {
 let table_body = document.getElementById('table_body')

var id =  table_body.rows.length+ 1
var date = document.getElementById("frm_createdDate").value;
var etat = document.getElementById("frm_etat").value;
var nom = document.getElementById("frm_nom").value;
var prenom = document.getElementById("frm_prenom").value;
var nomd = document.getElementById("frm_username").value;
var mat = document.getElementById("frm_matricule").value;

const str = addTr(id, date, etat, nom, prenom, nomd, mat);
table_body.insertAdjacentHTML( 'beforeend', str )

 document.getElementById("frm_createdDate").value = '';
 document.getElementById("frm_etat").value = '';
 document.getElementById("frm_nom").value = '';
 document.getElementById("frm_prenom").value = '';
 document.getElementById("frm_username").value = '';
 document.getElementById("frm_matricule").value = '';
}

function clean_first_tr(firstTr) {
 let children = firstTr.children;
 
 children = Array.isArray(children) ? children : Object.values(children);
 children.forEach(x=>{
     if(x !== firstTr.lastElementChild)
     {
         x.firstElementChild.value = '';
     }
 });
}


// remove function
function removeTr(id) {
 let row = document.getElementById('user-'+id);
 console.log(users);
 users = users.filter(function(user) { return user.id !== id });
 console.log(users);
 if(row == null)
 {
     alert("You Don't have Permission to Delete This ?");
 }else{
  row.remove();
 }
}