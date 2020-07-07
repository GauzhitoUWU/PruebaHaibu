/** Javascript

- Cada función debe ser desarrollada con un código personalizado y devolver la data requerida
- Al final de la prueba estará un console.log de cada una de las funciones para validar si el resultado es válido.
- Las respuestas deben ser subidas a un git para su posterior revisión
- Enviar el link del git en el mismo correo enviado

Regla nº1: No modifiques el objeto original. Cada función debe retornar un nuevo set de datos.
Regla nº2: Queda prohibido ocupar librerías como lodash o Underscore, el objetivo de la prueba es evaluar las habilidades con "vanilla" javascript,
tienes plazo hasta el 07/07/20 a las 17 horas.

¡Suerte!
*/

/**
@section DATASET
*/
const clients = [
    { id: 1, rut: "89873550", name: "LARA RENE PETTY BERGER" },
    { id: 2, rut: "86833361", name: "CONWAY LANDRY POLLARD BRADLEY" },
    { id: 3, rut: "88271452", name: "MICHELLE LETITIA BATTLE MOONEY" },
    { id: 4, rut: "87252013", name: "SIMMONS NELSON WITT MONROE" },
    { id: 5, rut: "81706494", name: "BRADY MARY RANDALL FERNANDEZ" },
    { id: 6, rut: "71167355", name: "ACOSTA COLE ATKINSON PITTS" },
    { id: 7, rut: "79093176", name: "DOMINGUEZ HOUSE GONZALES SALAZAR" },
    { id: 8, rut: "91361017", name: "KIRSTEN COLLINS BYERS COFFEY" },
    { id: 9, rut: "9065642K", name: "FIELDS RATLIFF MORRIS QUINN" }
];

const banks = [
    { id: 1, name: 'SCOTIABANK' },
    { id: 2, name: 'BCI' },
    { id: 3, name: 'ITAU' },
    { id: 4, name: 'CONDELL' },
];

const accounts = [
    { clientId: 4, bankId: 1, balance: 79069 },
    { clientId: 6, bankId: 3, balance: 136060 },
    { clientId: 9, bankId: 3, balance: 74908 },
    { clientId: 2, bankId: 2, balance: 4391 },
    { clientId: 6, bankId: 2, balance: 116707 },
    { clientId: 1, bankId: 3, balance: 157627 },
    { clientId: 5, bankId: 4, balance: 136372 },
    { clientId: 7, bankId: 4, balance: 190204 },
    { clientId: 5, bankId: 4, balance: 149670 },
    { clientId: 2, bankId: 3, balance: 143321 },
    { clientId: 2, bankId: 4, balance: 67466 },
    { clientId: 2, bankId: 3, balance: 17956 },
    { clientId: 9, bankId: 2, balance: 43194 },
    { clientId: 5, bankId: 1, balance: 52245 },
    { clientId: 6, bankId: 2, balance: 41562 },
    { clientId: 3, bankId: 2, balance: 138046 },
    { clientId: 6, bankId: 3, balance: 196964 },
    { clientId: 8, bankId: 3, balance: 73803 },
    { clientId: 9, bankId: 2, balance: 150402 },
    { clientId: 7, bankId: 1, balance: 122869 },
    { clientId: 5, bankId: 4, balance: 65223 },
    { clientId: 7, bankId: 3, balance: 143589 },
    { clientId: 9, bankId: 3, balance: 43346 },
    { clientId: 2, bankId: 1, balance: 60421 },
    { clientId: 4, bankId: 4, balance: 184110 },
    { clientId: 8, bankId: 4, balance: 195903 },
    { clientId: 5, bankId: 2, balance: 77649 },
    { clientId: 8, bankId: 4, balance: 28170 },
    { clientId: 5, bankId: 1, balance: 132850 },
    { clientId: 1, bankId: 3, balance: 139679 },
    { clientId: 7, bankId: 4, balance: 119808 },
    { clientId: 4, bankId: 4, balance: 109201 },
    { clientId: 9, bankId: 3, balance: 112529 },
    { clientId: 1, bankId: 3, balance: 137914 },
    { clientId: 6, bankId: 2, balance: 122904 },
    { clientId: 5, bankId: 4, balance: 103142 },
    { clientId: 8, bankId: 2, balance: 69163 },
    { clientId: 2, bankId: 4, balance: 57812 },
    { clientId: 2, bankId: 3, balance: 32851 },
    { clientId: 7, bankId: 1, balance: 109763 },
    { clientId: 8, bankId: 3, balance: 147442 },
    { clientId: 9, bankId: 1, balance: 42217 },
    { clientId: 1, bankId: 1, balance: 39658 },
    { clientId: 6, bankId: 2, balance: 8664 },
    { clientId: 8, bankId: 1, balance: 41915 },
    { clientId: 7, bankId: 1, balance: 31879 },
    { clientId: 7, bankId: 4, balance: 117795 },
    { clientId: 1, bankId: 4, balance: 108862 },
    { clientId: 5, bankId: 1, balance: 18550 },
];



/**
Ejercicio 0
@description Retornar un arreglo con los ID de los clientes
*/
function exercise0() {
    return clients.map(client => client.id);
}
//Answer// => [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
Ejercicio 1
@description  Retornar un arreglo con los ID de los clientes ordenados por RUT
*/
function exercise1() {
    //TODO
    /*function ordenarRut(clients, rut){
        clients.sort(function(a, b){
            return a[rut] > b[rut]
        })
    };
    return ordenarRut(clients, clients.rut);
    */
    /*
    array.sort(function (a, b){
        return a[campo] > b[campo];
    })
    */
   //document.getbyid
   //Se supone que aquí se compran los ruts y se le asigna un valor al resultado
   //donde se declaran a y b?
    function compararRut (a, b) {
       if(a.rut < b.rut){
           return -1;
       }
       if(a.rut > b.rut){
           return 1;
       }
       return 0;
    }
   
    //luego aquí se le pasa la función...a un método?
    //pero si le paso esos resultados manuales no lo ordena
    //no estoy entendiendo :c
    clients.sort(compararRut);
    //finalmente se retorna el array...aplicandole las funciones?
    return clients.map(client => client.id);

}


/**
Ejercicio 2
@description Retornar un arreglo con los nombres de los clientes, ordenados de mayor a menor
             por la suma TOTAL de los saldos de las Cuentas
*/
function exercise2() {
    //TODO

    /*
    function compararCuentas (a, b) {
        if(a.balance < b.balance){
            return -1;
        }
        if(a.balance > b.balance){
            return 1;
        }
        return 0;
    }
    */

    var total = 0;
    const arrayacco = accounts;
    const arraycli = clients;

    /*arraycli.forEach(function(data, index){
        if(data.clientId = clients.id){
            total = total + data.balance;
            console.log(total);
        }
        
    });*/

    /*function sumarSaldo(item) {
        if(item.clientId == 2){
            total = total + item.balance;
        }
        return total;
    }*/
    
        /*for(var i in arraycli){
            
        }*/
        //total += item;
        

    //console.log(sumarSaldo);

    //se intenta rescatar el id del array clients y el clientId del array accounts
    //y si es que son iguales, deberian acumularse los valores
    //tal vez sea con foreach
    function sumarSaldos(a, b){
        if(a.id == b.clientId){
            total = total + b.balance;
            return total;
        }
    }
    
    //console.log(sumarSaldos(arraycli, arrayacco));
    //se aplica la función
    clients.sort(sumarSaldos);

    //Se retorna un array con los nombres de los clientes
    return clients.map(client => client.name)

}

/**
Ejercicio 3
@description  Devuelve un objeto cuyo índice es el nombre de los bancos
              y cuyo valor es un arreglo de los ruts de los clientes ordenados alfabéticamente por 'nombre'
*/
function exercise3() {
     //TODO
}


/**
Ejercicio 4
@description   Devuelve un arreglo ordenado de mayor a menor con el saldo de los clientes que
               tengan más de 25000 en el banco 'SCOTIABANK'
*/
function exercise4() {
    //TODO
}


/**
Ejercicio 5
@description  Devuelve un arreglo con la 'id' de los Bancos de menor a mayor por el
             TOTAL de dinero que administran en las cuentas de sus clientes
*/
function exercise5() {
    //TODO:
}

/**
Ejercicio 6
@description  Devuelve un objeto en donde la key son los nombre de los bancos
              y el valor es la cantidad de clientes que solo tienen una cuenta en ese banco
*/
function exercise6() {
    //TODO:
}


/**
Ejercicio 7
@description  Devuelve un objeto en donde la key son el nombre de los bancos
              y el valor es el 'id' de su cliente con menos dinero.
*/
function exercise7() {
    //TODO:
}


/**
No modificar.

Debes ejecutar este ejercicio con NodeJs y verificar si su código está dando los resultados correctos
@section CONSOLE LOG
*/

console.log("Ejercicio 0 --> ", exercise0() || "Ejercicio no resuelto");
console.log("Ejercicio 1 --> ", exercise1() || "Ejercicio no resuelto");
console.log("Ejercicio 2 --> ", exercise2() || "Ejercicio no resuelto");
console.log("Ejercicio 3 --> ", exercise3() || "Ejercicio no resuelto");
console.log("Ejercicio 4 --> ", exercise4() || "Ejercicio no resuelto");
console.log("Ejercicio 5 --> ", exercise5() || "Ejercicio no resuelto");
console.log("Ejercicio 6 --> ", exercise6() || "Ejercicio no resuelto");
console.log("Ejercicio 7 --> ", exercise7() || "Ejercicio no resuelto");

process.exit();
