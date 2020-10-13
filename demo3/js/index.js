var btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    var nombre = document.getElementById("nombre");
    var salida = document.getElementById("salida"); 
    var ciudad = document.getElementById("slc_ciudad");
    var optiones = document.getElementsByName("op1");
    var sexo = document.getElementsByName("rd");


    salida.innerHTML = nombre.value + " ";

    salida.innerHTML += ciudad.value + " ";

    optiones.forEach((item) => {
        if(item.checked){
            salida.innerHTML += item.value + " ";
        }
    });
    sexo.forEach((item) =>{
        if(item.checked){
            salida.innerHTML += item.value + " ";
        }
    });

    





});