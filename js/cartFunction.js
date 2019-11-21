$(document).ready(() => {
   
    $(".btn").click(function() {

        let esto = $(this);

        let productName = esto.siblings()[0].innerHTML;
        let productPrice = esto.siblings()[1].innerHTML;
        let productImage = esto.parent().parent().children()[0];
        let imagePath = productImage.alt; //El nombre del archivo esta en los alt de las imagenes, la ruta se pasa en el updateCart

        if (imagePath.includes("img,")) {
            imagePath = imagePath.substr(4);
        }

        console.log(imagePath)

        let productToAdd = {
            name: productName,
            price: productPrice,
            image: imagePath
        };

        localStorage.setItem(productName, JSON.stringify(productToAdd));
        alert("¡Producto agregado!");

    });

});