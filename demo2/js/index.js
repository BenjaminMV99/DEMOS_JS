var frutas =["PERA","MANZANA","MELON","SANDIA","LIMON"];
var btn_buscar = document.getElementById("btn_buscar");
var btn = document.getElementById("btn");
var btn_add = document.getElementById("btn_add");

var alumno = {
nombre:"Carlos",
edad: 23,
Carrera:"Analista",
ramosAprobados:["Fundamentos","Matematicas","Ingles","Base de datos"],
direccion:{
    calle: "Calle falsa",
    numero: 123,
    ciudad: "Talca",
},
tienemascotas: true,
};

cargaDtCarlos();


function cargarFrutas(){
    var caja = document.getElementById("frutas");
var btn = document.getElementById("btn");

var html = "Mis frutas <ul>";
frutas.forEach(item =>{
    html += "<li>" + item + "</li>";
});
html += "</ul>"

caja.innerHTML = html;
}

btn.addEventListener("click", () => {
    cargarFrutas();
});

btn_buscar.addEventListener("click", () => {

    var txt = document.getElementById("txt");
    var res1 = document.getElementById("res1");
    var esta = frutas.includes(txt.value);

    if (esta){ 
        res1.innerHTML = "la fruta esta en la coleccion"
    }else{
        res1.innerHTML ="no esta la fruta "
    }
});


btn_add.addEventListener("click", () => {
    var txt2 = document.getElementById("txt2");
    var res2 = document.getElementById("res2");

    var esta = frutas.includes(txt2.value.toUpperCase());
    if (esta){
        res2.innerHTML ="la fruta ya esta en la conleccion";
    }else{
        frutas.push(txt2.value.toUpperCase());
    }
   

    cargarFrutas();
});


function cargaDtCarlos(){
    var datos = document.getElementById("datos_carlos");
    datos.innerHTML = "Nombre: " + alumno.nombre + "<br>";
    datos.innerHTML += "Edad: " + alumno.edad + "<br>";
    datos.innerHTML += "Carrera: " + alumno.Carrera + "<br>";
    datos.innerHTML += "Ramos aprobados" +"<br>"
    alumno.ramosAprobados.forEach((item) =>{
        datos.innerHTML += "<li>" + item + "</li>";
    });
    datos.innerHTML += "Direccion: " + alumno.direccion.calle + " N°: " + alumno.direccion.numero + " ciudad: " + alumno.direccion.ciudad + "<br>"
    datos.innerHTML += alumno.tienemascotas
    ? "tiene mascotas"
    : "no tiene mascota"
}