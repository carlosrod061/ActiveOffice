<?php
    require "8_cuentaController.php";
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "activeOffice";
    $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    // Llenado de Modal.
    $idSol = $_POST["private"];
    $_SESSION['idUsuario'] = $idSol;
    $sql_query = "SELECT idUsuario,nomUser,telefonoUser,emailuser, detallesUser FROM usuarios WHERE idUsuario=$idSol";
    $consulta=mysqli_query($conn,$sql_query) or die(mysqli_error());
    $arreglo=mysqli_fetch_array($consulta) or die(mysqli_error());
    $usuario = $arreglo[0];
    $nombre=$arreglo[1];
    $tel=$arreglo[2];
    $correo=$arreglo[3];
    $detalle=$arreglo[4];

    // Ejecutar modificación de solicitud.
    if(isset($_POST["btnLogA"]))
    {
      // Aceptar Solicitud 
      $sql="UPDATE usuarios SET idTipoUsuario='3' WHERE idUsuario=$idSol";
      $ejecutar = mysqli_query($conn,$sql);
      header("Location: 8_cuenta.php");
    }
    else if(isset($_POST["btnLogB"]))
    {
      // Cancelar Solicitud 
      $sql="UPDATE usuarios SET idTipoUsuario='4' WHERE idUsuario=$idSol";
      $ejecutar = mysqli_query($conn,$sql);
      header("Location: 8_cuenta.php");
    }
    // Cancelar Operación
    else if(isset($_POST["btnLogC"]))
    { header("Location: 8_cuenta.php"); }
    else
    { $msg=$php_errormsg; }
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Active Office - Inicio</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/isotipo.png" rel="icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="assets/css/cuenta3Style.css" rel="stylesheet">

  <script>
    function funcionJS()
    { alert("Su solicitud fue modificada exitosamente."); }
  </script>
</head>

  <!-- Header -->
  <header id="header" class="fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <!-- <h1 class="logo"><a href="index.html">Active Office</a></h1> -->
      <a href="logout.php" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>

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

<br><br>
<main id="main">
  <div id="modalCuenta5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background:#34b7a7;color:white;">
          <h5 class="modal-title" id="exampleModalLabel">Detalles de la Solicitud</h5>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <div class="col-lg-12 mt-5 mt-lg-0">
              <div class="row">
                <div class="col-md-12 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" value="<?php echo "$nombre";?>" disabled/>
                  <div class="validate"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 form-group mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Correo electrónico" data-rule="email" value="<?php echo "$correo";?>" disabled/>
                <div class="validate"></div>
              </div>
              <div class="col-lg-6 form-group mt-3">
                <input type="text" class="form-control" name="phone" id="phone" placeholder="Teléfono" data-rule="minlen:4" value="<?php echo "$tel";?>" disabled/>
                  <div class="validate"></div>
              </div>
            </div><br>
            <div class="row">
              <div class="col-md-12 form-group">
                <input type="text" name="clase" class="form-control" id="clase" placeholder="Clases que deseas tomar, ¿Algo que debamos saber de ti?" data-rule="minlen:4" value="<?php echo "$detalle";?>" disabled/>
                <div class="validate"></div>
              </div>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" data-rule="required" placeholder="Escriba las observaciones aquí **" ></textarea>
                <div class="validate"></div>
            </div><br>
            <div class="text-center">
            <form id="form1" method="post" autocomplete="off">
              <input type="hidden" id="private" name="private" value="<?php echo $idSol; ?>">
              <input id="btnLogA" class="btn btn-primary" name="btnLogA" type="submit" onclick="funcionJS();" value="Aceptar"/>
              <input id="btnLogB" class="btn btn-danger" name="btnLogB" type="submit" onclick="funcionJS();" value="Denegar"/>
              <input id="btnLogC" class="btn btn-secondary" name="btnLogC" type="submit" value="Cancelar"/>
            </form>
            </div>
          </div>
        </div>          
      </div>    
    </div>
  </div> 
</main>

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
  <script src="assets/js/9modalCuenta5.js"></script>
  <script src="assets/js/10modalCuenta6.js"></script>

</body>
</html>