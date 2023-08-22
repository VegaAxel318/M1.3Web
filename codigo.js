//Algunas líneas de JS
const lineasJS = ["console.log('Luna');","console.log('Sol');","console.log('Saturno');","console.log('Marte');",
                "console.log('Jupiter');","console.log('Urano');","console.log('Pluton');","console.log('Neptuno');",
                "console.log('Kepler');","console.log('Estrella');","console.log('Asteroide');","console.log('Nebula');",
                "console.log('Via Lactea');","console.log('Eclipse');","console.log('Venus');"];
//Programa de simulación RoundRobin
//Toma de argumentos
const nProcesos = prompt("Numero de procesos: ");
let procesos = inicializar(nProcesos);
simularRoundRobin(procesos);

//FUNCION PARA ELEGIR LINEAS DE CODIGO
function seleccionarCodigo(){
    let lineas  = [];
    //limitado a un número aleatorio entre 3 u 8
    //Math.floor(Math.random * 6) dará entre 0 y 5
    let lineasASeleccionar = (Math.floor(Math.random() * 6) + 3);
    for (let index = 0; index < lineasASeleccionar; index++) {
        let lineaSeleccionada =Math.floor(Math.random() * lineasJS.length);
        lineas.push(lineasJS[lineaSeleccionada]);
    }
    return lineas;
}
//FUNCION PARA INICIALIZAR SIMULACION
function inicializar(nProcesos){
    let procesos = [];
    for (let index = 0; index < nProcesos; index++) {
        let lineasC = seleccionarCodigo();
        let numero = index+1;
        procesos.push({nProceso : numero, lineas : lineasC});
    }
    return procesos;
}
//FUNCION PARA INICIAR A SIMULAR
function simularRoundRobin(procesos){
    let lineaActual = 0;
    let terminados = 0;
    do{
     lineaActual++;
        terminados = 0;
        for (let index = 0; index < Object.keys(procesos).length; index++) {
            let proceso = procesos[index];
            document.write(`Proceso ${proceso.nProceso}`+"<br>");

            if(proceso.lineas[lineaActual] == undefined){
                terminados++;
                document.write("Terminado"+"<br>");
            } else document.write(`Línea de código: ${proceso.lineas[lineaActual]}`+"<br>");
        }
    }while(terminados!=Object.keys(procesos).length)
    document.write("Simulación Terminada"+"<br>")
}