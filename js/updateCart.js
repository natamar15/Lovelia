$(document).ready(() => {

    let addedProducts = [];

    for (let index in localStorage) {
        if (typeof localStorage[index] == "string") {
            addedProducts.push(JSON.parse(localStorage[index]));
        }
    }


    let container = $("#containerProductos");

    if (addedProducts.length <= 0) {
        container.html("<p class='empty'>No has agregado ningun producto aún, mira lo que puedes comprar <a href='productos.html'>aquí</a></p> <div class='imgCarrito'><img src='img/carrito.png' alt='imagen carrito'></div>");
    } else {
        addedProducts.forEach((product) => {

            let card = `
            <div class="card" style="width: 16rem;">
                <img src="img/${product.image}" class="card-img-top" alt="${product.image}">
                <div class="card-body">
                    <strong class="centrado til">${product.name}</strong>
                    <p class="card-text centrado">
                        <span>${product.price}</span>
                        <select class='cantidad'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </p>
                    <button class="comprar">Comprar</button>
                    <button class="delete">Eliminar</button>
                </div>
            </div>
            `;
    
            container.append(card);
        });
    }

    // Quitar producto del carrito
    $(".delete").click(function() {
        let productName = $(this).siblings()[0].innerHTML;

        localStorage.removeItem(productName);

        location.reload();
    });

    // Total segun cantidad elegida
    $(".comprar").click(function(){
        let total = parseInt($(this).siblings()[1].children[0].children[0].innerHTML);
        let cantidad = +$(this).siblings()[1].children[1].selectedOptions[0].innerText;
        let pagar = $(".total");
        pagar.text(total*cantidad);
        $("#pagoForm").dialog();
    });

});
