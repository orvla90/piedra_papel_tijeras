
let piedra = document.getElementById('piedra');
let papel = document.getElementById('papel');
let tijeras = document.getElementById('tijeras');
let interrogacion = document.getElementById('interrogacion');
let eleccion_ordenador;
let resultado = document.getElementById('resultado');
let puntuacion_actual = document.getElementById('puntuacion_actual');
let puntuacion_mas_alta = document.getElementById('puntuacion_mas_alta');
let racha = true;
let puntos_actuales = 0;
let maxima_puntutacion = 0;
let turno_ordenador = () => {
	let eleccion = Math.floor(Math.random()*3);
	if (eleccion == 0) {
		eleccion_ordenador = piedra;
	}else if (eleccion == 1) {
		eleccion_ordenador = papel;
	}else if (eleccion == 2) {
		eleccion_ordenador = tijeras;
	};
	
};
let partida = (eleccion) => {
	turno_ordenador();
	interrogacion.src = eleccion_ordenador.src;
	if ((eleccion.src === piedra.src && eleccion_ordenador.src == tijeras.src) || (eleccion.src == papel.src && eleccion_ordenador.src == piedra.src) || (eleccion.src == tijeras.src && eleccion_ordenador.src == papel.src)) {
		resultado.innerHTML = '¡Has ganado!';
		interrogacion.style.backgroundColor = 'green';
		racha = true;
		puntuaciones(racha);
	}else if (eleccion == eleccion_ordenador) {
		resultado.innerHTML = 'Tablas';
		interrogacion.style.backgroundColor = 'darkblue';
	}else {
		resultado.innerHTML = 'Has perido';
		interrogacion.style.backgroundColor = 'red';
		racha = false;
		puntuaciones(racha);
	};

};
let puntuaciones = (racha) => {
	if (racha) {
		puntos_actuales++;
		if (puntos_actuales > maxima_puntutacion) {
			maxima_puntutacion = puntos_actuales;
		};
	}else {
		racha = true;
		puntos_actuales = 0;
	}
	puntuacion_actual.innerHTML = puntos_actuales;
	puntuacion_mas_alta.innerHTML = maxima_puntutacion;
};
piedra.onclick = () => {
	piedra.style.backgroundColor = 'darkgreen';
	interrogacion.style.backgroundColor = '';
	piedra.style.opacity = '0.75';
	papel.style.backgroundColor = '';
	papel.style.opacity = '1';
	tijeras.style.backgroundColor = '';
	tijeras.style.opacity = '1';
	partida(piedra);

};
papel.onclick = () => {
	interrogacion.style.backgroundColor = '';
	piedra.style.backgroundColor = '';
	piedra.style.opacity = '1';
	papel.style.backgroundColor = 'darkgreen';
	papel.style.opacity = '0.75';
	tijeras.style.backgroundColor = '';
	tijeras.style.opacity = '1';
	partida(papel);
};
tijeras.onclick = () => {
	interrogacion.style.backgroundColor = '';
	piedra.style.backgroundColor = '';
	piedra.style.opacity = '1';
	papel.style.backgroundColor = '';
	papel.style.opacity = '1';
	tijeras.style.backgroundColor = 'darkgreen';
	tijeras.style.opacity = '0.75';
	partida(tijeras);
};
