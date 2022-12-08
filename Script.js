
function habilitaBotaoGerar() {
   if (document.getElementById('numero').value != "") {
      document.getElementById('gerar').disabled = false;
   } else {
      document.getElementById('gerar').disabled = true;
   }
}

function GerarTabuada() {
   var num = document.getElementById("numero").value;
   if (num < 1 || num > 10) {
      alert("Numero fora do parametro para tabuada");
      return;
   }
   var valor1 = num * 1;
   var valor2 = num * 2;
   var valor3 = num * 3;
   var valor4 = num * 4;
   var valor5 = num * 5;
   var valor6 = num * 6;
   var valor7 = num * 7;
   var valor8 = num * 8;
   var valor9 = num * 9;
   var valor10 = num * 10;

   document.getElementById("resultado").innerHTML = "1*" + num + " =   " + valor1 + "<br/>" + "2*" + num + " =   " + valor2 + "<br/>" + "3*" + num + " =   " + valor3 + "<br/>" + "4*" + num + " =   " + valor4 + "<br/>" + "5*" + num + " =   " + valor5 + "<br/>" + "6*" + num + " =   " + valor6 + "<br/>" + "7*" + num + " =   " + valor7 + "<br/>" + "8*" + num + " =   " + valor8 + "<br/>" + "9*" + num + " =   " + valor9 + "<br/>" + "10*" + num + " =   " + valor10;
}

function LimparNumero() {
   document.getElementById('numero').value = '';
   document.getElementById('resultado').innerHTML = '';
   document.getElementById('gerar').disabled = true;
}

function SairDoSitema() {
   window.close();
}