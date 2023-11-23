
// class Gestor {
//     constructor(nombre, rol) {
//         this.nombre = nombre;
//         this.rol = rol;
//     }
// }

// class Cliente {
//     constructor(nombre, email) {
//         this.nombre = nombre;
//         this.email = email;
//     }
// }

// class Mensaje {
//     constructor(contenido, remitente, receptor) {
//         this.contenido = contenido;
//         this.remitente = remitente;
//         this.receptor = receptor;
//     }
// }

// class Transferencia {
//     constructor(cantidad, cuentaRemitente, cuentaReceptor) {
//         this.cantidad = cantidad;
//         this.cuentaRemitente = cuentaRemitente;
//         this.cuentaReceptor = cuentaReceptor;
//     }
// }

// const gestor1 = new Gestor('Alberto', 'Gerente');
// const gestor2 = new Gestor('Silvia', 'Supervisor');
// const gestor3 = new Gestor('Gemma', 'Coordinador');


// const cliente1 = new Cliente('Javier', 'javier123@formacion.it');
// const cliente2 = new Cliente('Milena', 'milena321@formacion.it');
// const cliente3 = new Cliente('Auri', 'auri456@formacion.it');

// const mensaje1 = new Mensaje('Hola!', 'UsuarioA', 'UsuarioB');
// const mensaje2 = new Mensaje('Adios!', 'UsuarioC', 'UsuarioD');
// const mensaje3 = new Mensaje('Excelente', 'UsuarioE', 'UsuarioF');

// const transferencia1 = new Transferencia(46798, 'Cuenta1', 'Cuenta2');
// const transferencia2 = new Transferencia(789235, 'Cuenta3', 'Cuenta4');
// const transferencia3 = new Transferencia(9883746, 'Cuenta5', 'Cuenta6');

// const gestoresArray = [gestor1, gestor2, gestor3];
// const clientesArray = [cliente1, cliente2, cliente3];
// const mensajesArray = [mensaje1, mensaje2, mensaje3];
// const transferenciasArray = [transferencia1, transferencia2, transferencia3];

// function displayProperties(array, objectType) {
//     console.log(`Propiedades de ${objectType}:`);
//     array.forEach((obj, index) => {
//         console.log(` ${objectType} ${index + 1}:`, obj);
//     });
//     console.log('\n');
// }

// function getGestorElements(){
//     console.log('Elementos actuales de Gestor: ', gestoresArray);
// }


// let counter = 0;
// const maxIterations = 3;

// const intervalId = setInterval(() => {
//     getGestorElements();
//     counter++;
//     if(counter === maxIterations) {
//         clearInterval(intervalId);
//         console.log('Intervalo terminado despues de', maxIterations, '3 iteraciones');
//     }
// }, 5000);

// displayProperties(gestoresArray, 'Gestor');
// displayProperties(clientesArray, 'Cliente');
// displayProperties(mensajesArray, 'Mensaje');
// displayProperties(transferenciasArray, 'Transferencia');



// const gestoresJson = JSON.stringify(gestoresArray);
// console.log('Array convertido a JSON:', gestoresJson);

// const parsedGestoresArray = JSON.parse(gestoresJson);
// console.log('JSON convertido de vuelta al array:', parsedGestoresArray);

// console.log('Son los objetos instancias de Gestor?', parsedGestoresArray.every(obj => obj instanceof Gestor));




