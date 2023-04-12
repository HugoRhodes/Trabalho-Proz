function clicou() {
	var quadrado = document.getElementById("quadrado");
	quadrado.innerHTML = "CLICOU";
	quadrado.classList.remove("azul");
	quadrado.classList.remove("vermelho");
	quadrado.classList.add("verde");
}

function passou() {
	var quadrado = document.getElementById("quadrado");
	quadrado.innerHTML = "passou";
	quadrado.classList.remove("vermelho");
	quadrado.classList.remove("verde");
	quadrado.classList.add("azul");
}

function saiu() {
	var quadrado = document.getElementById("quadrado");
	quadrado.innerHTML = "SAIU";
	quadrado.classList.remove("azul");
	quadrado.classList.remove("verde");
	quadrado.classList.add("vermelho");
}
