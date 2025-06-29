//Genero el array para los articulos
var array_articulos = new Array();
var i = 1;
$(document).ready(function(){
	$('#codigo').bind('keyup', function (e) {
  		var key = e.keyCode || e.which;
  		if (key === 13) {
			
		
		var codigo = $("#codigo").val();
		var cantidad = $("#cantidad").val();	
		
		if(cantidad == "" || cantidad == 0){ alert('Debe Ingresar una Cantidad Valida!'); return false;}
		if(codigo == ""){ alert('Debe Ingresar un Codigo de Articulo valido!'); return false;}

		var categoria = $('#categoria').val();

		if(categoria == 1){

			$.post('agregar_articulo.php', 'case=1&codigo='+codigo+'&cantidad='+cantidad, function(data) {
									if(data == 0){
										alert('El Codigo: '+codigo+', No esta registrado!');
									}else{																
										if(comprobar_array(codigo)){																						
											$("#art_"+i).remove();
											$("#articulos").append('<tr id="art_'+i+'">'+data+'</tr>');
											i++;
										}else{
											cantidad = parseFloat($("#cant_"+codigo).html()) + parseFloat(cantidad);
											$("#cant_"+codigo).html(cantidad);
											var precio_unitario = $('#precio_uni_'+codigo).html();
											$('#sub_'+codigo).html(parseFloat(precio_unitario) * parseFloat(cantidad));											
										}									
										var sub_total = $('#sub_'+codigo).html();
										
										agregar_array(codigo,cantidad,sub_total);
									}																		
								});		



		}
		if(categoria == 2){

		$.post('agregar_articulo.php', 'case=3&codigo='+codigo+'&cantidad='+cantidad, function(data) {			
				if(data != 0){
					alert(data);
				}
				else{

					$.post('agregar_articulo.php', 'case=1&codigo='+codigo+'&cantidad='+cantidad, function(data) {
									if(data == 0){
										alert('El Codigo: '+codigo+', No esta registrado!');
									}else{																
										if(comprobar_array(codigo)){																						
											$("#art_"+i).remove();
											$("#articulos").append('<tr id="art_'+i+'">'+data+'</tr>');
											i++;
										}else{
											cantidad = parseFloat($("#cant_"+codigo).html()) + parseFloat(cantidad);
											$("#cant_"+codigo).html(cantidad);
											var precio_unitario = $('#precio_uni_'+codigo).html();
											$('#sub_'+codigo).html(parseFloat(precio_unitario) * parseFloat(cantidad));											
										}									
										var sub_total = $('#sub_'+codigo).html();
										
										agregar_array(codigo,cantidad,sub_total);
									}																		
								});		



				}	
			
		}
		);

		}//fin del else.. cuando es categoria 2
		

				
  		};//Cierro el IF
	});
	
	
	
	//CARGA EN LA BASE DE DATOS LOS PARAMETROS!
	
	$('#fin').click(function(){
		if(confirm('¿Desea Finalizar La Compra?')){
			var id_cliente_provee = $('#id_cliente_provee').val();
			var id_cabecera = $('#id_cabecera').val();			
			var id_sucursal = $('#id_sucu').val();
			var categoria = $('#categoria').val();
			//alert('A' + id_cliente_provee + 'b:' + id_cabecera + 'c_' + id_sucursal+ 'd' + categoria);

			
			var misArticulos = array_articulos.join(); //CONVIERTO EL MEGA ARRAY, EN STRING SEPARADO POR COMA!, luego uso EXPLODE y lo vuelvo array en php
			
			$.post('agregar_articulo.php','case=2&id_categoria='+categoria+'&id_sucursal='+id_sucursal+'&id_cliente_proveedor='+id_cliente_provee+'&id_cabecera='+id_cabecera+'&articulo='+misArticulos, function(data){
				window.location = 'cabecera.php?categoria='+categoria;
			});
			
		
		}
	});//cierro el #FIN
});   


//Descuenta o elimina, si posee 1 en cantidad!
function descontar_articulos(codigo){
	var can_array = array_articulos[codigo];
	var cantidad = can_array[0];//cantidad
	
	if(cantidad == 1){
		eliminar_articulo_array(codigo); //Elimina Registro		
	}else{
		$('#cant_'+codigo).html(cantidad-1);
		var precio_unitario = $('#precio_uni_'+codigo).html();
		$('#sub_'+codigo).html(parseFloat(precio_unitario) * parseFloat(cantidad-1));
		
		var sub_total = $('#sub_'+codigo).val(); //EL SUB TOTAL QUE OBTENGO DESPUES DE ELIMINAR
		
		agregar_array(codigo,(cantidad-1),sub_total);//Resta 1 en Cantidad
	}
}//cierro la funcion
						
//Eliminar articulo
function eliminar_articulos(codigo){
	eliminar_articulo_array(codigo); //Elimina Registro		
}


////////////////////////////////////    SECCION ARRAY    //////////////////////////////////////////////////////////////////

//AGREGO ELEMENTOS AL ARRAY
function agregar_array(codigo,cantidad, sub_total){	
	array_articulos[codigo] = new Array(codigo,cantidad,sub_total);
}

//Compruebo la existencia del codigo si se repite en el ARRAY!
function comprobar_array(codigo){
	var ok = true;		
	if(array_articulos[codigo]){
		ok = false;				
	}						
	return ok;
}
	
//Elimina el ARTICULO del array
function eliminar_articulo_array(codigo){			
	delete array_articulos[codigo];
	delete array_articulos[codigo];
	
	var td = document.getElementById('cant_'+codigo);
	remove(td);	
}
////////////////////////////////////    FIN SECCION ARRAY    //////////////////////////////////////////////////////////////////

function remove(t){
	var td = t.parentNode;
	var tr = td.parentNode;	
	tr.removeChild(td);
}

