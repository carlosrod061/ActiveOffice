<?php
    //include_once "conexion.php";
    $conexion = mysqli_connect('localhost','root','','activeOffice');
    //$conexion = mysqli_connect("sql107.epizy.com", "epiz_28190862", "nsQ2IRKDvhm", "epiz_28190862_activeOffice");

    $name=$_POST['name'];
    $tel=$_POST['tel'];
    $email=$_POST['email'];
    $pass1=sha1($_POST['pass1']);
    $message=$_POST['message'];
    $question=$_POST['question'];
    $answer=$_POST['answer'];

    $sel ="SELECT * FROM usuarios WHERE emailUser = '$email'";
    //echo $sel;
    $ejecutar = mysqli_query($conexion,$sel);
    //echo $ejecutar;
    $checar_email=mysqli_num_rows($ejecutar);
    //echo $checar_email;

    if($checar_email){
        //echo '<script language="javascript">alert("Ya se ha registrado el email antes");window.location.href="../../11_contacto.php"</script>';
        //echo "<script>alert('Ya se ha registrado el email antes');</script>";
        echo '1';
        exit();
    }
    else{
       $sql = "INSERT INTO usuarios(nomUser,telefonoUser,emailUser,passwordUser,detallesUser,idTipoUsuario,question,answer)
               VALUES ('$name','$tel','$email','$pass1','$message',1,'$question','$answer')";

        //$sql = "INSERT INTO usuarios(nomUser,telefonoUser,emailUser,passwordUser,detallesUser,idTipoUsuario)
          //      VALUES ('$name','$tel','$email','$pass1','$message',1)";
                //echo $sql;
        $ejecutar = mysqli_query($conexion,$sql);
        //echo $ejecutar;
        if($ejecutar){
            //echo "<script>alert('Se regristro el usuario con exito');</script>";
            echo '2';
        }
    }
    


?>