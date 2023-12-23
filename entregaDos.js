// Productos

function producto(id, nombre, precio, stock) {
  this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock
}

const productos = [];

productos.push(new producto(0, "Salir del carrito" ,0 , 1))
productos.push(new producto(1, "Monstera Deliciosa", 12000, 3));
productos.push(new producto(2, "Ficus Pandurata", 15000, 4));
productos.push(new producto(3, "Monstera Adansonii", 10000, 6));
productos.push(new producto(4, "Potus", 5000, 10));
productos.push(new producto(5, "Maceta N°16", 2000, 15));
productos.push(new producto(6, "Tierra Terrafertil", 5000, 0));


// Funciones 
function descuento(cantidad, valor) {

  if (cantidad >= 5) {
    alert(valor - valor * 0.15)
  }
  else {
    alert(valor)
  }
}


//hay stock?
function cantidadStock (idProducto) {
const resultado = productos.find ((el) => el.id == idProducto)
return resultado.stock
}

// Valor del producto
function precio (idProducto) {
  const resultado = productos.find ((el) => el.id == idProducto)
  return parseInt(resultado.precio)
  }


//Creacion de cadena de bienvenida
function bienvenida (){ 
  bienvenido = productos.map ((el)=>"\n"+ el.id +" - "+ el.nombre  )
return (prompt (bienvenido))
}



// Inicio de programa

let cantidadCompra = 0
let valorTotal = 0
let caso = 1


while (caso != 0){

  caso = parseInt(bienvenida())

if (caso>=0 && caso<=productos.length){

  if (cantidadStock(caso) > 0 ){

  valorTotal = valorTotal + precio(caso)
  cantidadCompra ++;
  }
  else {
    alert("no hay Stock")
  }

}
else {
  alert("ingrese un valor indicado")
}

}

descuento(cantidadCompra, valorTotal)

