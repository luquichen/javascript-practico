const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColOrdenado = salariosCol.sort(
    function(salaryA, salaryB){
        salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumarLista = lista.reduce( 
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumarLista / lista.length;
    return promedioLista;

}


function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length /2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//top 10%
const  spliceStart = ((salariosColOrdenado.length * 90)/100);
const spliceCount = salariosColOrdenado.length - spliceStart;

const salariosColTop10 = salariosColOrdenado.splice( 
    spliceStart,
    spliceCount,
);


const aux1 = medianaSalariosCol(salariosColOrdenado);
const aux2 = medianaSalariosCol(salariosColTop10);
console.log ( {
    aux1,
    aux2,
}
);