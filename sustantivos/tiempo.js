var words = {dia:'nichi',mes:'tsuki',año:'nen',siglo:'seiki',hoy:'kyoo',mañana:'ashita',pasadoMañana:'asatte',ayer:'kinoo',semana:'shuu',
			anteAyer:'ototoi',estaSemana:'konshuu',semanaPasada:'senshuu',semanaSiguiente:'raishuu',esteMes:'kongetsu',mesPasado:'sengetsu',
			mesSiguiente:'raigetsu',esteAño:'kotoshi',añoPasado:'kyonen',añoSiguiente:'rainen',estaMañana:'kesa',estaTarde:'konya',
			estaNoche:'konban',dia:'hi',noche:'yoru',tarde:'gogo',mañana:'gozen',anoche:'yuube'};

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