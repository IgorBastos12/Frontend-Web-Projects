// Interação Cor do Menu

const item = document.getElementsByClassName("item");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("mouseover", function () {
    for (let j = 0; j < item.length; j++) {
      if (i == j) {
        item[j].style.color = "rgb(17, 17, 17)";
      } else {
        item[j].style.color = "rgb(155, 155, 155)";
      }
    }
  });
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("mouseout", function () {
    for (let i = 0; i < item.length; i++) {
      item[i].style.color = "rgb(17, 17, 17)";
    }
  });
}

// Interação card do form

const inputCpf = document.getElementById("input-cpf-off");

inputCpf.addEventListener("input", InputBtnBox);

function InputBtnBox() {

  // Obtem o valor do campo de input
  let valueInput = inputCpf.value;

  // Remove caracteres não numéricos
  valueInput = valueInput.replace(/\D/g, "");

  // Adiciona os pontos e o traço conforme digita o CPF
  if (valueInput.length > 3) {
    valueInput = valueInput.substring(0, 3) + "." + valueInput.substring(3);
  }
  if (valueInput.length > 7) {
    valueInput = valueInput.substring(0, 7) + "." + valueInput.substring(7);
  }
  if (valueInput.length > 11) {
    valueInput = valueInput.substring(0, 11) + "-" + valueInput.substring(11);
  }

  //Atualiza o campo de Input

  inputCpf.value = valueInput;

  // Modificação de estilo

  if (valueInput.length == 14) {
    inputCpf.id = "input-cpf-on";
    let iconCheck = document.getElementById("icon-check");
    iconCheck.style.visibility = "visible";

    let btn = document.getElementById("btn-off");
    btn.id = "btn-on";
    
  } else {
    inputCpf.id = "input-cpf-off";
    let iconCheck = document.getElementById("icon-check");
    iconCheck.style.visibility = "hidden";

    let btn = document.getElementById("btn-on");
    btn.id = "btn-off";
  }
}
