
   
   function numero(value){
var tela = document.getElementById('resultado').value +=value
}

function calcular(){
   
   let a = document.getElementById('resultado').value
   let b = eval(a)
   document.getElementById('resultado').value = b 
   }


function limpaum(){
   var tela = document.getElementById('resultado').value
   document.getElementById('resultado').value = tela.substring(0,tela.length-1)
}

function limpa(){
   document.getElementById('resultado').value = ''
}

async function porcentagem(porcento) {

   document.getElementById('resultado').value += porcento
   let cal1 = await document.getElementById('resultado').value.replace("%", "/100")
   document.getElementById('resultado').value = eval(cal1)
}