# Monorepo Full-Stack e Mobile

Este repositório contém um site institucional construído com Next.js, TypeScript e Tailwind CSS, e um aplicativo mobile para Android/iOS desenvolvido com Expo, React Native e NativeWind. Ambos compartilham conteúdo, branding e lógica de negócios em uma estrutura de monorepo organizada com Turborepo.

## Visão Geral do Projeto

O objetivo deste projeto é demonstrar a construção de uma solução full-stack e mobile com uma base de código unificada, otimizada para desenvolvimento ágil e escalabilidade. A arquitetura de monorepo permite o compartilhamento eficiente de componentes de UI, lógica de negócios, configurações e conteúdo entre as plataformas web e mobile, garantindo consistência e reduzindo a duplicação de código.

### Tecnologias Utilizadas

- **Monorepo:** Turborepo
- **Web:** Next.js 13+, TypeScript, Tailwind CSS, ESLint, Prettier
- **Mobile:** Expo (React Native), NativeWind, React Navigation
- **Compartilhado:** Conteúdo (Markdown/JSON), Utilitários (validações, helpers), Configurações (Tailwind, tema, i18n)

### Estrutura de Pastas

A estrutura do monorepo é organizada da seguinte forma para facilitar a navegação e o gerenciamento de projetos:

```
/ (repo root)
├─ apps/
│  ├─ web/              # Next.js site
│  │  ├─ src/
│  │  ├─ app/
│  │  ├─ components/
│  │  ├─ styles/
│  │  └─ ...
│  └─ mobile/           # Expo app
│     ├─ app/
│     ├─ components/
│     ├─ assets/
│     └─ ...
├─ packages/
│  ├─ ui/               # Design system compartilhado (Botões, Inputs, Cards, Modal, etc.)
│  ├─ content/          # Conteúdo em Markdown/JSON (pt.json, en.json)
│  ├─ utils/            # Validações, helpers (isValidEmail, formatCurrency)
│  ├─ config/           # Configurações compartilhadas (Tailwind, tema, i18n)
│  ├─ eslint-config/    # Configurações de ESLint
│  └─ typescript-config/# Configurações de TypeScript
├─ tests/
│  ├─ unit/             # Testes unitários (Jest, React Testing Library)
│  └─ e2e/              # Testes end-to-end (Playwright para Web, Detox para Mobile)
├─ .github/
│  └─ workflows/        # Workflows de CI/CD (GitHub Actions)
├─ turbo.json            # Configuração do Turborepo
├─ package.json          # Configuração do monorepo (workspaces, scripts)
├─ tsconfig.json         # Configuração global de TypeScript
├─ README.md             # Este arquivo
├─ LICENSE               # Licença do projeto
└─ .gitignore            # Arquivos e diretórios a serem ignorados pelo Git
```

## Setup do Projeto

Para configurar e rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd my-monorepo
   ```

2. **Instale as dependências do monorepo:**

   Na raiz do projeto, execute:

   ```bash
   npm install
   ```

   Este comando instalará todas as dependências para os aplicativos `web` e `mobile`, bem como para os pacotes compartilhados (`ui`, `content`, `utils`, `config`, `eslint-config`, `typescript-config`).

## Como Rodar os Aplicativos

### Web (Next.js)

Para iniciar o servidor de desenvolvimento do aplicativo web:

```bash
npm run dev --filter=web
```

O aplicativo estará disponível em `http://localhost:3000`.

### Mobile (Expo/React Native)

Para iniciar o servidor de desenvolvimento do aplicativo mobile:

```bash
npm run start --filter=mobile
```

Este comando abrirá o Expo Dev Tools no seu navegador. Você pode escanear o código QR com o aplicativo Expo Go no seu dispositivo mobile (Android ou iOS) ou usar um emulador/simulador.

## Compartilhamento de Conteúdo e Lógica

O monorepo é configurado para compartilhar facilmente conteúdo e lógica entre os aplicativos web e mobile. O diretório `packages/content` armazena arquivos JSON para internacionalização (pt/en), e o diretório `packages/utils` contém funções utilitárias como validações e helpers. O pacote `packages/ui` é um sistema de design compartilhado que contém componentes reutilizáveis.

Para usar um pacote compartilhado em um dos aplicativos, basta importá-lo diretamente:

```typescript
// Exemplo de importação em apps/web/src/app/page.tsx
import { Button } from "@my-monorepo/ui";
import { home } from "@my-monorepo/content/pt.json";
import { isValidEmail } from "@my-monorepo/utils";
```

## Build para Produção

### Web (Next.js)

Para construir o aplicativo web para produção (exportação estática para GitHub Pages ou Vercel):

```bash
npm run build --filter=web
```

Os arquivos de build serão gerados no diretório `apps/web/out`.

### Mobile (Expo EAS)

Para construir o aplicativo mobile para produção usando Expo EAS (Android APK/iOS IPA):

```bash
npm run build --filter=mobile
```

Este comando iniciará o processo de build no Expo Application Services (EAS). Certifique-se de ter o `expo-cli` instalado globalmente (`npm install -g expo-cli`) e de estar logado na sua conta Expo (`expo login`).

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz de cada aplicativo (`apps/web/.env.local` e `apps/mobile/.env.local`) para configurar variáveis de ambiente específicas. Consulte os arquivos `.env.example` (se existirem) para as variáveis necessárias.

Exemplo de `.env.local` para o aplicativo web:

```
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Checklist de Publicação

Antes de publicar, verifique os seguintes itens:

- [ ] **Textos:** Todos os textos estão revisados e sem erros de digitação ou gramática.
- [ ] **Imagens:** Todas as imagens estão otimizadas para web e mobile, com tamanhos e formatos adequados.
- [ ] **Políticas:** Políticas de privacidade e termos de uso estão atualizados e acessíveis.
- [ ] **SEO (Web):** Meta tags, descrições e palavras-chave estão configuradas para otimização de busca.
- [ ] **Acessibilidade:** Testes de acessibilidade foram realizados e todas as diretrizes foram seguidas.
- [ ] **Performance:** Otimizações de performance foram aplicadas para garantir carregamento rápido e fluidez.
- [ ] **Testes:** Todos os testes (unitários e E2E) estão passando.
- [ ] **CI/CD:** Os pipelines de CI/CD estão configurados e funcionando corretamente para ambos os aplicativos.
- [ ] **Variáveis de Ambiente:** Todas as variáveis de ambiente de produção estão configuradas corretamente nos ambientes de deploy.

## Testes

### Testes Unitários

Para rodar os testes unitários em todos os pacotes e aplicativos:

```bash
npm test
```

### Testes End-to-End (E2E)

#### Web (Playwright)

Para rodar os testes E2E para o aplicativo web:

```bash
npx playwright test
```

Certifique-se de que o aplicativo web esteja rodando (`npm run dev --filter=web`) antes de executar os testes E2E.

#### Mobile (Detox)

Para rodar os testes E2E para o aplicativo mobile, você precisará configurar o Detox. Consulte a documentação oficial do Detox para instruções detalhadas de setup e execução.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.



