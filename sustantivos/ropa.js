var words = {ropa:'yoofuku',pantalon:'zubon',falda:'sukaato',camiseta:'shatsu',zapatos:'kutsu',calzones:'pantsu',
			calcetines:'kutsushita',gafas:'megane',
			anillo:'yubiwa',pulsera:'udewa',sombrero:'booshi',sueter:'seetaa',bolsa:'kaban',paraguas:'kasa'};

			var selectedIndex = 0;
			var keys = [];
			var display = false;
			var japo = false;
			
			inicio();
			
			function validateForm(){
				var texto = document.getElementById("texto");
				var elemento = document.getElementById("display");
				if(japo)
					var respuesta = keys[selectedIndex];
				else	
				var respuesta = words[keys[selectedIndex]];
			
				if(texto.value == respuesta){
			
					delete(words[keys[selectedIndex]]);
					inicio();
				}
				if(texto.value == ""){
					inicio();
				}
			
				texto.value = "";
				texto.focus();
				elemento.innerHTML = "";
			
				return false;
			}
			
			
			function inicio(){
				keys = Object.keys(words);
				console.log(keys);
				var random = Math.floor(Math.random()*keys.length);
				selectedIndex = random;
			
				var random = Math.floor(Math.random()*2);
				japo = random == 0? true:false;
				if(japo){
					var elemento = document.getElementById("pregunta");
					elemento.innerHTML = words[keys[selectedIndex]];
				}else{
					var elemento = document.getElementById("pregunta");
					elemento.innerHTML = keys[selectedIndex];
				}
			
			}
			
			
			function mostrar(){
				if(japo){
					var elemento = document.getElementById("display");
					elemento.innerHTML = keys[selectedIndex];
				}else{
					var elemento = document.getElementById("display");
					elemento.innerHTML = words[keys[selectedIndex]];
				}
				//elemento.innerHTML = Object.entries(words['above']);
			}