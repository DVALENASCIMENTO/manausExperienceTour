<img width="1166" height="670" alt="image" src="https://github.com/user-attachments/assets/ab8dff00-c6c3-44f6-9213-236426ec2622" />

https://dvalenascimento.github.io/manausExperienceTour/

## **Manaus Experience Tour – Tarde Amazônica**

Este projeto é uma página web interativa desenvolvida para apresentar o passeio **“Tarde Amazônica”** do *Manaus Experience Tour*.
A interface é moderna, responsiva e multilíngue, contendo popup inicial, trilha sonora, troca de idiomas, cards informativos e botão de reserva via WhatsApp.

---

<img width="305" height="1994" alt="image" src="https://github.com/user-attachments/assets/a4fbb686-9af9-4ebe-b225-2869f0bbf114" />

<img width="905" height="782" alt="image" src="https://github.com/user-attachments/assets/8cd2fd63-bc98-43e0-b809-f2e58ab6f5d9" />


## 📌 **Funcionalidades Principais**

### ✔️ Popup de Boas-Vindas

* Tela inicial com logo, fundo personalizado e botão **“Iniciar”**
* Somente após o clique a música é liberada (requisito de navegadores modernos)

### ✔️ Trilha Sonora Automática

* Música de fundo em `<audio>` com controle play/pause
* Volume pré-configurado
* Carregamento `preload="auto"`

### ✔️ Suporte a Múltiplos Idiomas

* Bandeiras no header
* Traduções gerenciadas pelo arquivo `translate.js`
* Textos do HTML possuem atributo `data-translate=""`

### ✔️ Design Responsivo

* Grid de cards com 4 → 2 → 1 colunas
* Header colapsa título no mobile
* Compatível com telas pequenas e médias

### ✔️ Estética Progressiva

* Uso extenso de *gradientes*
* Paleta verde amazônica + dourado
* Cartões com *hover effects* e sombras suaves
* Fundo com transição vertical

### ✔️ Estrutura Clean & Modular

* HTML semântico
* CSS organizado e responsivo
* JavaScript dividido em módulos

---

## 📁 **Estrutura de Pastas**

```
/projeto
├── index.html
├── css
│   └── styles.css
├── js
│   ├── script.js
│   └── translate.js
├── img
│   ├── logo.png
│   ├── flags/
│   ├── inpa.jpeg
│   ├── cigs.jpg
│   ├── Ponte-Rio-Negro.jpg
│   ├── Ponta_Negra.jpg
│   └── amazonia_popup.jpg
└── audio
    └── Porto_de_Lenha.mp3
```

---

## 🧩 **Componentes do Sistema**

### ### 1️⃣ **HTML (index.html)**

Responsável pela estrutura do site:

* Popup inicial com fundo personalizado
* Header fixo com logomarca, navegação e bandeiras
* Seção Hero com título e subtítulo
* Seção Tour com cards informativos
* Seção Contato com link direto via WhatsApp
* Footer com ano automático
* Importação dos módulos JS

---

### 2️⃣ **CSS (styles.css)**

O arquivo define:

#### 🎨 Paleta:

* Verde amazônico (`#1f5a3e`)
* Verde claro (`#4aa268`)
* Azul profundo (`#08334a`)
* Dourado (`#cfaf45`)
* Gradientes e transparências

#### ✨ Efeitos:

* *Hover* nos cards
* *Backdrops* com blur
* Botões com brilho e animação diagonal
* Textos justificados
* Layout responsivo com `@media`

#### 📱 Breakpoints:

```
1000px → Cards = 2 colunas
600px  → Cards = 1 coluna, brand-title oculto
```

---

### 3️⃣ **JavaScript (script.js)**

Gerencia:

#### ✔️ Controle do Popup

```js
popup.style.display = 'none';
```

#### ✔️ Autoplay da Música

```js
bgMusic.play().catch(() => console.warn('Falha no autoplay'));
```

#### ✔️ Botão de Play/Pause

Altera símbolo conforme estado:

```
▶︎ → tocar
❚❚ → pausar
```

#### ✔️ Ano automático no rodapé

```js
yearEl.textContent = new Date().getFullYear();
```

#### ✔️ Acessibilidade

* Ativa o botão Iniciar via tecla ENTER/ESPAÇO

---

### 4️⃣ **JavaScript (translate.js)**

* Mapeia os textos em objetos JSON
* Substitui elementos marcados com `data-translate`
* Ativado ao clicar nas bandeiras

---

## 🌐 **Internacionalização (i18n)**

A estrutura usa:

```html
<span data-translate="heroTitle">Tarde Amazônica</span>
```

E o **translate.js** atualiza:

```js
element.textContent = translations[lang][key];
```

Idiomas suportados:

* 🇧🇷 Português
* 🇺🇸 Inglês
* 🇪🇸 Espanhol
* 🇫🇷 Francês
* 🇮🇹 Italiano
* 🇩🇪 Alemão
* 🇯🇵 Japonês

---

## 🎧 Sistema de Áudio

* Reproduz após ação do usuário
* Loop contínuo
* Toggle manual no header
* Volume = 0.8

Arquitetura moderna para evitar bloqueios de autoplay.

---

## 🖼️ Popup Inicial

* Fundo em *amazonia_popup.jpg*
* Janela central com logo + descrição
* Transparência com `backdrop-filter: blur(2px)`
* Controle total via CSS + JS

---

## 🔒 Acessibilidade

Inclui:

* Aria tags (`role="dialog"`, `aria-modal="true"`)
* Controle via teclado
* Botões com `aria-pressed`
* Alto contraste na paleta
* Texto justificado para leitura confortável

---

## 🚀 Como Instalar e Executar

### 1. Baixe ou clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/manaus-experience-tour.git
```

### 2. Estrutura obrigatória:

```
index.html
/css/styles.css
/js/script.js
/js/translate.js
/img (imagens)
/audio (músicas)
```

### 3. Abra o arquivo:

```
index.html
```

> Não requer servidor externo — funciona localmente.

---

## 🛠️ Manutenção e Expansão

### 🔧 Para adicionar novo idioma:

* Editar `translate.js`
* Inserir bandeira correspondente
* Criar entradas no JSON de traduções

### 🔧 Para adicionar novo ponto turístico:

1. Criar novo `<article class="card">`
2. Inserir imagem em `/img`
3. Criar chaves no `translate.js`

### 🔧 Para alterar música:

Substitua `audio/Porto_de_Lenha.mp3`.

---

## 🎯 Objetivo Final

Oferecer ao turista uma experiência imersiva e elegante do turismo manauara, com:

* Navegação intuitiva
* Apresentação moderna
* Múltiplos idiomas
* Música e estética da Amazônia

---


Só pedir!
