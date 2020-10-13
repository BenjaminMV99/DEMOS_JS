
var a = 10;

var b = "js es easy"

var c = a+10;

var d = 11;

console.log(a = a +a);
console.log(b);
console.log("c : "+c);


function sumar(){
    console.log("esta es una funcion")
    return "valor";
}

sumar();


// para sumar dor valores y mostrarlos por consola

function sumar(a, b){
    var suma = 0;
    suma = a + b;+
    console.log("la suma es " +suma);
}

sumar(5, 6);

//suma = () => {}; sistanxis de fechas (parece)

//funciones para los arreglos 

var frutas = ["pera", "naranja", "manzana"];

//para agregar a un arreglo 

frutas.push("guida");

console.log(frutas);

// para ver la cantodad de cosas dentro de un arreglo 

console.log("catidad de frutas: " +frutas.length);


// recorrer un arreglo 

for(var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("=================================");

// otra forma de recorrer los arreglos mas su indice 

frutas.forEach((item, index) => {
    console.log(item+" "+ index);
});

// los objetos y arreglo de objetos 

var mascota = {name:"terry", color:"negro", edad:8};

console.log(mascota);

var mascotas = [
    {name:"terry", color:"negro", edad:8},
    {name:"mona", color:"negro", edad:8},
    {name:"yuyin", color:"negro", edad:8},
    {name:"totoro", color:"negro", edad:8},
    {name:"milo", color:"negro", edad:8},
    {name:"negro", color:"negro", edad:8},
];
console.log(mascotas);

// recorrer aun arreglo de objetos 

mascotas.forEach((item) =>{
    console.log(item.name+" "+item.edad); 
});



var profe = {name:"roman",
titulo:"no tiene ",
cursos: ["js","java","bue"]
};


// sacar info de un html

var texto = document.getElementById("texto");
console.log(texto);
console.log(texto.innerHTML);
console.log(texto.tagName);
texto.log(texto.id);

//modifica html con css desde js 
texto.innerHTML = "jaqueado";
texto.style.color = "red";
texto.style.background = "black";
texto.style.borderRadius ="8px";
texto.style.textAlign = "center";

// sacar iamgenes de un html

var img = document.getElementById("img");
img.src = "img/photo.png";

// sacar info de un radio

console.log(rd1.value);

//modifar el valor del radio

rd1.value = "";

//modificar el estado de un radio

rd1.cheked = false;

// para ver si un radio esta marcado
if  (rd1.cheked){
    //acciones

}


//sacar info de un select

var countries = document.getElementById("countries");

//obetener valor seleccionado

console.log(countries.value);

//selecionar el valor de un select

countries.value = "";

//obtener el indice del seleccionado (select = arreglo)

console.log(countries.selectedIdenx);

//obtener valor seleccionado por indice

console.log(countries.options[countries.selectedIndex].value);

// sacar el texto de un select

console.log(countries.options[countries.selectedIdenx].innerHTML);

// selecionar valor por indice

countries.value=countries.options[1].value;

//conversiones

parseInt(text); // trasnforma texto a numero, si hay un errro devuelve NaN
parseFloat(text); // trasnforma texto a numero, si hay un errro devuelve NaN
isNaN(number); //retorna true si el valor no es unumero

// sacar info de un boton

var bt = document.getElementById("bt");

bt.addEventListener("click", function () {
    console.log("hi");
});

countries.addEventListener("change",() => {
    console.log("hi");
});


// trabajar con tablas


