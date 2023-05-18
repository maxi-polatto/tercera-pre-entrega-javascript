/*let clientes = [];

if (localStorage.getItem("clientes")) {
  clientes = JSON.parse(localStorage.getItem("clientes"));
}

function agregarCliente(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let direccion = document.getElementById("direccion").value;

  let clienteExistente = clientes.find((c) => c.nombre === nombre);
  if (clienteExistente) {
    window.location.href = "./pages/tienda.html";
  } else {
    let nuevoCliente = { nombre, apellido, direccion };
    clientes.push(nuevoCliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }
}

document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    agregarCliente(event);
  });*/
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;

    let newUser = { name, address, password };
    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "./registro.html";
    document.getElementById("register-form").reset();
  });
document
  .getElementById("button-ingreso")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Redirigir a otra página
    window.location.href = "././registro.html";
  });
