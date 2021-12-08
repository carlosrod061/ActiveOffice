$(document).ready(function () {

    $('#botonModalCuenta6').click(function () {
        $('#modalCuenta5').modal('hide'); 
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alerta");            
        $("#modalCuenta6").modal("show");   
          
    });

    $('#btnAceptarSolicitudAprobada').click(function () {
        $('#modalCuenta6').modal('hide');  
          
    });

    $('#close').click(function () {
        $('#modalCuenta6').modal('hide'); 
      });

});


 