llamadaDemo();

function llamadaDemo() {
   

   var totpob = document.getElementById("td3");

        var url = "https://censopoblacion.gt/indicadores/2/999";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            var pobhom = document.getElementById("td1");
            var pobmuj = document.getElementById("td2");
            var totpob = document.getElementById("td3");

            pobhom.innerText = data[0].total_sexo_hombre;
            pobmuj.innerText = data[0].total_sexo_mujeres;
            totpob.innerText = data[0].pob_total;
        
        });

}

/*Llamada por ID*/
function llamada1(){

    var pobhom = document.getElementById("td1");
    var pobmuj = document.getElementById("td2");
    var totpob = document.getElementById("td3");

    var url="https://censopoblacion.gt/indicadores/2/999";

    alert(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
 
            pobhom.textcontent = data[0].total_sexo_hombre;
            pobmuj.textcontent = data[0].total_sexo_mujeres
            totpob.textcontent = data[0].pob_total;
        
        });
            
}

