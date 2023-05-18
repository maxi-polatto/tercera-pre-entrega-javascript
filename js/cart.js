//Obtén el elemento del ícono de carrito
const cartIcon = document.getElementById("cart-icon");

// Verifica si hay un carrito en el almacenamiento local o inicializa un carrito vacío
let cart = localStorage.getItem("cart");
if (!cart) {
  cart = [];
} else {
  cart = JSON.parse(cart);
}

//  actualizar la cantidad de productos en el carrito en el ícono
function actualizarCantidadCarrito() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

//  agregar un producto al carrito
function agregarAlCarrito(producto) {
  cart.push(producto);
  localStorage.setItem("cart", JSON.stringify(cart));
  actualizarCantidadCarrito();
}

//  mostrar los elementos del carrito en la consola (paraprobar )
function mostrarElementosCarrito() {
  console.log(cart);
}

//  agregar un producto al carrito
contenedorProductos.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const productoDiv = event.target.closest(".producto");
    const indiceProducto = [...contenedorProductos.children].indexOf(
      productoDiv
    );
    agregarAlCarrito(productos[indiceProducto]);
  }
});

// Evento para mostrar los elementos del carrito
cartIcon.addEventListener("click", mostrarElementosCarrito);

// Actualizar la cantidad de productos en el carrito al cargar la página
actualizarCantidadCarrito();

const cartItemsContainer = document.getElementById("cart-items");
const finalizarCompraButton = document.getElementById("finalizar-compra");
const vaciarCarritoButton = document.getElementById("vaciar-carrito");

// Función para finalizar la compra
function finalizarCompra() {
  // Aquí puedes realizar acciones adicionales antes de vaciar el carrito, como procesar el pago, enviar datos al servidor, etc.

  // Vaciar el carrito
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  actualizarCantidadCarrito();

  // Redirigir a la página de confirmación de compra o agradecimiento
  window.location.href = "./confirmacion.html";
}

// Función para vaciar el carrito
function vaciarCarrito() {
  // Vaciar el carrito
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  actualizarCantidadCarrito();

  // Actualizar la visualización del carrito
  mostrarElementosCarrito();
}

// Evento para finalizar la compra
finalizarCompraButton.addEventListener("click", finalizarCompra);

// Evento para vaciar el carrito
vaciarCarritoButton.addEventListener("click", vaciarCarrito);

document.addEventListener("DOMContentLoaded", mostrarProductosEnCarrito);
