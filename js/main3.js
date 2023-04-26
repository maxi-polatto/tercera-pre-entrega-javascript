let clientes = [];

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

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();
  agregarCliente(event);
});
