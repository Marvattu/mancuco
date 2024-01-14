// se genera las SellBox

// const SECTION_COMP = document.getElementById("Compra")

// SECTION_COMP.innerHTML = `
// <div class="sellBox">
// <h2 id="tituloPrincipal">Plantas</h2>
// <div class="rowFlex">
//   <img class="sizeImg imgNO" src="./imgVentas/deliciosa1.jpg" alt="Monstera deliciosa con varias hojas">
//   <img class="sizeImg" src="./imgVentas/deliciosa2.jpg" alt="Monstera deliciosa contra una pared blanca">
//   <img class="sizeImg imgNO" src="./imgVentas/deliciosa3.png"
//     alt="Monstera deliciosa contra una pared blanca y maceta blanca">
// </div>
// <p></p>
// <P class="sold">Valor</P>
// <a class="btm sell" href="#">Comprar</a>
// <a class="btm compare" href="#">Agregar</a>
// </div>
// `

// Productos

class producto {
    constructor(id,nombre,precio,stock,img, img2, img3){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.img = img;
      this.img2 = img2;
      this.img3 = img3;
    }
}

const prod1 = new producto(1, "Monstera Deliciosa", 12000, 3, "./imgVentas/deliciosa1.jpg","./imgVentas/deliciosa2.jpg","./imgVentas/deliciosa3.png");
const prod2 = new producto(2, "Ficus Pandurata", 15000, 4, "./imgVentas/pandurata1.jpg","./imgVentas/pandurata2.jpg","./imgVentas/pandurata3.jpg");
const prod3 = new producto(3, "Monstera Adansonii", 10000, 6, "./imgVentas/adasonii1.jpg","./imgVentas/adasonii2.webp","./imgVentas/adasonii3.jpg");
const prod4 = new producto(4, "Potus", 5000, 10, "./imgVentas/potus1.jpg","./imgVentas/potus2.jpg","./imgVentas/potus3.jpg");
const prod5 = new producto(5, "Maceta N°16", 2000, 15,"./imgVentas/maceta16.jpg","./imgVentas/maceta16.webp","./imgVentas/maceta163.jpg");
const prod6 = new producto(6, "Tierra Terrafertil", 5000, 0, "./imgVentas/tierra1.jpg","./imgVentas/tierra2.jpg","./imgVentas/tierra3.jpg");

const arrayProductos = [prod1,prod2,prod3,prod4,prod5,prod6]

const contenedorProductos = document.getElementById("Compra")


arrayProductos.forEach(producto => {
      const div = document.createElement("div");
      div.className="sellBox";
      div.innerHTML = `
        <h2>${producto.nombre}</h2>
        <div class="rowFlex">
        <img class="sizeImg imgNO" src="${producto.img2}">
        <img class="sizeImg" src="${producto.img}">
        <img class="sizeImg imgNO" src="${producto.img3}">
        </div>
        <P class="sold">${producto.precio}</P>
        <a class="btm sell" href="#">Comprar</a>
        <a class="btm compare" href="#">Agregar</a>
        </div>
      `

      contenedorProductos.appendChild(div)
} )
