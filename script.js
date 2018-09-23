var calcular = document.querySelector("#calcular");

calcular.addEventListener('click', function (event) {
    event.preventDefault();
    numero = parseInt(document.querySelector("#numero").value);
    resultado = document.querySelector("#resultado");

    for (var contador = 0; contador <= 10; contador++) {
        var p = document.createElement('p');
        p.innerHTML = contador + "x" + numero + "=" + numero * contador;
        resultado.appendChild(p);
    }
})


