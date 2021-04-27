const productos = []; // base de datos <----
let contador = document.getElementById("container-card");
let incluir = document.getElementById("carrito");
let cont = document.getElementById("navigat");
let acum = 1;
const carrito =[]; 
class Producto {
  constructor(id,articulo,precio,stock){
    this.id = id ;
    this.articulo = articulo;
    this.precio = precio; 
    this.stock = stock;
  }
 }
 function Compra (articul,preci,stok) {
    this.articul = articul;
    this.preci = preci;
    this.stok= stok;
   
  }  

                        
// ingresar datos ala "bd" =O
while(productos.length < 2){
productos.push(new Producto( 
  parseInt(prompt("ingrese isbn")),
  prompt("ingrese nombre del articulo"),
  parseInt(prompt("ingrese precio del articulo")),
  parseInt(prompt("ingrese stock del articulo"))));}
 

//  / pintar cards :
    productos.forEach( function (Producto)  {
     
     contador.innerHTML+= ` 
     
     <div class="card" >  
      <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMN
            FHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" >
      </figure>
 
 <div class="contenido-card">
  <h2 id="art"> ${Producto.articulo}</h2>
   <p class="description"> <!-- descripcion -->gente en la compu</p>
    <h4 id="prec">${Producto.precio}</h4>
    <h3 id="stck">${Producto.stock}</h3>
    <button class="button" onclick="agregar(${Producto.id})"> agregar al carrito </button>
    </div>
    </div>`;}
    )
   
 
 // agregar al carrito =)

function agregar  (id)  { 
  let productoElegido = productos.find( el => el.id == id )
  if(productoElegido){
    carrito.push(productoElegido)}
  if (productoElegido.stock >= 1){
  carrito.forEach( function(Producto){  // pintar el carrito
    incluir.innerHTML += `
   
        <h1> ${Producto.articulo}<br> </h1>
        <h2> ${Producto.precio} <br> </h2> 
        <h2>  el stock disponible es: ${Producto.stock} <br> </h2> 
    <button class ="pagara" onclick="restar()"> quitar del carrito </button>
    <button class ="pagara" > pagar </button>
    `;})
  } else {
    carrito.splice(productos.find( el => el.id == id ))
  alert("ya no hay stock")
}

}
// quitar producto del carrito =(
  // function restar (carrito){ 
  //   let product = carrito.find(Producto => Producto.stock == Producto.stock)
  //   innerHTML = Producto.stock -= 1
  // }
  

  

// menu

for(i=0; i<acum; i++){
cont.innerHTML +=
`<div>
  <nav>
      <ul class="show">
       <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Index.HTML" class="la">Home</a></li>
          <li class="lp"><a href="/E-Comerce.HTML" class="la">E-Comerce</a></li>
           <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Social%20Media%20Marketing.HTML" class="la">Chekout</a></li>
            </ul>
            </nav>
         </div>
        `}  