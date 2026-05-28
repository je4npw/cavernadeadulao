# Caverna de Adulão — Centro de Reabilitação

Este é o site oficial do Centro de Reabilitação **Caverna de Adulão**, um portal de informações institucionais detalhando a missão, tratamentos, equipe, galeria de fotos e formas de contribuição/ajuda (PIX e transferência bancária).

O projeto foi migrado com sucesso de **TanStack Start** para **Next.js (App Router)** e está otimizado para deploy nativo na **Vercel**.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
* **Interface:** [React 19](https://react.dev/)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com PostCSS
* **Componentes UI:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI + Lucide Icons)
* **Gerenciador de Pacotes/Runtime:** [Bun](https://bun.sh/)

---

## 📁 Estrutura do Projeto

Abaixo estão descritos os principais diretórios do projeto:

```
├── src/
│   ├── app/                    # Rotas e páginas do Next.js (App Router)
│   │   ├── layout.tsx          # Layout global (HTML, Body, Header, Footer e scripts)
│   │   ├── page.tsx            # Página inicial (Home)
│   │   ├── globals.css         # Estilos globais e tokens do Tailwind CSS v4
│   │   ├── error.tsx           # Tratamento de erros de runtime
│   │   ├── not-found.tsx       # Página 404 customizada
│   │   └── [subpastas]/        # Rotas secundárias (missao, tratamento, contato, etc.)
│   ├── components/
│   │   ├── site/               # Componentes estruturais do layout (Header, Footer, PixCopyBox)
│   │   └── ui/                 # Componentes genéricos e reutilizáveis do Shadcn UI
│   ├── data/                   # Conteúdos estáticos e textos estruturados do site
│   ├── assets/                 # Imagens estáticas e logotipo
│   ├── hooks/                  # React Hooks utilitários
│   └── lib/                    # Funções utilitárias (como cn para merge do Tailwind)
├── postcss.config.mjs          # Configuração do compilador PostCSS
├── next.config.js              # Configurações do Next.js
├── tsconfig.json               # Configurações do compilador TypeScript
└── package.json                # Gerenciamento de scripts e dependências do projeto
```

---

## 🚀 Como Executar o Projeto

Certifique-se de possuir o [Bun](https://bun.sh/) instalado em sua máquina.

### 1. Instalar as dependências
```bash
bun install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
bun run dev
```
O site estará disponível localmente em [http://localhost:3000](http://localhost:3000).

### 3. Compilar para produção (Build)
```bash
bun run build
```
Este comando executa a compilação do Next.js e gera páginas estáticas otimizadas (SSG) para todas as rotas institucionais.

### 4. Executar testes de Linting e Formatação
```bash
bun run lint     # Executa o ESLint CLI
bun run format   # Formata a base de código com o Prettier
```

---

## ☁️ Deploy na Vercel

O projeto está totalmente preparado para hospedagem na **Vercel**:

1. Conecte o repositório Git ao painel da Vercel.
2. A Vercel detectará automaticamente que o framework é **Next.js**.
3. Configure o comando de build padrão (`next build`) e o diretório de saída (`.next`).
4. Cada push/commit na branch principal disparará automaticamente um deploy de produção com otimização automática de imagens e CDN global.

Criado por Je4nPw