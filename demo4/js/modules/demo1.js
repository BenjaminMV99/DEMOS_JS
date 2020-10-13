export default {
    data: `
    <h1>  demo1 </h1> 
    nombre <br>
    <input id ="txt" type="text" placeholder="Tu nombre">
    <button> saudar</button>
    <p> id="resp"></p>
    `,
    saludar:() =>{

        var nombre = document.getElementById("txt");
        var resp = document.getElementById("res");

        function saludar (){
            if (nombre ==""){
            resp.innerHTML = "campo de nombre vacio";
            }else{
                resp.innerHTML = ` Hola ${nombre}`;
            }
            }
    }
}
