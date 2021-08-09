
/* //Codigo Calculos Cuadrados
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimietro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es:" + areaCuadrado + "cm´2");
console.groupEnd();

//Codigo Calculos Cuadrados
console.group("Triangulo");
const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const ladoTrianguloTres= 4;

console.log("lado1" + ladoTrianguloUno + "cm "
    + "lado2" + ladoTrianguloDos + "cm "
    + "lado3" + ladoTrianguloTres + "cm"
); 

const alturaTriangulo = 5.5;
console.groupEnd();

*/

//Aqui empiza html con java

function calcularareatriangulo(){
    const lado1 = document.getElementById("inputlado").value;
    const lado2 = document.getElementById("inputlado").value;
    const lado3 = document.getElementById("inputlado").value; 
    const area = lado1 * lado2 * lado3;
    alert(area);
}   