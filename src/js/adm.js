document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.querySelector('.btn-login');

    btnLogin.addEventListener('click', function () {
      const usuario = document.querySelector('input[name="usuario"]').value;
      const senha = document.querySelector('input[name="senha"]').value;

      // Verifica as credenciais
      if (usuario === "ADM123" && senha === "123456") {
         alert(" bem-vindo " + usuario + "!");
        window.location.href = 'fun.html'; 
      }  else if(usuario === " LEANDRO123 " && senha === "123456") {
         alert("bem-vindo" + usuario + "!");
       window.location.href = 'pages/home/index.html';
      }   else {
         alert('Credenciais inválidas. Tente novamente.'); 
      }
    });
  });

