const productos = [
    { nombre: 'Hamburgesa', precio: 10 },
    { nombre: 'Pizza', precio: 20 },
    { nombre: 'Ensalada', precio: 30 },
  ];
  
  const carrito = [];
  
  function mostrarProductos() {
    let listaProductos = 'Productos disponibles:\n';
    for (let i = 0; i < productos.length; i++) {
      listaProductos += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    alert(listaProductos);
  }
  
  function comprarProductos() {
    const seleccion = parseInt(prompt('Ingrese el número del producto que desea comprar (0 para salir):'));
  
    if (seleccion === 0) {
      return;
    }
  
    if (seleccion >= 1 && seleccion <= productos.length) {
      const productoSeleccionado = productos[seleccion - 1];
      carrito.push(productoSeleccionado);
      alert(`${productoSeleccionado.nombre} ha sido agregado al carrito.`);
    } else {
      alert('Selección no válida. Por favor, ingrese un número válido.');
    }
  
    comprarProductos();
  }
  
  function verTotalGastado() {
    let total = 0;
    for (const producto of carrito) {
      total += producto.precio;
    }
    alert(`Total gastado en el carrito: $${total}`);
  }
  
  function main() {
    while (true) {
      const opcion = prompt('Seleccione una opción:\n1. Ver productos\n2. Comprar productos\n3. Ver total gastado\n4. Salir');
  
      switch (opcion) {
        case '1':
          mostrarProductos();
          break;
        case '2':
          comprarProductos();
          break;
        case '3':
          verTotalGastado();
          break;
        case '4':
          alert('Gracias por usar nuestro carrito de compras. ¡Hasta luego!');
          return;
        default:
          alert('Opción no válida. Por favor, ingrese un número válido.');
      }
    }
  }
  
  main();