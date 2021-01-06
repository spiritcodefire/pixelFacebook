let nomClient = document.getElementById("nomClient"); // aller récupérer mes élements dans html
let emailClient = document.getElementById("exampleInputEmail1")
let telClient = document.getElementById("phone")
let entrepriseClient = document.getElementById("entrepriseClient")
let messageClient = document.getElementById("textidok")
let Cp = document.getElementById("Cp")

document.getElementById("btnSubmit").addEventListener("click", Verifie )



function Verifie() {
  console.log("fonction verifie ouverte")
    if (
      document.getElementById("phone").value !== "" 
    && document.getElementById("Cp").value !== "" 
    && document.getElementById("exampleInputEmail1").value !== ""
    && document.getElementById("nomClient").value !== ""      ) {
    SendForm()
    $("#confirmlabel").html("Votre demande à bien été enregistré, vous serez contacté dans les 24 heures.")
  }else{
    $("#confirmlabel").html("Veuillez remplir les champs necessaires à la finalisation de votre demande.")
  }
}


async function SendForm() {
  console.log("fonction SendForm ouverte")

  var myDate = new Date
  var theDay = myDate.getDate();
  var theMonth = myDate.getMonth()+1;
  var theYear = myDate.getFullYear();
  var dateText = theYear + "-"  +  theMonth + "-"  + theDay ;
  var heure = myDate.toLocaleTimeString();
  

 var settings = {
    url: "https://techniclimat-075a49.appdrag.site/api/PosterMonFormulaire",
    data: {
        "Nom" : nomClient.value ,
        "Mail" : emailClient.value ,
        "Tel" : telClient.value ,
        "Entreprise" : entrepriseClient.value ,
        "Message" : messageClient.value ,
        "Date" : dateText , 
        "Heure" : heure,
        "Cp" : Cp.value
    },
    method: "POST",
    async: true,
    crossDomain: true,
    processData: true
};
await $.ajax(settings).done(function (response) 
{
  console.log(settings)
  console.log(response)
  
  if (response.status == "OK" && response.affectedRows == 1) { 

    $("#confirmlabel").html("Votre demande à bien été enregistré, vous serez contacté dans le 24heures."); // message qui s'affiche si l'API a bien pris la ligne
  }
}); 
}


// document.getElementById("clicktel").addEventListener("click", cliquez )

// function cliquez() {
//    console.log("link tel open")  
// }


// $("#btnSubmit").on("click", function () {
//   console.log("form submit open")  
// } )




// document.getElementById("prisecontact").addEventListener("click", function () {
//   console.log("btn prise contact open")  
// } )


// document.getElementById("telpourphone").addEventListener("click", function () {
//   console.log("link tel Open")  
// } )



// document.getElementById("btnWhatsapp").addEventListener("click", function () {
//   console.log("link whatsapp Open")  
// } )


// document.getElementById("phonelinkone").addEventListener("click", function () {
//   console.log("phone link open")  
// } )


// document.getElementById("whatsappordi").addEventListener("click", function () {
//   console.log("phone link open")  
// } )



