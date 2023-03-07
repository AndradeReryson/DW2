var tab = function(n1){
    let resultado = "";

    for(let i = 0; i<11; i++){
        let aux = n1 * 1
        resultado += n1+" X "+i+" = "+aux+"\n"
    }

    return resultado
}

module.exports = tab