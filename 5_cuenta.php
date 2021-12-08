
<!-- CUENTA -->
<?php
	//require "login.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Active Office - Inicio</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/isotipo.png" rel="icon">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="assets/css/login.css" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  
</head>

<body>

  <!-- Header -->
  <header id="header" class="fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <!-- <h1 class="logo"><a href="index.html">Active Office</a></h1> -->
      <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="2_nosotros.html">Nosotros</a></li>
          <li><a href="3_disciplinas.html">Disciplinas</a></li>
          <li><a href="4_equipo.html">Equipo</a></li>
          <li class="active"><a href="5_cuenta.php">Cuenta</a></li>
          <li><a href="11_contacto.php">Contacto</a></li>
        </ul>
      </nav><!-- .nav-menu -->

      <div class="header-social-links">
        <a href="https://www.facebook.com/Active-Office-103984211378901" class="facebook" target="_blank">
          <i class="icofont-facebook"></i>
        </a>
        <a href="https://www.instagram.com/activeoffice.ao/?hl=es-la" class="instagram" target="_blank">
          <i class="icofont-instagram"></i>
        </a>
      </div>
    </div>
  </header>
  <!-- End Header -->

  <!-- Section -->
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="assets/img/login.jpg" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="assets/img/isotipo.png" alt="logo" class="logo">
              </div>
              <p class="login-card-description">Inicia Sesión</p>
              <form  method="">
                  <div class="form-group">
                    <label for="email" class="sr-only">Correo</label>
                    <input type="text" name="email" id="email" class="form-control" placeholder="Email">
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Contraseña</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="***********">
                  </div>
                  <div class="text-center"><input type="button" name="login" id="login" class="btn btn-block login-btn mb-4" value="Entrar"></input></div>
                </form>
                <a href="recuperacionContra/recuperar.php" class="forgot-password-link">¿Olvidaste tu contraseña?</a><br>
                <p class="login-card-footer-text">¿No tienes una cuenta? Ve ahora a <a href="11_contacto.php" class="text-reset"><b>inscribirte</b></a> para obtener una!</p>
                <nav class="login-card-footer-nav">
                  <a href="#!">Términos de uso.</a>
                  <a href="#!">Política de Privacidad.</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- End -->

  <!-- Footer -->
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Active Office</span></strong>. Todos los derechos reservados. 
      </div>
      <div class="credits">
        Diseñado por CAAS</a>
      </div>
    </div>
  </footer>
  <!-- End  Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script src="assets/js/5ModalCuenta.js"></script>


  <!--MODAL 5 Cuenta5 -->
  <div class="modal fade" id="modalCuenta5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <center>
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" id="close">X
                </button>
            </div>
            <form id="formCitas">    
                <div class="modal-body">
                    <div class="form-group">
                      <label for="nombre" class="col-form-label">
                        
                          <label class="label1"></label>
                          <br>
                          <label class="label2"></label>
                          <br>
                          <a rel="nofollow" id="enlace" href="#" class="automatic"></a>
                        
                      </label>
                      <div class="text-center">
                        <button class="btn btn-success" type="button" name="btnAceptarModal" id="btnAceptarModal">Aceptar</button>
                      </div>
                    </div>          
                </div>
            </form>    
        </div>
          </center>
    </div>
</div> 

</body>
</html>
