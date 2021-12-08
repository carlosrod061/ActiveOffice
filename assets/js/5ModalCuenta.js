$(document).ready(function () {

    function modalContrasenaIncorrecta(){
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado"); 
        $(".label1").text("La contraseña no es correcta."); 
        $(".label2").text("Intentalo de nuevo.");           
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }
    function modalUsuarioNoExiste(){
        var baseUrl="11_contacto.php";
        var link = $(".automatic").text("aquí"); 
        document.getElementById('enlace').setAttribute('href', baseUrl); 
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Error"); 
        $(".label1").text("El usuario con el que deseas iniciar sesión no existe."); 
        $(".label2").text("Intentalo de nuevo con otro usuario o registrate ");      
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }

    function modalUsuarioNoExiste2(){
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Error"); 
        $(".label1").text("El usuario con el que deseas iniciar sesión aún no se aprueba."); 
        $(".label2").text("Intentalo de nuevo o espera a que se atienda tu solicitud.");      
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }

    function modalUsuarioNoExiste3(){
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Error"); 
        $(".label1").text("Su inscripción fue denegada."); 
        $(".label2").text("Póngase en contacto con la academia.");      
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }

    function modalFormatoContrasenaIncorrecta(){
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado"); 
        $(".label1").text("La contraseña debe tener al menos 8 caracteres."); 
        $(".label2").text("Intentalo de nuevo.");           
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }

    function modalContrasenaObligatoria(){
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado"); 
        $(".label1").text("La contraseña es obligatoria."); 
        $(".label2").text("Ingresa una.");           
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }
    function modalCorreoObligatorio(){
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado"); 
        $(".label1").text("El correo electrónico es obligatorio."); 
        $(".label2").text("Ingresa uno.");           
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }

    function modalCorreoFormatoErroneo(correo){
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado"); 
        $(".label1").text("El correo "+correo+" no cuenta con un formato correcto."); 
        $(".label2").text("Asegurate de que está bien escrito.");           
        $("#modalCuenta5").modal("show"); 
        $('#btnAceptarModal').click(function () {
            $('#modalCuenta5').modal('hide'); 
          });
    }

    $('#close').click(function () {
        $('#modalCuenta5').modal('hide'); 
      });

    $('#login').click(function () {
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if(expr.test(email)){
            if(password != ""){
                if(password.length>=8){
                    $.post('login.php', {
                        "email": email,
                        "password": password
                      },function(data) {
                        console.log('procesamiento finalizado', data);
                        if(data ==1){
                            
                            window.location.href ='7_cuenta.php';
                            //console.log(data);
                            document.getElementById("email").value = "";
                            document.getElementById('password').value="";
                        }
                        else if(data == 4){
                            window.location.href ='8_cuenta.php';
                            //console.log(data);
                            document.getElementById("email").value = "";
                            document.getElementById('password').value="";
                        }
                        else if(data ==2){
                            modalContrasenaIncorrecta();
                            document.getElementById('password').value="";

                            
                        }
                        else if(data == 3){
                            modalUsuarioNoExiste();
                            document.getElementById("email").value = "";
                            document.getElementById('password').value="";
                        }
                        else if(data == 5){
                            modalUsuarioNoExiste2();
                        }
                        else if(data == 6){
                            modalUsuarioNoExiste3();
                        }
                    });
                }
                else{
                    modalFormatoContrasenaIncorrecta();
                }
            }
            else{
                modalContrasenaObligatoria();
            }
        }
        else{
            if(email==""){
                modalCorreoObligatorio();
            }
            else{
                modalCorreoFormatoErroneo(email);
            }
        }
    });
});