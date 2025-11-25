# EFASEG Website - HTML/CSS/JavaScript Puro

Website completo da EFASEG Formação de Vigilantes Uberlândia, desenvolvido em HTML, CSS e JavaScript puro, sem dependências externas.

## 📋 Características

- ✅ 7 páginas completas (Home, Sobre, Cursos, Profissão, Portaria 16, Cadastro, Contato)
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Paleta de cores: Preto, Branco e Dourado
- ✅ Fonte: Poppins (Google Fonts)
- ✅ Formulário de cadastro com validação de CPF
- ✅ Integração com WhatsApp
- ✅ Logo em header e footer
- ✅ Sem dependências externas
- ✅ Pronto para produção

## 📁 Estrutura de Arquivos

```
efaseg_website_html/
├── index.html              # Página inicial
├── pages/
│   ├── about.html         # Página Sobre
│   ├── courses.html       # Página Cursos
│   ├── profession.html    # Página Profissão de Vigilante
│   ├── portaria16.html    # Página Portaria 16 da PF
│   ├── register.html      # Página Cadastro
│   └── contact.html       # Página Contato
├── css/
│   └── style.css          # Estilos CSS
├── js/
│   └── script.js          # JavaScript
├── images/
│   └── logo.png           # Logo da EFASEG
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe ou extraia os arquivos
2. Abra o arquivo `index.html` em seu navegador
3. Pronto! O website está funcionando

### Opção 2: Usar em um Servidor Web
1. Copie todos os arquivos para o servidor web
2. Configure o servidor para servir arquivos estáticos
3. Acesse o URL do seu domínio

### Opção 3: Usar Python (Local)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Depois acesse: `http://localhost:8000`

### Opção 4: Usar Node.js (Local)
```bash
# Instale http-server globalmente
npm install -g http-server

# Execute
http-server

# Acesse: http://localhost:8080
```

## 📄 Páginas Disponíveis

### Home (index.html)
- Apresentação da EFASEG
- Estatísticas (5000+ seguidores, 4 unidades, 8 cursos)
- Destaque dos cursos
- Seção "Por que escolher"
- Seções destacadas (Profissão e Portaria 16)
- Call-to-action para cadastro

### Sobre (pages/about.html)
- História da EFASEG
- Missão e valores
- Unidades
- Razões para escolher

### Cursos (pages/courses.html)
- Descrição de todos os 8 cursos
- Carga horária
- Requisitos
- Como se inscrever

### Profissão de Vigilante (pages/profession.html)
- Curiosidades sobre a profissão
- Informações de salário
- Aposentadoria especial (25 anos)
- Benefícios e direitos
- Oportunidades de carreira

### Portaria 16 (pages/portaria16.html)
- Explicação da Portaria 16
- Requisitos para ser vigilante
- Formação inicial
- Reciclagem obrigatória
- Direitos e deveres
- Como EFASEG se adequa

### Cadastro (pages/register.html)
- Formulário de cadastro
- Validação de CPF
- Seleção de tipo (Formação ou Reciclagem)
- Redirecionamento para WhatsApp

### Contato (pages/contact.html)
- 4 unidades com endereços e telefones
- Links para WhatsApp
- Redes sociais
- Perguntas frequentes

## 🎨 Cores e Estilos

- **Preto:** #000000
- **Branco:** #FFFFFF
- **Dourado:** #D4AF37
- **Fonte:** Poppins (Google Fonts)

## 📱 Responsividade

O website é totalmente responsivo e funciona perfeitamente em:
- Smartphones (480px e acima)
- Tablets (768px e acima)
- Desktops (1200px e acima)

## ✨ Funcionalidades JavaScript

### Validação de CPF
- Valida o CPF em tempo real
- Formata automaticamente (000.000.000-00)
- Verifica dígitos verificadores

### Formulário de Cadastro
- Validação de campos obrigatórios
- Validação de CPF
- Redirecionamento para WhatsApp com mensagem pré-preenchida
- Mensagens de sucesso/erro

### Navegação
- Menu responsivo
- Link ativo indicado
- Smooth scroll

## 🔧 Personalização

### Mudar Cores
Edite o arquivo `css/style.css` e procure por:
- `#000000` (preto)
- `#FFFFFF` (branco)
- `#D4AF37` (dourado)

### Mudar Texto
Edite os arquivos `.html` diretamente com um editor de texto

### Mudar Logo
Substitua o arquivo `images/logo.png` por sua logo

### Mudar Números de WhatsApp
Procure por `wa.me/5534997738773` nos arquivos HTML e substitua pelo número desejado

## 📞 Números de WhatsApp

- Uberlândia: (34) 99773-8773
- Belo Horizonte: (31) 99280-1003

## 🌐 Hospedagem

Este website pode ser hospedado em qualquer servidor web que suporte arquivos estáticos:
- GitHub Pages
- Netlify
- Vercel
- Heroku
- Seu próprio servidor
- Qualquer provedor de hospedagem web

## 📝 Licença

Este website foi desenvolvido para a EFASEG Formação de Vigilantes Uberlândia.

## 🆘 Suporte

Para dúvidas ou alterações, entre em contato:
- WhatsApp Uberlândia: (34) 99773-8773
- WhatsApp Belo Horizonte: (31) 99280-1003

---

**Desenvolvido em:** Novembro de 2024
**Versão:** 1.0
