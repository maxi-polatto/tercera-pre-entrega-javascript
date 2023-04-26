alert("Bienvenidos a Todos los Dias")
let clientes = [];

function datosPersonales() {
  let nombre = prompt("Compartinos tu nombre:");
  let apellido = prompt("y tu apellido:");
  let direccion = prompt("de donde sos ?");

  let clienteExistente = clientes.find((c) => c.nombre === nombre);
  if (clienteExistente) {
    alert(
      `Bienvenido de nuevo ${clienteExistente.nombre} ${clienteExistente.apellido}!`
    );
  } else {
    let nuevoCliente = { nombre, apellido, direccion };
    clientes.push(nuevoCliente);
    alert(`Bienvenido ${nuevoCliente.nombre} ${nuevoCliente.apellido}!`);
  }
}
datosPersonales();

let ingresoTienda = false;
let ingresoProveedores = false;

for (let i = 2; i >= 0; i--) {
  let ingresoCodigo = parseInt(prompt("ingresa tu codigo"));

  if (ingresoCodigo >= 1000) {
    alert("ESTAS EN NUESTRA TIENDA");
    ingresoTienda = true;    
    break;
  } else if (ingresoCodigo < 1000 && ingresoCodigo > 100) {
    alert("INGRESASTE A ZONA PROVEEDORES");
    ingresoProveedores = true;

    function datosEmpresa() {
      let idempresa = prompt("ingrese su id:");
      let nombreEmpresa = prompt("Nombre empresa:");
      let direccion = prompt("Direccion");
    }
    datosEmpresa();
    const matPrima = [
      { id: 1, nombre: "harina", precio: 1500, cantidad: 0 },
      { id: 2, nombre: "azucar", precio: 250, cantidad: 0 },
      { id: 3, nombre: "manteca", precio: 1200, cantidad: 0 },
      { id: 4, nombre: "huevos", precio: 40, cantidad: 0 },
      { id: 5, nombre: "choclate", precio: 3100, cantidad: 0 },
      { id: 6, nombre: "levadura", precio: 1100, cantidad: 0 },
    ];

    matPrima.forEach((materia) => {
      const cantidad = prompt(`Ingrese la cantidad de ${materia.nombre}:`);
      materia.cantidad += parseInt(cantidad);
    });
    let remito = "Cantidad ingresada:\n";
    let totalRemito = 0;
    matPrima.forEach((materia) => {
      remito += `${materia.nombre}: ${materia.cantidad}\n`;
      totalRemito += materia.precio * materia.cantidad;
    });
    remito += `total de la entrega :  ${totalRemito}\n`;

    alert(remito);
    datosEmpresa();
  } else {
    alert("error ingrese codigo valido");
  }
}

if (ingresoTienda) {
  const productos = {
    tortas: 0,
    eclairs: 1000,
    croissants: 500,
    chocolates: 5000,
  };

  const tiposdetortas = {
    vainillaYChocolate: 5000,
    selvaNegra: 7500,
    sacher: 6500,
    mimosa: 4500,
  };

  let total = 0;
  let listaElecciones = "";
  let opcionCompra = prompt(
    "Que te gustaria Comprar: \n1- Tortas.  \n2- Eclairs.  \n3- Croissants  \n4- Chocolates. \n5- detalle compra . \n Presiona x para finalizar compra."
  );
  while (opcionCompra != "x") {
    switch (opcionCompra) {
      case "1":
        let tipoTorta = prompt(
          "Selecciona el tipo de torta: \n10- Vainilla y Chocolate.  \n20- Selva Negra.  \n30- Sacher.  \n40- Mimosa. \nx- volver al menu anterior"
        );

        switch (tipoTorta) {
          case "10":
            alert(
              "elegiste Vainilla y Chocolate: $" +
                tiposdetortas.vainillaYChocolate
            );

            let udsTortas = parseInt(
              prompt("decinos cuantas unidades queres?")
            );
            listaElecciones +=
              udsTortas +
              " \n -Vainilla y Chocolate" +
              "$" +
              tiposdetortas.vainillaYChocolate;
            total += tiposdetortas.vainillaYChocolate * udsTortas;
            break;
          case "20":
            alert("elegiste Selva Negra: $" + tiposdetortas.selvaNegra);

            let udsSelvaNegra = parseInt(
              prompt("decinos cuantas unidades queres?")
            );
            listaElecciones +=
              udsSelvaNegra +
              "\n - Selva Negra" +
              "$" +
              tiposdetortas.selvaNegra;
            total += tiposdetortas.selvaNegra * udsSelvaNegra;
            break;
          case "30":
            alert("elegiste Sacher: $" + tiposdetortas.sacher);
            listaElecciones += "\n - Sacher" + "$" + tiposdetortas.sacher;
            let udsSacher = parseInt(
              prompt("decinos cuantas unidades queres?")
            );
            total += tiposdetortas.sacher * udsSacher;
            break;
          case "40":
            alert("elegiste Mimosa: $" + tiposdetortas.mimosa);
            listaElecciones += "\n - Mimosa " + "$" + tiposdetortas.mimosa;
            let udsMimosa = parseInt(
              prompt("decinos cuantas unidades queres?")
            );
            total += tiposdetortas.mimosa * udsMimosa;
            break;

          case "x":
            break;
          default:
            alert("la opcion no es valida");
            break;
        }
        break;
      case "2":
        alert("elegiste eclairs $: " + productos.eclairs);
        listaElecciones += "\n - Eclairs";
        let udsEclaires = parseInt(prompt("decinos cuantas unidades queres?"));
        total += productos.eclairs * udsEclaires;
        break;
      case "3":
        alert("elegiste croissant $: " + productos.croissants);
        listaElecciones += "\n - Croissant";
        let udsCroisants = parseInt(prompt("decinos cuantas unidades queres?"));
        total += productos.croissants * udsCroisants;

        break;
      case "4":
        alert("elegiste chocolates $: " + productos.chocolates);
        listaElecciones += " \n Chocolates ";
        let udsChocolates = parseInt(
          prompt("decinos cuantas unidades queres?")
        );
        total += productos.chocolates * udsChocolates;
        break;
      case "5":
        alert(
          "Has elegido los siguientes productos:" +
            listaElecciones +
            "\n Total: $" +
            total
        );

        break;
      default:
        alert("la opcion no es valida");
        break;
    }

    opcionCompra = prompt(
      "Que te gustaria Comprar: \n1 - Tortas.  \n2 - Eclairs.  \n3 -Croissants  \n4 -Chocolates. \n5- detalle compra . \n Presiona x para finalizar compra."
    );
  }
  if (opcionCompra === "x") {
    alert("Tu total es: $" + total );
    
  } 

  else {
    alert("no pudiste ingresar llamanos 0800 todos los dias");
  }
}
