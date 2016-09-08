/* 
 *  VS Designs 2015 - 2016
 *  La obtención, análisis, lectura o copia de este software sin autorización esta estrictamente prohibida
 *  Este proyecto es propiedad de VS Designs. Cualquier cambio autorizado es propiedad de la empresa, incluyendo cualquier trabajo 
 *  realizado en éste.
 */

$(document).ready(function(){
	
	$('body').append('<div class="vs-popup-bg"></div>');
	$('body').append('<div class="vs-popup-container"></div>');
		
	$('body').on('click','*[data-vs-popup-id]',function(e){
		
		e.stopPropagation();
		e.preventDefault();
		
		popupID = $(this).attr('data-vs-popup-id');
		
		//console.log('Boton de popup presionado');
		toggleReveal(popupID);
		
	});
	
	$('body').on('click','.vs-popup .vs-popup-close',function(e){
		
		e.stopPropagation();
		e.preventDefault();
		//console.log('Cerrado desde link interno ');
                //toggleReveal($(this).parents('.vs-popup').attr('id'));
                $('.vs-popup-bg').click();
        });
	
});

var popupTmpParent;
 
function toggleReveal(idElement){
			
			var element = $('#'+idElement);
			//console.log('Ejecutando funcion');
			
			if(idElement == undefined || idElement == null || element == undefined || element == null){
				//console.log('id: '+idElement);
				return false;
			} else {
				//console.log('id: '+idElement);
			}
			
			var activeBg = false;
			
			$('div[data-revealed="true"]').each(function(){
				activeBg = true;
			});
			
			//console.log('Popup#'+idElement+' abierto anteriormente :'+element.attr('data-revealed'));
			
			if(element.attr('data-revealed') == "true"){	// Si el popup seleccionado es visible
						
				//console.log('pop up abierto con anterioridad. cerrando...');
						
				// Desvanecer popup
				element.fadeOut(function(){
                                    
									//console.log('Regresando PopUp#'+idElement);
					
                                    // Devolver al elemento padre respectivo y quitar atributo de estar revelado
                                    element.insertAfter(popupTmp).attr('data-revealed',false);
									
									//console.log('eliminando div de reemplazo');
									popupTmp.remove();
									
									// Esconder Contenedor
									$('.vs-popup-container').hide();
                                    
                                });
				
				// Desvanecer fondo
				$('.vs-popup-bg').fadeOut();
				
			} else {	// Si el popup seleccionado NO es visible
							
				//console.log('pop up no abierto con anterioridad. abriendo...');
				
				if(activeBg){ // Si hay un popup visible
				
					//console.log('Regresando PopUp#'+$('div[data-revealed="true"]').attr('id'));
				
					// Devolver al elemento padre respectivo y quitar atributo de estar revelado
					$('div[data-revealed="true"]').fadeOut(function(){
						
						$('div[data-revealed="true"]').insertAfter(popupTmp).attr('data-revealed',false);
						//console.log('eliminando div de reemplazo');
						popupTmp.remove();
						
						//console.log('Obteniendo padre del elemento#'+idElement+' y agregando div vacio');
						// Obtener elemento padre del elemento seleccionado.
						element.after('<div style="display:none"></div>');
						popupTmp = element.next();
										
						//console.log('Enviando el popup al contenedor');
						// Enviar el objeto al final del documento y añadir atributo de estar revelado
						element.appendTo('.vs-popup-container').attr('data-revealed',true);
						
						//console.log('Hacer aparecer popup');
						// Aparecer popup
						element.fadeIn();
					});
			
				} else {	// Si no habia popup visible
				
					//console.log('No habia pop up abierto anteriormente');
					
					//console.log('Mostrando Container');
					
                                        // Mostrar Contenedor
                                        $('.vs-popup-container').show();
                                        
					//console.log('Agregando Hover Handler');
                                        $('.vs-popup').hover(function(e){
                                            $('.vs-popup-container').css('pointer-events','all');
                                        },function(e){
                                            $('.vs-popup-container').css('pointer-events','none');
                                        });
                                                   
					//console.log('Agregando Background');                     
					//Introducir Background
					$('div.vs-popup-bg').fadeIn().css('position','fixed');
                                        
								
					//console.log('Agregando evento');		
					// Agregar Evento
					$('body').one('click','.vs-popup-bg',function(e){	// Al hacer click la primera vez en el background
						
						
						idtmp = $('div[data-revealed="true"]').attr('id');
						
						//console.log('click en fondo');
						//console.log(e);
						if(idtmp == undefined || idtmp == null){
							//console.log(idtmp);
						} else { toggleReveal(idtmp); }
						
						
					});
					
					//console.log('Obteniendo padre del elemento#'+idElement+' y agregando div vacio');
					// Obtener elemento padre del elemento seleccionado.
					element.after('<div style="display:none"></div>');
					popupTmp = element.next();
									
					//console.log('Enviando el popup al contenedor');
					// Enviar el objeto al final del documento y añadir atributo de estar revelado
					element.appendTo('.vs-popup-container').attr('data-revealed',true);
					
					//console.log('Hacer aparecer popup');
					// Aparecer popup
					element.fadeIn();
				}
				
				// Focus element (iPhone)
				element.click();
				
			}
			
	
}
