 function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').valeu;
    const data = document.getElementById('data'). value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const serie = document.getElementById('serie').value;
    
    

    if(name === ""){
        alert('por favor, digite seu nome.');
        return;
    }
    if(data === ''){
        alert('coloque sua data de nascimento')
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        alert('por favor, digite um, email válido.');
        return;
    }

    if (telefone === ''){
        alert ('digite seu telefone')
        return;
    }
    if(serie === ""){
        alert ('escolha sua serie')
        return;
       }
   let valid = false;
   if (document.getElementById ("manha").checked){
    valid = true;
   }
 else if(document.getElementById("tarde").checked){
    valid = true;
 }
 else if (document.getElementById("noite").checked){
    valid = true;
 }
 else{
    alert("selecione um turno para proseguir")
    return  false;
 }

 let checkvalid = false;
 if(document.getElementById("teatro").checked ||  document.getElementById("musica").checked || document.getElementById("ballet").checked || document.getElementById("pintura").checked || document.getElementById("judo").checked || document.getElementById("futebol").checked ){
    checkvalid = true;
  }
 else {
    alert("escolha uma atividade extra-curricular")
    return false;
 }

return location.href = "sucesso.html";
//form.submit();

 }