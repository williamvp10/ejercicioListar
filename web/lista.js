/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function mostrar() {
    $("#tabla").empty();
    $("#tabla").append(
            '<div >' +
            '<table align="center" ><tr></tr><tr><td><p>Id: </p></td>' +
            '<td><input type="number" id="id"  placeholder="Ingrese el id"/> </td>' +
            '</tr>' +
            '<tr>' +
            '<td><p>Nombre: </p></td>  ' +
            '<td><input type="text" id="nombre"  placeholder="Ingrese el nombre"/>  </td>' +
            '<tr>' +
            '<td><p>Apellido: </p></td>    ' +
            '<td><input type="text" id="apellido" placeholder="Ingrese el apellido"/> </td>' +
            '</tr>' +
            '<tr>' +
            '<td><p>Correo Acudiente: </p></td>  ' +
            '<td><input type="text" id="correoAcudiente"  placeholder="Ingrese correo del acudiente"/>  </td>' +
            '<tr>' +
            '<tr>' +
            '<td><p>Nombre Acudiente: </p></td>' +
            '<td><input type="text" id="nombreAcudiente"  placeholder="Ingrese el nombre del acudiente"/>  </td>' +
            '<tr>' +
            '<tr>' +
            '<td><p>Curso: </p></td>' +
            '<td><input type="text" placeholder="Ingrese el Curso" class="txtfield"></td>' +
            '<tr>' +
            '<tr>' +
            '<td></td><td><a type="submit" class="button" id="crear" value="Crear"> Crear</a></td>' +
            '</tr></table> ' +
            '</div>');
}