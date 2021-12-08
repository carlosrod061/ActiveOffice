$(document).ready(function () {
    if (navigator.geolocation) { //check if geolocation is available
        var latitude;
        var longitude;
        navigator.geolocation.getCurrentPosition(function (position) {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            var map = L.map('map').setView([latitude, longitude], 100);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


            L.marker([25.677621592958456, -100.29497681603686]).addTo(map)
            .bindPopup('Active Office')
            .openPopup();

            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('Tu localización')
                .openPopup();

           

                L.Routing.control({
                    waypoints: [
                      L.latLng(latitude, longitude),
                      L.latLng(25.677621592958456, -100.29497681603686)
                    ]
                  }).addTo(map);

        });
    }

    

    function modalContraseniasNoCoinciden() {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado");
        $(".label1").text("Las constraseñas no coinciden");
        $(".label2").text("Intentalo de nuevo");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }
    function modalResgistrado() {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Excelente");
        $(".label1").text("El usuario se ha registrado con éxito");
        $(".label2").text("");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
            window.location.href = '5_cuenta.php';
            //location.reload(); 
        });
    }

    function modalNoResgistrado() {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("El usuario ya está registrado");
        $(".label1").text("El correo que deseas ingresar ya ha sido registrado antes, intenta con otro.");
        $(".label2").text("");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }

    function modalFormatoCorreoIncorrecto(email) {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado");
        $(".label1").text("El formato del correo " + email + " es erróneo.");
        $(".label2").text("Ingresa una válido");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }

    function modalFormatoNombreIncorrecto(name) {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado");
        $(".label1").text("El nombre " + name + " es muy corto.");
        $(".label2").text("El nombre debe tener mínimo 4 letras, intentalo de nuevo");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }

    function modalFormatoTelefonoIncorrecto(tel) {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado");
        $(".label1").text("El teléfono " + tel + " es muy corto.");
        $(".label2").text("El teléfono debe tener mínimo 10 dígitos, intentalo de nuevo");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }

    function modalFormatoContrasIncorrecto() {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado");
        $(".label1").text("La contraseña es muy corta.");
        $(".label2").text("La contraseña debe tener mínimo 8 caracteres, intentalo de nuevo");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }

    function modalFormatoUltimoCampoIncorrecto() {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado");
        $(".label1").text("El texto del último campo es muy corto.");
        $(".label2").text("El campo debe tener mínimo 7 caracteres, intentalo de nuevo");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }

    function modalCampoMensajeObligatorio(campo) {
        $(".modal-header").css("background-color", "#34b7a7");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Cuidado");
        $(".label1").text("Obligatorio");
        $(".label2").text("El " + campo + " es obligatorio");
        $("#modalContacto12").modal("show");
        $('#btnAceptarModal').click(function () {
            $('#modalContacto12').modal('hide');
        });
    }



    $('#close').click(function () {
        $('#modalContacto12').modal('hide');
    });

    $('#btnInscripcion').click(function () {

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var tel = document.getElementById('tel').value;
        var pass1 = document.getElementById('pass1').value;
        var pass2 = document.getElementById('pass2').value;

        var question = document.getElementById('question').value;
        var answer = document.getElementById('qu').value;

        var message = document.getElementById('message').value;
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var camp = "";
        //console.log(name.length);
        //nameContado = name.length;
        if (name.length >= 4) {
            if (expr.test(email)) {
                if (tel.length >= 10) {
                    if (pass1.length >= 8 && pass2.length >= 8 && pass1 == pass2) {
                        if (message != "" && message.length >= 7) {
                            if (answer != "" && answer.length >= 3) {
                                //alert("Todos los campos se validaron bien");
                                $.post('assets/js/registro.php', {
                                    "name": name,
                                    "tel": tel,
                                    "email": email,
                                    "pass1": pass1,
                                    "message": message,
                                    "question": question,
                                    "answer": answer
                                }, function (data) {
                                    console.log('procesamiento finalizado', data);
                                    if (data == 1) {
                                        modalNoResgistrado();
                                        document.getElementById("email").value = "";
                                    }
                                    else if (data == 2) {

                                        modalResgistrado();
                                        document.getElementById('name').value = "";
                                        document.getElementById('email').value = "";
                                        document.getElementById('tel').value = "";
                                        document.getElementById('pass1').value = "";
                                        document.getElementById('pass2').value = "";
                                        document.getElementById('message').value = "";
                                    }
                                });
                            }
                            else {
                                modalFormatoUltimoCampoIncorrecto();
                            }
                        }
                        else {
                            camp = "último"
                            modalCampoMensajeObligatorio(camp);
                        }
                    }
                    else {
                        if (pass1 == "" || pass2 == "") {
                            camp = "campo de las contraseñas"
                            modalCampoMensajeObligatorio(camp);

                        }
                        else {
                            if (pass1.length >= 8 && pass2.length >= 8 && pass1 != pass2) {
                                modalContraseniasNoCoinciden();
                                document.getElementById("pass1").value = "";
                                document.getElementById("pass2").value = "";
                            }
                            else if (pass1.length < 8 || pass2.length < 8) {
                                modalFormatoContrasIncorrecto();
                            }

                        }

                    }

                }
                else {
                    if (tel == "") {
                        camp = "teléfono"
                        modalCampoMensajeObligatorio(camp);
                    }
                    else {
                        modalFormatoTelefonoIncorrecto(tel);
                    }
                }

            }
            else {
                if (email == "") {
                    camp = "correo electrónico"
                    modalCampoMensajeObligatorio(camp);
                }
                else {
                    modalFormatoCorreoIncorrecto(email);
                }
            }

        }
        else {
            if (name == "") {
                camp = "nombre"
                modalCampoMensajeObligatorio(camp);
            }
            else {
                modalFormatoNombreIncorrecto(name);
            }
        }

        //if ( !expr.test(email) ){//COMPRUEBA MAIL
        //    modalFormatoCorreoIncorrecto(email)
        //alert("Error: La dirección de correo " + email + " es incorrecta.");
        //}

        //console.log(name.length);

        //if(name.lenght>=4 && email.lenght){

        //}

        //if(pass1 != pass2){
        //alert('Las constrasenas no coinciden');
        //   modalContraseniasNoCoinciden()
        //   document.getElementById("pass1").value = "";
        //   document.getElementById("pass2").value = "";

        // }

        //if(pass1 == pass2){
        /** 
        $.post('assets/js/registro.php', {
            "name": name,
            "tel": tel,
            "email": email,
            "pass1": pass1,
            "message": message
          },function(data) {
            console.log('procesamiento finalizado', data);
            if(data ==1){
                modalNoResgistrado();
                document.getElementById("email").value = "";
            }
            else if(data ==2){
                
                modalResgistrado();
                
            }
        });
        */
        //}



    });


});


