function exibeNome() {
  const n1 = document.getElementById("nome")
  document.getElementById("exibe_nome").innerHTML = n1.value + " ";

}
function exibeIdade() {
  const n2 = document.getElementById("idade");
  document.getElementById("exibe_idade").innerHTML = n2.value + " Anos";
}

function limparDados() {

  document.getElementById("nome").innerHTML = "";
  document.getElementById("idade").innerHTML = "";
}
