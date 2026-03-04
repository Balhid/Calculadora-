const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        if (b === 0) {
            return "Error: Divir por cero, no se puede :(";
        }
        return a / b;
    }
};

let historial = [];

function pedirNumero(mensaje) {
    let numero;
    do {
        numero = Number(prompt(mensaje));
    } while (isNaN(numero));
    return numero;
}

function mostrarMenu() {
    return prompt(
        "Seleccione una opción:\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir\n" +
        "5. Ver historial\n" +
        "6. Salir"
    );
}

function ejecutarOperacion(opcion) {
    if (opcion >= 1 && opcion <= 4) {
        const num1 = pedirNumero("Ingrese el primer número:");
        const num2 = pedirNumero("Ingrese el segundo número:");

        let resultado;

        switch (opcion) {
            case "1":
                resultado = calculadora.sumar(num1, num2);
                break;
            case "2":
                resultado = calculadora.restar(num1, num2);
                break;
            case "3":
                resultado = calculadora.multiplicar(num1, num2);
                break;
            case "4":
                resultado = calculadora.dividir(num1, num2);
                break;
        }

        const operacion = {
            opcion,
            num1,
            num2,
            resultado
        };

        historial.push(operacion);
        alert("Resultado: " + resultado);
        console.log("Operación realizada:", operacion);
    }
}

function mostrarHistorial() {
    if (historial.length === 0) {
        alert("No hay operaciones registradas.");
        return;
    }

    console.log("Historial de operaciones:");
    historial.forEach((item, index) => {
        console.log(
            `${index + 1}) ${item.num1} , ${item.num2} => Resultado: ${item.resultado}`
        );
    });
}

function iniciarAplicacion() {
    alert("Bienvenido a la aplicación de consola");

    let opcion;
    do {
        opcion = mostrarMenu();

        if (opcion >= 1 && opcion <= 4) {
            ejecutarOperacion(opcion);
        } else if (opcion === "5") {
            mostrarHistorial();
        } else if (opcion === "6") {
            alert("Saliendo de la aplicación");
        } else {
            alert("Opción inválida");
        }
    } while (opcion !== "6");
}

iniciarAplicacion();