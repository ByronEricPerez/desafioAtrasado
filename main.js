class prenda {
    constructor(tipo,talle,precio){
        this.tipo = tipo;
        this.talle = talle;
        this.precio = precio;
    }  
}
let prenda1 = new prenda ("pantalon","XL",3000);
let prenda2 = new prenda ("camisa","L",2000);
let prenda3 = new prenda ("campera","XL",5000);
let prenda4 = new prenda ("camiseta","XXL",1200);
let prenda5 = new prenda ("chaleco","M",3500);

let Galeria = [prenda1,prenda2,prenda3,prenda4,prenda5];

console.log(Galeria);

let Bolsa = [];
let caja = 0;

function master(){
    let opcion = listaDeProductos();

    while(opcion != 0){
        switch(opcion){
            case 1:
                alert("Agregaste a tu bolsa " + Galeria[0].tipo)
                agregarProducto(Galeria[0]);
                caja = caja + Galeria[0].precio;
                break;

            case 2:
                alert("Agregaste a tu bolsa " + Galeria[1].tipo)
                agregarProducto(Galeria[1]);
                caja = caja + Galeria[1].precio;
                break;

            case 3:
                alert("Agregaste a tu bolsa " + Galeria[2].tipo)
                agregarProducto(Galeria[2]);
                caja = caja + Galeria[2].precio;
                break;

            case 4:
                alert("Agregaste a tu bolsa " + Galeria[3].tipo)
                agregarProducto(Galeria[3]);
                caja = caja + Galeria[3].precio;
                break;

            case 5:
                alert("Agregaste a tu bolsa " + Galeria[4].tipo)
                agregarProducto(Galeria[4]);
                caja = caja + Galeria[4].precio;
                break;

            default:
                alert("Error");
                break;
        }

    opcion = listaDeProductos();    
    }

console.log(Bolsa);
console.log(suma);
}

function listaDeProductos(){
    let opcion = parseFloat(prompt("Que producto desea comprar? presione 0 para salir:\n\n 1- Pantalon, presione 1\n\n 2- Camisa, presione 2\n\n 3- Campera, presione 3\n\n 4- Camiseta, presione 4\n\n 5- Chaleco, presione 5"));
    return opcion;
}

function agregarProducto(producto){
    Bolsa.push(producto);
}

master();