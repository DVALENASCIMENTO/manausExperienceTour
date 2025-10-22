// ========== Seletores ==========
const popup = document.getElementById('popup');
const btnStart = document.getElementById('btn-start');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const contactForm = document.getElementById('contact-form');
const yearEl = document.getElementById('year');

// Mostra ano no footer
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Ao clicar em "Iniciar": fecha popup e inicia música (inicia só após interação do usuário)
btnStart.addEventListener('click', () => {
  // hide popup (usando transition CSS se quiser) 
  popup.style.display = 'none';
  // tenta tocar música - navegadores exigem interação do usuário para tocar áudio
  if (bgMusic) {
    bgMusic.volume = 0.8;
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // reprodução pode falhar em alguns navegadores; botão de controle permite tocar depois
        console.warn('Áudio não reproduzido automaticamente:', err);
      });
    }
    // atualiza estado do botão de controle
    musicToggle.textContent = '❚❚';
    musicToggle.setAttribute('aria-pressed', 'true');
  }
});

// Toggle play/pause música
musicToggle.addEventListener('click', () => {
  if (!bgMusic) return;
  if (bgMusic.paused) {
    bgMusic.play().catch(err => {
      console.warn('Falha ao tocar audio:', err);
    });
    musicToggle.textContent = '❚❚';
    musicToggle.setAttribute('aria-pressed', 'true');
  } else {
    bgMusic.pause();
    musicToggle.textContent = '▶︎';
    musicToggle.setAttribute('aria-pressed', 'false');
  }
});

// Acessibilidade: teclas Enter/Espaço no botão "Iniciar"
btnStart.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' || e.key === ' ') btnStart.click();
});

// Formulário de contato (simulação de envio)
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // validação simples
  if (!nome || !telefone || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Aqui você pode integrar com WhatsApp API, enviar para seu e-mail ou salvar em backend.
  // Por enquanto mostramos uma confirmação e limpamos o formulário:
  alert(`Obrigado, ${nome}! Sua mensagem foi recebida.\nEntraremos em contato pelo WhatsApp: ${telefone}`);
  contactForm.reset();
});
