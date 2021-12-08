<?php
//$conexion = mysqli_connect("localhost", "root", "", "activeOffice");

try {
    //Se crea la cadena de conexion a PhpMyAdmin con la BD sistema.
    $conexion = mysqli_connect("localhost", "root", "", "activeOffice");
    //$conexion = mysqli_connect("sql107.epizy.com", "epiz_28190862", "nsQ2IRKDvhm", "epiz_28190862_activeOffice");
    
}
catch(mysqli $err) {
    //Si no se conecta a la BB muestra el estado fallido de la conexion.
    echo "<br>ERROR: No se pudo conectar a la base de datos PhpMyAdmin: " .$err->getMessage();
}
 
//if (mysqli_connect_errno())
//{
//    printf("Error en la conexion: %s", mysqli_connect_error());
//    exit;
//}

 
//$insert_query = "INSERT INTO usuarios(nomUser,telefonoUser,emailUser,passwordUser,detallesUser)
//VALUES ('Prueba',123,'carlos@hotmail.com','123123','hola')";
  
//  echo $insert_query;
// run the insert query
//If (mysqli_query($con, $insert_query)) {
//    echo 'Record inserted successfully.';
//}
  
// close the db connection
//mysqli_close($con);
?>