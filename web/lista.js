
function mostrar() {
    $.ajax({
        url: "Servlet",
        type: "GET"

    }).done(function (response) {
        var inventario = response;
        $("#informaciontablas").show();
        $("#tabla").show();
        $("#tabla").empty();
        $("#tabla").append(
                '<tr>' +
                '<th ><p>ID </p></th>' +
                '<th ><p>Nombre</p></th>' +
                '<th ><p>Apellido</p></th>' +
                '<th ><p>Celular</p></th>' +
                '</tr>'
                );
        for (var i in inventario) {
            $("#tabla").append(
                    '<tr>' +
                    '<td ><p><span>' + inventario[i].id + '</span></p></td>' +
                    '<td ><p><span>' + inventario[i].nombre + '</span></p></td>' +
                    '<td ><p><span>' + inventario[i].apellido + '</span></p></td>' +
                    '<td ><p><span>' + inventario[i].celular + '</span></p></td>' +
                    '</tr>'
                    );
        }
    });

}