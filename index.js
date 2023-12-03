// Funciones 
function descuento(cantidad, valor) {

  if (cantidad >= 5) {
    alert(valor - valor * 0.15)
  }
  else {
    alert(valor)
  }
}

// Inicio de programa

let cantidadCompra = 0
let valorTotal = 0
let caso = 1


while (caso != 0) {

  caso = parseInt(prompt('Ingrese numero de producto a agregar al carrito\n 1-Monstera Deliciosa\n 2-Ficus Pandurata\n 3-Monstera Adansonii\n 4-Potus\n 5-Maceta N°16\n 6-Tierra 50L\n 0-Para Salir\n'))
  
  if (caso>=0 && caso<=6){ 
  switch (caso) {
    case 1:
      valorTotal = valorTotal + 12000;
      cantidadCompra ++ 
      break;
    case 2:
      valorTotal = valorTotal + 15000;
      cantidadCompra ++ 
      break;
    case 3:
      valorTotal = valorTotal + 10000;
      cantidadCompra ++ 
      break;
    case 4:
      valorTotal = valorTotal + 5000;
      cantidadCompra ++ 
      break;
    case 5:
      valorTotal = valorTotal + 2000;
      cantidadCompra ++ 
      break;
    case 6:
      valorTotal = valorTotal + 5000;
      cantidadCompra ++ 
      break;
    default:
      break;
  }
  }
  else{
    alert("Ingrese un valor indicado")
  }

}

descuento(cantidadCompra, valorTotal)