

        let numero = ['1','2','3','4','5','6','7','8','9','10','J'];
		let clase = ['corazon','trebol','pica','diamante'];
        
        let pNumero = numero.length; 
        let preguntaNumero=Math.round(Math.random()*(pNumero-1)); 

        let pClase = clase.length; 
        let preguntaClase=Math.round(Math.random()*(pClase-1));

        function mostrarPreguntanumero() { 
        let numero1 = document.write(numero[preguntaNumero]);
    	};

        function mostrarPreguntaclase() { 
        document.write(clase[preguntaClase]);};

        mostrarPreguntanumero()
        mostrarPreguntaclase()