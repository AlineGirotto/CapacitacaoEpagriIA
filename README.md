# Capacitacao IA EPAGRI/SC

Plataforma interativa de capacitacao sobre **Inteligencia Artificial** e **Ferramentas Google Workspace** para colaboradores e servidores da EPAGRI.

## Sobre

Apresentacao visual interativa com modulos cobrindo:
- Fundamentos de IA e Machine Learning
- Etica no uso de ferramentas inteligentes  
- Tecnicas avancadas de Prompts (FOCO, PTF, CARE, PEPE, TAO)
- Ferramentas Google: Gemini, NotebookLM, Gmail, Docs, Sheets, Slides
- Panorama de mercado de solucoes em IA
- Oficinas praticas e exemplos por departamento

## Inicio Rapido

**Pre-requisitos:** Node.js (versao 16+)

### Instalacao

```bash
npm install
```

### Executar Localmente

```bash
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

### Build para Producao

```bash
npm run build
```

## Scripts Disponiveis

- `npm run dev` — Servidor com hot reload
- `npm run build` — Compilacao para producao
- `npm run preview` — Visualiza build em producao
- `npm run lint` — Verifica erros TypeScript

## Deploy no GitHub Pages

O projeto esta configurado para deploy automatico via GitHub Actions.

1. No repositorio GitHub, habilite **Settings > Pages > Build and deployment > Source: GitHub Actions**.
2. Faça push para a branch `main`.
3. O workflow `Deploy to GitHub Pages` vai gerar e publicar a pasta `dist`.

O `BASE_URL` e configurado automaticamente no workflow como `/<repo-name>/`.

## Tecnologias

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion
- React Markdown + QR Code
