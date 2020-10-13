export default {
    data:`   
        <h1> demo 2 </h1>
        precio <br>
        <input type="number" id="txt"/>
        <br>
        descuento <br>
        <select  id="desc">
            <option value="0">0%</option>
            <option value="0.1">10%</option>
            <option value="0.2">30%</option>
            <option value="0.5">50%</option>
        </select>
        <br><br>
        <button onClick id="cacular">calcular</button>
        <p> id="resp"></p>
            `,
        calcular:() => {
            var preico  = document.getElementById("text").value;
            var desc = document.getElementById("desc").value;
            var resp = document.getElementById("resp").value;

            if (precio != "" && precio > 0){
                var valor_desc = precio * desc;
                var total = precio - valor_desc;
                resp.innerHTML = `descuento: ${valor_desc}, paga: ${total}`;
            }else{
                resp.style.backgroud = red;
                resp.style.color = withe;
                resp.innerHTML = "precio incorrecto";
            }
        },
}