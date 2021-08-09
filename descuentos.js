 //APARTADP CUPONES

 const arrayCupones = ["lucas",
    "platzi",
    "redondel",
];
function descuentoCupon(inputCupon){
    let descuento = 0;
    switch(inputCupon){
        case "lucas": descuento= 25; break;
        case "platzi": descuento= 10; break;
        case "redondel": descuento= 5; break;
    }
  
    return descuento; 

}

function calcularPrecioConDescuento(precio, descuento){
    let resultado = (precio * (100 - descuento))/100;
    return resultado;
}
/*
 function onClickButtonCalcular(){
     const inputPrice = document.getElementById("inputPrice").value;
     const inputDiscount = document.getElementById("inputDiscount").value;

     const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);

     const resultP = document.getElementById("resultPrice");
     resultP.innerText = "El precio con descuentos son : $" + precioConDescuento;
 }
*/

function onClickButtonCalcular(){
    const inputCupon = document.getElementById("inputCupon").value;
    const inputPrice = document.getElementById("inputPrice").value;
    const inputDiscount = document.getElementById("inputDiscount").value;    
    var precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
   
    if(inputCupon !== " "){
        alert("entro");
         const descuentoDar = descuentoCupon(inputCupon);
        
         var precioConDescuento2 = precioConDescuento;
        precioConDescuento = calcularPrecioConDescuento( precioConDescuento2, descuentoDar);
    }
    

     const resultP = document.getElementById("resultPrice");
     resultP.innerText = "El precio con descuentos son : $" + precioConDescuento;
 }
