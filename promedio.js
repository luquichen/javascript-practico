function mediaAritmetica (lista){

    const sumarLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const   promedioLista = sumarLista / lista.length;
    
    return promedioLista;
};