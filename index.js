
function descuento(cantidad, valor) {

  if (cantidad >= 5) {
    alert(valor - valor * 0.15)
  }
  else {
    alert(valor)
  }
}

function producto(numero) {

  switch (numero) {
    case 1:
      valorTotal = valorTotal + 12000;
      break;
    case 2:
      valorTotal = valorTotal + 15000;
      break;
    case 3:
      valorTotal = valorTotal + 10000;
      break;
    case 4:
      valorTotal = valorTotal + 5000;
      break;
    case 5:
      valorTotal = valorTotal + 2000;
      break;
    case 6:
      valorTotal = valorTotal + 5000;
      break;
    default:
      break;
  }

}



let cantidadCompra = 0
let valorTotal = 0
let caso = 1


while (caso != 0) {

  caso = prompt('Ingrese numero de producto a agregar al carrito\n 1-Monstera Deliciosa\n 2-Ficus Pandurata\n 3-Monstera Adansonii\n 4-Potus\n 5-Maceta N°16\n 6-Tierra 50L\n 0-Para Salir\n')
  if (caso == undefined) {
    caso = 0
  } else if (caso >=0 && caso <= 6) {
    producto(caso)
    cantidadCompra++
  }
  else {
    alert ("Ingrese numero de la lista")
  }



}

descuento(cantidadCompra, valorTotal)