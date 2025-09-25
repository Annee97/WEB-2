console.log("Carrito de compras");
function mostrarMenu(){
    let carrito =[];
    let total = 0;
    let opcion;
    do {
        opcion = prompt (
            "Selecciona una opción para añadir al carrito:\n" +
            "1.-  Camisa, precio: 300\n"+
            "2.- Pantalón, precio: 500\n"+
            "3.- Zapatos, precio: 800\n"+ 
            "4.- Sombrero, precio: 200\n"+
            "5.- Ver carrito y finalizarlo\n"
               );
               switch(opcion) {
                case "1":
                carrito.push("Camisa - $300");
                total += 300;
                alert("Camisa añadida al carrito de compra.");
                break;
                case "2":
                carrito.push("Pantalon - $500");
                total += 500;
                alert("Pantalon se agrego al carrito de compra.");
                break;
                case "3":
                    carrito.push("Zapatos -$800");
                    total += 800;
                    alert("Zapatos se agregaron al carrito de compra.");
                    break;
                case "4":
                    carrito.push("Sombrero - $200");
                    total += 200;
                    alert ("Sombrero se agrego al carrito de compra.");
                    break;
                        case "5":
                            if (carrito.length===0){
                                alert ("Tu carrito esta vacio.");
                            }
                                else{
                                    let resumen = "Has comprado:\n";
                                carrito.forEach(item=> {
                                    resumen += "\nTotal:  $" + total;
                                    alert(resumen);
                                }
                                break;
                                    default:
                                        alert ("Opcion no valida, por favor elige una opcion que aparece en el menu")
                                );}

            
               }
    }while (opcion !=="5");
    console.log("Gracias por tu compra");
}
mostrarMenu();