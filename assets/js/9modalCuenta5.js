$(document).ready(function () {

    $('#botonModalCuenta5').click(function () {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Detalles de la solicitud");            
        $("#modalCuenta5").modal("show");  
        
    });

    $('#close').click(function () {
        $('#modalCuenta5').modal('hide'); 
      });

});



 