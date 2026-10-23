# Portal de Cursos — Fundação O Pão dos Pobres

> **Trabalho de Conclusão de Curso (TCC)** do curso de Suporte de TI da **Fundação O Pão dos Pobres**.

Portal público para divulgação dos cursos profissionalizantes gratuitos da **Fundação O Pão dos Pobres**, com formulário de inscrição online. O projeto foi desenvolvido como TCC e está **finalizado**.

---

## Sobre o TCC

Este repositório contém o projeto de conclusão do curso de Suporte de TI da Fundação O Pão dos Pobres. O objetivo do trabalho é digitalizar e organizar o processo de divulgação dos cursos e de inscrição dos candidatos, tornando o acesso às informações mais simples para os jovens atendidos pela instituição.

## Sobre a Fundação

A Fundação O Pão dos Pobres oferece cursos profissionalizantes gratuitos para jovens de Porto Alegre.

---

## 📸 Preview

<img width="400" height="225" alt="Portal de Cursos - Pão dos Pobres - Google Chrome 2026-10-23 14-41-56 (1)" src="https://github.com/user-attachments/assets/1995b929-8d0d-4f56-9a99-d732f78e3164" />

---

## Identidade Visual

| Elemento | Definição |
|---|---|
| Tipografia (títulos) | [Outfit](https://fonts.google.com/specimen/Outfit) |
| Tipografia (corpo/formulários) | [Inter](https://fonts.google.com/specimen/Inter) |
| Ícones | [Font Awesome via cdnjs](https://cdnjs.com/libraries/font-awesome/7.0.1) |

---

## Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** (Flexbox, Grid, Media Queries)
- **JavaScript (ES Modules)** — sem bundler, usando `import`/`export` nativos do navegador
- **ViaCEP API** — consulta de endereço por CEP

---

## 📁 Estrutura de pastas

```
portaldecursos/
├── assets/                 # Imagens, ícones e demais recursos estáticos
├── css/                    # Folhas de estilo
├── js/
│   ├── components/         # Componentes reutilizáveis
│   ├── data/               # Dados do portal (ex.: informações dos cursos)
│   ├── pages/              # Scripts específicos de cada página
│   └── services/           # Integrações e serviços (ex.: ViaCEP)
├── pages/                  # Páginas HTML do portal
├── .gitattributes
├── index.html              # Página inicial
├── LICENSE
└── README.md
```

> ⚠️ Como o projeto usa ES Modules nativos, todos os imports entre arquivos `.js` precisam manter a extensão `.js` explícita.

---

## Como executar localmente

Como o projeto usa ES Modules, é necessário servir os arquivos por um servidor local: abrir o `index.html` diretamente no navegador não funciona, por causa das restrições de CORS para módulos.

### Pré-requisitos

- **Git** — para clonar o repositório
- Um **navegador moderno** (Chrome, Edge, Firefox etc.)
- Conforme a opção escolhida abaixo:
  - **Visual Studio Code** com a extensão **Live Server**, ou
  - **Node.js** (inclui o `npx`), ou
  - **Python 3**

### Passo 1 — Clonar o repositório

```bash
git clone <url-do-repositorio>
cd portaldecursos
```

### Passo 2 — Iniciar um servidor local (escolha uma opção)

**Opção 1 — Live Server (VS Code)**

Abra a pasta do projeto no VS Code e clique em **Go Live** (canto inferior direito) com a extensão Live Server instalada.

**Opção 2 — Node.js (`npx serve`)**

```bash
npx serve .
```

**Opção 3 — Python (`http.server`)**

```bash
python3 -m http.server 8000
```

> Em alguns sistemas (como o Windows) o comando pode ser `python -m http.server 8000`.

### Passo 3 — Acessar no navegador

Abra o endereço indicado pelo servidor escolhido, por exemplo:

- Live Server: `http://localhost:5500`
- Python: `http://localhost:8000`
- `npx serve`: o endereço exibido no terminal (geralmente `http://localhost:3000`)

---

## Fluxo de Git

O projeto seguiu um fluxo com branches dedicadas:

- `main` — versão estável
- `develop` — integração das features

---

## 👤 Autor

Desenvolvido por **Will (Wilgner dos Santos Guimarães)** como Trabalho de Conclusão de Curso (TCC) do curso de Suporte de TI da **Fundação O Pão dos Pobres**.

---

## 📄 Licença

Distribuído sob a licença presente no arquivo [LICENSE](./LICENSE).
