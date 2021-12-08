<?php
require "conexion.php";
session_start();
if($_POST){
		
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $sql = "SELECT idUsuario, emailUser, passwordUser, nomUser, idTipoUsuario FROM usuarios WHERE emailUser='$email'";
    //echo $sql;
    $resultado = $conexion->query($sql);
    $num = $resultado->num_rows;
    
    if($num>0){
        $row = $resultado->fetch_assoc();
        $password_bd = $row['passwordUser'];
        
        $pass_c = sha1($password);

        if($password_bd == $pass_c){
            $_SESSION['idUsuario'] = $row['idUsuario'];
            $_SESSION['nomUser'] = $row['nomUser'];
            $_SESSION['idTipoUsuario'] = $row['idTipoUsuario'];
            $tipoUsuario = $row['idTipoUsuario'];
            if($tipoUsuario==3){
                //header("Location: 7_cuenta.html");
                //echo "<script>window.location.href ='7_cuenta.html';</script>";
                echo '1';
            }
            if($tipoUsuario==2){
            //    header("Location: Views/VistaAgendaUsuario.php");
                echo '4';
            }
            if($tipoUsuario==1){
                echo '5';
            }
            if($tipoUsuario==4){
                echo '6';
            }
            
        } 
        
        else {
        
        //echo "<script>alert('La contraseña no es correcta');</script>";
        echo '2';
        
        }
        
        
        } else {
        //echo "<script>alert('No existe el usuario');</script>";
        echo '3';
    }
    
    
    
}
?>