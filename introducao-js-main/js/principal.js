var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  // var peso = tdpeso.textContent;
  //console.log(peso);

  var altura = paciente.querySelector(".info-altura").textContent;
  //var altura = tdaltura.textContent;
  //console.log(altura);

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    // pesoEhValido = false;
    tdImc.textContent = " Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    //alturaEhValida = false;
    tdImc.textContent = "altura inválido";
    paciente.classList.add("paciente-invalido");
  }
  
  if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  var imc = peso / (altura ** 2);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 600) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00) {
    return true;
  } else {
    return false;
  }
}