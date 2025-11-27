// ============================================
// EFASEG Website - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeForm();
  setActiveNavLink();
});

// ============================================
// NAVEGAÇÃO
// ============================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Se for um link externo ou com protocolo, deixa o comportamento padrão
      if (this.href.startsWith('http') || this.href.startsWith('mailto:') || this.href.startsWith('tel:')) {
        return;
      }
      
      // Para links internos, carrega a página
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#')) {
        // Permite navegação normal para páginas
      }
    });
  });
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================
// FORMULÁRIO DE CADASTRO
// ============================================

function initializeForm() {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter valores do formulário
    const name = document.getElementById('name').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const rg = document.getElementById('rg').value.trim();
    const formationType = document.getElementById('formationType').value;

    // Validações
    if (!name) {
      showMessage('Por favor, preencha o nome completo.', 'error');
      return;
    }

    if (!cpf) {
      showMessage('Por favor, preencha o CPF.', 'error');
      return;
    }

    if (!validarCPF(cpf)) {
      showMessage('CPF inválido.', 'error');
      return;
    }

    if (!rg) {
      showMessage('Por favor, preencha o RG.', 'error');
      return;
    }

    // Se passou em todas as validações, redirecionar para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${name}, CPF: ${cpf}, RG: ${rg}. Gostaria de me inscrever em ${formationType === 'formacao' ? 'Formação' : 'Reciclagem'} de Vigilante.`;
    const whatsappUrl = `https://wa.me/5534997738773?text=${encodeURIComponent(whatsappMessage)}`;
    
    showMessage('Cadastro realizado com sucesso! Redirecionando para WhatsApp...', 'success');
    
    // Aguardar um pouco antes de redirecionar
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      form.reset();
    }, 1500);
  });
}

// ============================================
// VALIDAÇÃO DE CPF
// ============================================

function validarCPF(cpf) {
  // Remove caracteres especiais
  cpf = cpf.replace(/\D/g, '');

  // Verifica se tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  // Validação do primeiro dígito verificador
  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  // Validação do segundo dígito verificador
  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}

// ============================================
// FORMATAÇÃO DE CPF
// ============================================

function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  return cpf;
}

// Aplicar formatação ao campo de CPF
document.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.getElementById('cpf');
  if (cpfInput) {
    cpfInput.addEventListener('input', function() {
      this.value = formatarCPF(this.value);
    });
  }
});

// ============================================
// MENSAGENS
// ============================================

function showMessage(message, type = 'info') {
  // Remover mensagem anterior se existir
  const existingMessage = document.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Criar elemento de mensagem
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${type}`;
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    ${type === 'success' ? 'background-color: #4CAF50; color: white;' : ''}
    ${type === 'error' ? 'background-color: #f44336; color: white;' : ''}
    ${type === 'info' ? 'background-color: #2196F3; color: white;' : ''}
  `;

  document.body.appendChild(messageDiv);

  // Remover mensagem após 4 segundos
  setTimeout(() => {
    messageDiv.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => messageDiv.remove(), 300);
  }, 4000);
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.querySelector('header .container');
  const nav = headerContainer.querySelector('nav');

  // Evita duplicar o botão se o script rodar mais de uma vez
  if (!document.querySelector('.hamburger')) {
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    headerContainer.appendChild(hamburger);

    // Ação de abrir/fechar menu
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
});

const modal = document.getElementById("meuModal");
const fechar = document.querySelector(".fechar");

document.querySelectorAll(".abrir-modal").forEach((botao) => {
  botao.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
