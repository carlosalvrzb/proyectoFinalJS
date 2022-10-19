const botonToast = document.getElementById("btnMostrarToast");
botonToast.onclick = mostrarToast;

function gen_table(){
    document.getElementById("tab").innerHTML="";
    let capital=Number(document.getElementById("capital").value);
    let cuota=Number(document.getElementById("cuota").value);
    let interes=Number(document.getElementById("interes").value);
    if(capital>0){   
        for(i=1;i<=cuota;i++){
            ca=capital/cuota;
            d1=ca.toFixed(2);
            i2=((capital*interes)/100)/cuota;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=capital.toFixed(2);
        t_i=i2*cuota;
        d4=t_i.toFixed(2);
        t_p=r*cuota;
        d5=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}

function funcionpaso1(){
    sessionStorage.setItem("capital ingresado", document.getElementById("capital").value);
    sessionStorage.setItem("cuota ingresado", document.getElementById("cuota").value);
    sessionStorage.setItem("interes ingresado", document.getElementById("interes").value);
}

function funcionpaso2(){
    let present = 0;
    console.log("entramos a funcion paso 2");
    if (sessionStorage.getItem("capital ingresado") != null && sessionStorage.getItem("capital ingresado") != "") {
        console.log(sessionStorage.getItem("capital ingresado"));
        document.getElementById("capital").value = sessionStorage.getItem("capital ingresado");
        present++;
    }
    if (sessionStorage.getItem("cuota ingresado") != null && sessionStorage.getItem("cuota ingresado") != "") {
        console.log(sessionStorage.getItem("cuota ingresado"));
        document.getElementById("cuota").value = sessionStorage.getItem("cuota ingresado");
        present++;
    }
    if (sessionStorage.getItem("interes ingresado") != null && sessionStorage.getItem("interes ingresado") != "") {
        console.log(sessionStorage.getItem("interes ingresado"));
        document.getElementById("interes").value = sessionStorage.getItem("interes ingresado");
        present++;
    }
    console.log(present);
    if(present > 2){
        gen_table();
    }

}
function borrarStorage(){
    sessionStorage.clear()
    funcionpaso2()
}



function mostrarToast(){
    gen_table()
    Toastify({
        text: "Se ha generado tu simulación de prestamo",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
        }).showToast();
}

function consultarCreditosServer() {
    fetch("https://634708dadb76843976a4e7b3.mockapi.io/creditos")
    .then((response) => response.jason())
    .then((data) => console.log(data))
}

funcionpaso2();
consultarCreditosServer();


// Paso 1 Hacer una funcion que se mande a llamar cuando el valor de la textbox cambie
// Paso 1.1 La funcion deberá guardar el valor del textbox en la local storage
// Paso 2 Despues hacer una funcion que va a revisar si ya hay valores dentro del storage en caso de que la pagina se cargue desde 0
// Paso 2.1 En caso de que los 3 elementos existan, mandar llamar la funcion de gen_table()
// Paso 3 Al principio del documento Inicializar los valores mandar a llamar

// Anotaciones=============================
// Previous capital o data (es el nombre)
// Si existe se pone, si no existe, no se pone nada
// Condicion cuando sale null(porque no hay nada en el Storage)
// Condicion cuando exista un valor
// Si existen los 3 valores que se llame la función gen_table

// 3 Ifs y 1 condicional verdadera

// 3 funciones para guardar los valores
// 1 para recuperarlos todos