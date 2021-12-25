//CONSIGNA: realiza script que manipulando un array de objetos,  genere de forma dinámica //una sección del html.
//Ejemplo: genera títulos y párrafos a partir de un array de “publicaciones”
//genera cards y botones a partir de un array de productos.


proustBooks = [
  { id: 1, title: "From Swann", price: 500, year: 1913, pages: 2341 },
  { id: 2, title: "In the shade of young girls in bloom", price: 600, year: 1919, pages: 2100 },
  { id: 3, title: "Le Côté de Guermantes", price: 700, year: 1920, pages: 2200 },
  { id: 4, title: "Sodom and Gomorrah I and II", price: 800, year: 1921, pages: 2441 },
  { id: 5, title: "The Prisoner", price: 900, year: 1923, pages: 2341 },
  { id: 6, title: "Albertine disparue", price: 1000, year: 1925, pages: 2341 },
  { id: 7, title: "Time Rediscovered", price: 1500, year: 1927, pages: 41 },
];

//apuntamos al nodo contenedor con variable

let bookContainer= document.getElementById("bookContainer");


//hacemos for of loop para ingresar a cada objeto del array
for (book of proustBooks ) {
    //creamos sub contenedor
let bookCard = document.createElement("div");
    //creamos contenido html a ese subcontenedor 
bookCard.innerHTML = 
`<h3>Titulo: ${book.title}</h3>
<p> precio: $${book.price}.00</p>
<p> páginas: ${book.pages}</p>
<p> año: ${book.year}</p>`; 
// hacemos de ese subcontenedor, hijo del nodo contenedor declarado al principio.
bookContainer.appendChild(bookCard)
}

//Creamos estilos a subcontenedor bookCard que es un "div". 
var hoja = document.createElement('style')
hoja.innerHTML = "div {border: 2px solid black; background-color: aliceblue; display: inline-table; margin: 20px; height : 100px; padding: 50px;}";
document.body.appendChild(hoja);
