<?php require_once('header.php'); ?>
		<title>C o n t a c t o</title>

		
        <SCRIPT LANGUAGE="JavaScript">
            $(document).ready(function(){
                $("#contacto").validate({
                 rules: {
         			nombre: {   required: true,  },
         			mail:{ required: true, },
         			msj:{ required: true, },    
        		},
        		messages: {
          			nombre: { required: "Debe ingresar el Nombre ",},
          			mail:{ required: "Debe ingresar un E-mail",},
          			msj:{ required: "Debe ingresar un Mensaje",},
        		}
      			});
		    });
    	</script>
<?php require_once('menu_content.php'); ?>
							<h2>
								<b>Contacto</b>
							</h2>
							<p>
								<b>Tel: 0379 - 4464831</b><br>
								<b>Cel: 0379 - 15 4 905861</b><br>
								<b>E-Mail: fabianbenitez_87@hotmail.com</b><br>
								<b><a href="https://www.facebook.com/BlackBoxSoluciones/" rel="nofollow">/ BlackBoxSoluciones<a></b> <img class="left" src="images/face.jpg" alt="" /><br>
							</p>
							<!--<img class="left" src="images/pic1.jpg" width="180" height="140" alt="" />-->
							<table>
								<form id="contacto" name="contacto" action="mailto:fabianbenitez_87@hotmail.com" method="POST">
									<tr>
										<td>Nombre y Apellido:</td>
									</tr>	
									<tr>
										<td><input type="text" name="nombre" id="nombre" size="35"></td>
									</tr>
									<tr>
										<td>E-Mail:</td>
									</tr>
									<tr>
										<td><input type="text" name="mail" id="mail" size="35"></td>
									</tr>
									<tr>
										<td>Mensaje:</td>
									</tr>	
									<tr>
										<td><textarea name="msj" rows="5" cols="40">  </textarea></td>
									</tr>
									<tr>
										<td><input type="Checkbox" name="mail" value="S"> Deseo recibir E-Mail <p></td>
									</tr>
									<tr>
										<td><input type="submit" name="envio" value="Enviar"></td>
									</tr>
								</form>
							</table>
						</div>
<?php require_once('footer.php'); ?>