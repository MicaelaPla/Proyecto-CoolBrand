$(document).ready(function () {

    'use strict';

    for (let i = 0; i < productos.length; i++) {

        $('#productos').append(
            '<div class="col-10 col-md-3 mx-3 my-4">' +
                '<div class="sc-product-item">' +
                '<div class="d-flex justify-content-center">' +
                    '<img class="img-fluid mb-3" id="" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '</div>' +
                    '<h4 data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn rounded-5 mt-3" id="boton_1">Agregar</button>' +
                '</div>' +
            '</div>'
        );
    }


    $('#smartcart').smartCart({

        cartItemTemplate: '<div>'+
            '<img class="img-fluid" src="{product_image}" />' +
            '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
        '</div>',

        lang: {
            cartTitle: 'Productos:',
            checkout: 'Comprar',
            clear: 'Eliminar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Carrito vacío!<br/>¿Qué te hace sentir COOL hoy?'
        }
    });
});