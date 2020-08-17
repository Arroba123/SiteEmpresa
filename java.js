function confirmarsenha(){
   var novasenha=document.getElementById("novasenha").value;
   var confirmar=document.getElementById("confirmarS").value;
   if (novasenha==confirmar){
        var todos = [] 
        let email = document.getElementById("email").value;
        let senha = document.getElementById("novasenha").value;
    
       todos.push(email,senha)
   } else{
    alert("as senhas não estão iguais")
   }
console.log(todos)
}


function Adicionar(){
    $(function(){
        var operacao = "A"; //"A"=Adição; 
        var indice_selecionado = -1; //Índice do item selecionado na lista
        var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
        tbClientes = JSON.parse(tbClientes); // Converte string para objeto
        if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
        tbClientes = [];
        
	var cliente = JSON.stringify({
		senha   : $("novasenha").val(),
        Email   : $("email").val()
    })
    if (cliente!=tbClientes)
    alert("A senha ou email enserido está encorreto");
	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Registro adicionado.");
    return true;})


}

