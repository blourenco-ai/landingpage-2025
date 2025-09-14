    // Validação simples do formulário e simulação de envio (substitua por integração real)
    const form = document.getElementById('leadForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msg = document.getElementById('formMsg');
    const btn = document.getElementById('submitBtn');

    function validateEmail(email){
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    btn.addEventListener('click', () => {
      msg.textContent = '';
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      if(!name){ msg.textContent = 'Por favor, informe seu nome.'; return; }
      if(!validateEmail(email)){ msg.textContent = 'E-mail inválido.'; return; }

      // Simular envio
      btn.disabled = true;
      btn.textContent = 'Enviando...';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Quero acessar';
        msg.textContent = 'Obrigado! Checaremos seu e-mail — (simulação)';
        nameInput.value = '';
        emailInput.value = '';
      }, 900);
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        }
      });
    });