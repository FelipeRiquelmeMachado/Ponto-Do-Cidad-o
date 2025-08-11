const botaoMenu = document.getElementById('botaoMenu');
const menuMobile = document.getElementById('menuMobile');
const botaoFecharMenu = document.getElementById('botaoFecharMenu');

function abrirMenu() {
  menuMobile.hidden = false;
  botaoMenu.setAttribute('aria-expanded', 'true');
  // Trava foco dentro do menu
  menuMobile.querySelector('a').focus();
  document.body.style.overflow = 'hidden';
}

function fecharMenu() {
  menuMobile.hidden = true;
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.focus();
  document.body.style.overflow = '';
}

botaoMenu.addEventListener('click', () => {
  if (menuMobile.hidden) {
    abrirMenu();
  } else {
    fecharMenu();
  }
});

botaoFecharMenu.addEventListener('click', () => {
  fecharMenu();
});

// Fecha menu ao pressionar Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !menuMobile.hidden) {
    fecharMenu();
  }
});

// Trava foco dentro do menu móvel enquanto aberto
menuMobile.addEventListener('keydown', function (e) {
  if (e.key !== 'Tab') return;
  const elementosFocaveis = menuMobile.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
  const primeiro = elementosFocaveis[0];
  const ultimo = elementosFocaveis[elementosFocaveis.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    }
  } else {
    if (document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  }
});
