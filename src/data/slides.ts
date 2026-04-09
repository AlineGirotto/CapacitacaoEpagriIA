export interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  spotlightQuote?: string;
  productBadge?: 'gemini' | 'notebooklm';
  formulaStartNumber?: number;
  formulaCards?: {
    name: string;
    acronym?: string;
    description: string;
    exampleTitle?: string;
    exampleItems: string[];
  }[];
  examples?: { area: string; text: string }[];
  links?: { title: string; url: string; icon: string }[];
  theme?: 'light' | 'dark' | 'accent';
  qrCode?: string;
  animationType?: 'fade' | 'slide' | 'pulse' | 'bounce' | 'float';
  backgroundAnimation?: 'coffee' | 'lunch' | 'minilab' | 'challenge' | 'handson' | 'tech' | 'google'  | 'celebration' | 'question' | 'marketplace' | 'prompt' | 'notebook' | 'gemini' | 'none';
  logos?: { name: string; image: string }[];
  timeline?: { year: string; title: string; description: string }[];
}

export const slides: SlideData[] = [
  {
    id: 'presenca',
    title: 'Registre sua presença!',
    subtitle: 'Antes de Começar',
    content: `
**Escaneie o QR code na tela para registrar sua presença nessa capacitação.**

Assim poderemos enviar o certificado de participação e materiais complementares diretamente para o seu e-mail.
`,
    qrCode: 'https://www.epagri.sc.gov.br/CapacitacaoEpagriIA/',
    theme: 'light',
    animationType: 'bounce',
    backgroundAnimation: 'tech'
  },
  {
    id: 'welcome',
    title: 'IA na Prática: Ecossistema Google e Produtividade',
    subtitle: 'Boas-vindas, Epagrianos! 🚀',
    content: `
### Estamos muito felizes em ter você aqui! 🌟

Prepare-se para uma jornada de **inovação** e **tecnologia**. Vamos explorar juntos como a Inteligência Artificial pode transformar o nosso dia a dia, otimizando processos e ampliando nossa capacidade criativa.

Acesse esta apresentação interativa no seu dispositivo apontando a câmera para o QR Code ou pelo [link direto](https://www.epagri.sc.gov.br/CapacitacaoEpagriIA/)
    `,
    qrCode: 'https://www.epagri.sc.gov.br/CapacitacaoEpagriIA/',
    theme: 'dark',
    animationType: 'float',
    backgroundAnimation: 'tech'
  },
  {
    id: 'questionamento',
    title: 'O que é Inteligência Artificial?',
    subtitle: 'Questionamento',
    content: `
Antes de mergulharmos no universo da IA, resuma em **até 4 palavras** o que você entende por "Inteligência Artificial".

Para isso acesse o QR Code pelo celular e envie sua resposta. Vamos criar uma nuvem de palavras com as respostas da turma para visualizar a percepção geral sobre o tema!

  [Acesse a atividade](https://app.sli.do/event/ahGxm75pdJVdqjGwmBtWW6)
    `,
    qrCode: 'https://app.sli.do/event/ahGxm75pdJVdqjGwmBtWW6',
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'question'
  },
  {
    id: 'intro-1',
    title: 'Inteligência Artificial',
    subtitle: 'Módulo 1: Introdução e Contexto',
    content: `
A Inteligência Artificial Generativa não veio para substituir, mas para **amplificar a nossa capacidade técnica**. Nosso foco será em ferramentas corporativas que garantem a segurança e a governança dos dados da EPAGRI.

### O que é a Inteligência Artificial (IA)?
A Inteligência Artificial é um campo da Ciência da Computação que busca criar sistemas capazes de realizar tarefas que, até então, exigiam a cognição humana. 
Diferente do software tradicional, a IA utiliza modelos matemáticos e estatísticos para aprender com grandes volumes de dados. 
Ela não é programada com a resposta final, mas sim treinada para prever o resultado mais provável com base em padrões históricos.

### Como funciona hoje?
Hoje, vivemos a revolução das LLMs (Large Language Models). 
Elas funcionam através de uma arquitetura que permite à IA processar bilhões de palavras e entender o relacionamento e o peso de cada uma em uma frase. 
A IA Generativa funciona como um 'autocompletar' extremamente sofisticado, prevendo a próxima palavra (token) com base no contexto e na intenção do usuário (prompt).`,
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'question'
  },
  {
    id: 'intro-2',
    title: 'A Evolução Histórica da IA',
    subtitle: 'Módulo 1: Introdução e Contexto',
    content: `A jornada até a IA Generativa foi longa e cheia de marcos importantes:`,
    timeline: [
      { year: '1950', title: 'Teste de Turing', description: 'Alan Turing propõe um teste para determinar se uma máquina pode exibir comportamento inteligente.' },
      { year: '1956', title: 'Conferência de Dartmouth', description: 'O termo "Inteligência Artificial" é cunhado oficialmente, marcando o nascimento do campo de pesquisa.' },
      { year: '1966', title: 'ELIZA', description: 'Criado no MIT, o primeiro chatbot da história simulava um psicanalista usando regras simples de substituição.' },
      { year: '1997', title: 'Deep Blue', description: 'O supercomputador da IBM faz história ao derrotar o campeão mundial de xadrez, Garry Kasparov.' },
      { year: '2011', title: 'IBM Watson', description: 'Watson vence humanos no jogo de perguntas "Jeopardy!", provando grandes avanços em linguagem natural.' },
      { year: '2012', title: 'AlexNet', description: 'Um marco na revolução do Deep Learning (Aprendizado Profundo), reduzindo drasticamente os erros em reconhecimento de imagem.' },
      { year: '2017', title: 'Arquitetura Transformer', description: 'Pesquisadores do Google publicam "Attention Is All You Need", a base tecnológica para os grandes modelos de linguagem (LLMs) atuais.' },
      { year: '2022', title: 'Boom da IA Generativa', description: 'Lançamento do ChatGPT populariza a IA Generativa para o público em geral, mudando a interação humano-máquina.' },
      { year: 'Hoje', title: 'Era Multimodal', description: 'Modelos avançados como o Google Gemini processam e geram texto, áudio, imagem e vídeo de forma nativa e integrada.' }
    ],
    theme: 'light',
    animationType: 'float',
    backgroundAnimation: 'none'
  },
  {
    id: 'motor',
    title: 'Automação vs. Inteligência Artificial',
    subtitle: 'Módulo 2: O Motor da IA',
    content: `
A distinção fundamental entre automação e IA reside na transição de sistemas que apenas seguem ordens para sistemas que aprendem a decidir. 
Enquanto a automação opera como um 'músculo' programado para tarefas repetitivas sob regras rígidas, a IA atua como um 'cérebro' capaz de analisar contextos, 
aprender com o histórico e lidar com ambiguidades.

**Automação (Regras Fixas):**
* Opera com instruções explícitas e lógicas: *"Se A acontecer, então faça B"*.
* Não aprende com erros e não se adapta a situações novas. Ideal para tarefas repetitivas e previsíveis.
* *Exemplo:* "Se a umidade do solo < 20% às 10h, ligue a irrigação."
* *Ferramentas Comuns:* Zapier, n8n, Make, IFTTT.

**Inteligência Artificial (Julgamento Contextual):**
* Analisa dados, identifica padrões e toma decisões sem programação rígida.
* Aprende continuamente (Machine Learning) e lida com ambiguidades.
* *Exemplo:* "Analise a previsão do tempo, a cor da folha (estresse hídrico) e o histórico para ajustar a irrigação dinamicamente."
    `,
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'none'
  },
  {
    id: 'etica',
    title: 'Cuidados, Ética e Governança',
    subtitle: 'Módulo 3: Uso Responsável',
    content: `
O uso da IA exige responsabilidade, senso crítico e ética, especialmente no setor público.

* **Privacidade e Confidencialidade:** O contrato Google Enterprise da EPAGRI assegura que nossos dados institucionais **não** são utilizados para treinar os modelos públicos. O ambiente se torna "isolado e seguro", mas é fundamental evitar o compartilhamento de informações sensíveis ou pessoais em prompts.
* **Risco de Alucinação:** A IA é probabilística, não um banco de dados exato. Ela pode inventar dados, leis, referências bibliográficas ou fatos históricos com muita convicção.
* **LGPD e Viés Algorítmico:** Modelos de IA podem refletir e amplificar preconceitos presentes nos dados de treinamento. Tenha cuidado redobrado ao processar dados sensíveis, informações pessoais ou ao tomar decisões que afetem cidadãos.
* **Direitos Autorais e Propriedade Intelectual:** A IA pode gerar conteúdo que infringe direitos autorais ou que é baseado em obras protegidas. Sempre verifique a origem e a legalidade do material gerado, especialmente para publicações oficiais.
* **Transparência e Rastreabilidade:** Sempre que usar IA, referencie que houve auxílio de uma ferramenta de IA para garantir transparência e rastreabilidade.
* **Responsabilidade Humana:** A IA é um copiloto, um suporte avançado. A responsabilidade legal, técnica e moral pelo conteúdo gerado e pelas decisões tomadas é sempre do profissional (Pesquisador, Extensionista, Analista).
    `,
    spotlightQuote: 'IA sugere, o humano decide.',
    theme: 'light',
    animationType: 'pulse',
    backgroundAnimation: 'none'
  },
  {
    id: 'prompts-intro',
    title: 'A Arte do Prompt: Conceitos e Técnicas',
    subtitle: 'Módulo 4: Comunicação com a Máquina',
    content: `
**O Prompt é a ponte entre a sua mente e a máquina.**

Mude a mentalidade de "escrever" para "especificar". Em essência, é a instrução, pergunta ou contexto que você fornece a um modelo de IA para obter uma resposta, realizar uma tarefa ou gerar conteúdo específico.

**Técnicas de Prompt (Como a IA processa a solicitação):**
* **Prompt por Função (Role-prompting):** Define um papel específico para a IA para direcionar o tom e o conteúdo da resposta (Exemplo: *"Aja como um Analista Administrativo Financeiro"*).
* **Prompt sem Exemplos (Zero-shot):** Solicitação direta sem fornecer exemplos prévios (Exemplo: *"Liste as pragas da maçã"*).
* **Prompt com Poucos Exemplos (Few-shot):** Inclui 2 ou 3 exemplos de um padrão ou formato desejado antes da solicitação final para calibrar a IA. (Exemplo: *"Exemplo 1: Praga - Ferrugem, Controle - Fungicida. Exemplo 2: Praga - Pulgão, Controle - Inseticida. Agora liste outras pragas da soja da mesma forma"*).
* **Cadeia de Pensamento (Chain-of-thought):** Inclui a instrução para a IA *"Pensar passo a passo"* antes de responder, o que a força a desenvolver a lógica interna e reduz erros. (Exemplo: *"Liste os passos para elaborar um ETP, pensando passo a passo"*).
* **Do Menor para o Maior (Least-to-most):** Envolve a divisão de um problema complexo em subproblemas ou etapas menores (Exemplo: *"Primeiro liste os requisitos legais, depois analise o edital"*).
    `,
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'prompt'
  },
  {
    id: 'prompts-formulas-1',
    title: 'Fórmulas de Estruturação: FOCO e PTF',
    subtitle: 'Módulo 4: Comunicação com a Máquina',
    content: `
Veja abaixo duas fórmulas simples para montar prompts mais claros e úteis no dia a dia.
    `,
    formulaStartNumber: 1,
    formulaCards: [
      {
        name: 'FOCO',
        acronym: 'Foco, Objetivo, Contexto, Output',
        description: 'Estrutura voltada para produção de conteúdo informativo e formal. Funciona bem para relatórios, análises e textos técnicos.',
        exampleTitle: 'Exemplo prático',
        exampleItems: [
          'Foco: impacto da seca na produção de milho em SC.',
          'Objetivo: analisar a perda de produtividade na safra 25/26.',
          'Contexto: usar dados da EPAGRI e considerar o período de nov a mar.',
          'Output: redigir um parágrafo técnico de 5 linhas.',
        ],
      },
      {
        name: 'PTF',
        acronym: 'Persona, Tarefa, Formato',
        description: 'Estrutura prática para tarefas de comunicação, criação de conteúdo e adaptação do tom da resposta.',
        exampleTitle: 'Exemplo prático',
        exampleItems: [
          'Persona: assuma o papel de um jornalista da EPAGRI.',
          'Tarefa: criar um post para Instagram sobre a importância da análise de solo.',
          'Formato: texto informal, até 3 frases curtas, terminando com pergunta de engajamento.',
        ],
      },
    ],
    theme: 'light',
    animationType: 'float',
    backgroundAnimation: 'prompt'
  },
  {
    id: 'prompts-formulas-2',
    title: 'Fórmulas de Estruturação: CARE, PEPE e TAO',
    subtitle: 'Módulo 4: Comunicação com a Máquina',
    content: `
Estas três fórmulas ajudam quando você precisa padronizar respostas, organizar etapas ou pedir algo de forma direta.
    `,
    formulaStartNumber: 3,
    formulaCards: [
      {
        name: 'CARE',
        acronym: 'Contexto, Ação, Resultado, Exemplo',
        description: 'Padroniza estilos de escrita e formatos específicos. O exemplo orienta a resposta com mais precisão.',
        exampleTitle: 'Exemplo prático',
        exampleItems: [
          'Contexto: notícia sobre crédito rural.',
          'Ação: redigir a manchete.',
          'Resultado: tom otimista.',
          'Exemplo: "EPAGRI lança linha de crédito para fortalecer o campo".',
        ],
      },
      {
        name: 'PEPE',
        acronym: 'Papel, Entrada, Passos, Expectativa',
        description: 'Ideal para tarefas mais complexas, quando vale a pena guiar a IA em etapas para reduzir erros.',
        exampleTitle: 'Exemplo prático',
        exampleItems: [
          'Papel: revisor técnico.',
          'Entrada: texto com erros.',
          'Passos: 1. identificar erros;   2. sugerir frases mais concisas.',
          'Expectativa: devolver parágrafo revisado com alterações marcadas.',
        ],
      },
      {
        name: 'TAO',
        acronym: 'Tarefa, Ação, Objetivo',
        description: 'Estrutura curta e direta para pedidos rápidos, especialmente quando o formato final já está claro.',
        exampleTitle: 'Exemplo prático',
        exampleItems: [
          'Tarefa: listar 5 pragas da maçã.',
          'Ação: descrever e sugerir controle.',
          'Objetivo: apresentar resposta em tabela com 3 colunas.',
        ],
      },
    ],
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'prompt'
  },
  {
    id: 'minilab-1',
    title: 'Mini-Lab 1: Prompts',
    subtitle: 'Prática',
    content: `
**Mão na Massa!**

Vamos criar prompts estruturados para as diferentes áreas da EPAGRI utilizando as fórmulas FOCO e PTF.

**Bônus:** *Para prompts mais complexos, vamos usar um Gem Engenheiro de prompt.*
    `,
    links: [
      {
        title: 'Engenheiro de prompt (Gemini)',
        url: 'https://gemini.google.com/gem/1Igx7Igc1yoWnvEAXBvO6mTY-Ck5fyzTl?usp=sharing',
        icon: 'sparkles',
      },
    ],
    examples: [
      { area: 'RH', text: 'PTF: Você é um analista de RH da EPAGRI. Crie um comunicado interno sobre capacitação em IA para os colaboradores. Em um e-mail formal, objetivo, com assunto e 3 orientações principais.' },
      { area: 'Financeiro', text: 'FOCO: Seu foco são despesas de viagem por regional. Identifique padrões de gasto e oportunidades de economia. Use dados consolidados do último trimestre. Construa um resumo em 5 bullets com linguagem executiva.' },
      { area: 'Contratos', text: 'PTF: Você é um empregado que atua com contratos administrativos. Elabore um checklist inicial para revisar uma minuta contratual. Em formato de lista numerada, linguagem clara, destacando atenção a prazos, penalidades e fiscalização.' },
      { area: 'Administrativo', text: 'FOCO: Organize as demandas recebidas por e-mail. Seu objetivo é priorizar atendimentos por urgência e assunto. Considere mensagens de setores internos da EPAGRI ao longo da semana. Gere uma tabela com colunas "prioridade", "tema" e "ação sugerida".' }
    ],
    theme: 'light',
    animationType: 'float',
    backgroundAnimation: 'minilab'
  },
  {
    id: 'notebooklm',
    title: 'NotebookLM: Análise de Bases',
    subtitle: 'Módulo 5',
    content: `
O **NotebookLM** é uma IA que responde **apenas** com base nos documentos. Ele não busca conhecimento na internet, mas sim no conteúdo específico que você fornece, garantindo respostas precisas e contextualizadas.

**Exemplos de uso na EPAGRI:**

Veja alguns cenários em que o NotebookLM pode apoiar diferentes áreas com mais precisão e rastreabilidade.
    `,
    productBadge: 'notebooklm',
    examples: [
      {
        area: 'Jurídico e Administrativo',
        text: 'Suba manuais de licitação, normas de convênios e regulamentos. Depois, faça perguntas específicas e peça que a resposta aponte exatamente onde aquela informação aparece no documento.',
      },
      {
        area: 'Pesquisa e Ensino',
        text: 'Carregue artigos científicos, boletins técnicos e relatórios de ensaio. Use o NotebookLM para resumir estudos, comparar resultados e identificar convergências entre documentos.',
      },
      {
        area: 'RH e Financeiro',
        text: 'Monte uma base com manuais internos, orientações e documentos institucionais. A partir disso, peça resumos, extração de pontos-chave e respostas para dúvidas operacionais.',
      },
    ],
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'notebook'
  },
  {
    id: 'minilab-3',
    title: 'Mini-Lab 3: Notebook',
    subtitle: 'Prática',
    content: `
**Exercício prático com documentos reais.**

Vamos baixar os arquivos de referência, subir no NotebookLM e usar esse material como contexto para perguntas e resumos.
    `,
    productBadge: 'notebooklm',
    links: [
      { title: 'PCCS', url: 'https://drive.google.com/file/d/1AltTp3d64E6GfyD4RFSY3yev4mDovBfe/view', icon: 'download' },
      { title: 'Regimento Interno', url: 'https://transparencia.epagri.sc.gov.br/wp-content/uploads/2026/02/REG.DEX_.0001.v02.03-Regimento-Interno-EPAGRI-2026_compressed.pdf', icon: 'download' }
    ],
    examples: [
      { area: 'Passo 1', text: 'Baixe os dois arquivos indicados no slide e faça o upload deles no NotebookLM para montar a base de consulta.' },
      { area: 'Passo 2', text: 'Faremos perguntas sobre os documentos carregados para extrair informações relevantes. Pergunte sobre as atribuições do seu cargo ou do seu departamento estadual.' },
],
    theme: 'light',
    animationType: 'float',
    backgroundAnimation: 'notebook'
  },
  {
    id: 'gemini-gems',
    title: 'Gemini e Gem',
    subtitle: 'Módulo 6',
    content: `
O **Gemini** é a nova geração de LLMs do Google, com capacidade multimodal nativa (texto, imagem, áudio e vídeo). Possui uma "janela de contexto" de até 2 milhões de tokens, permitindo processar grandes volumes de informação em uma única interação.

**Gems (Agentes Personalizados):**
O Gem do Google é um agente personalizado que pode ser treinado com dados específicos para realizar tarefas especializadas e repetitivas.
    `,
  productBadge: 'gemini',
    examples: [
      { area: 'Aquisições', text: 'Um Gem treinado com as regras de compras públicas para auxiliar na elaboração de Estudos Técnicos Preliminares (ETP) e Termos de Referência (TR).' },
      { area: 'Marketing', text: 'Um Gem "Revisor Técnico" que sempre ajusta textos para a linguagem padrão de publicações da EPAGRI.' },
      { area: 'Financeiro', text: 'Um Gem voltado para apoiar a leitura de normativos internos, resumir orientações recorrentes e sugerir rascunhos de explicação sobre rotinas de prestação de contas e despesas.' }
    ],
    theme: 'light',
    animationType: 'pulse',
    backgroundAnimation: 'gemini'
  },
  {
    id: 'minilab-4',
    title: 'Mini-Lab 4: Gemini & Gem',
    subtitle: 'Prática',
    content: `
**Exercício prático, mão na massa!**

Vamos explorar como usar as duas ferramentas em conjunto para potencializar a análise e a criação de conteúdo.
    `,
  productBadge: 'gemini',
  links: [
      { title: 'PCCS', url: 'https://drive.google.com/file/d/1AltTp3d64E6GfyD4RFSY3yev4mDovBfe/view', icon: 'download' },
      { title: 'Regimento Interno', url: 'https://transparencia.epagri.sc.gov.br/wp-content/uploads/2026/02/REG.DEX_.0001.v02.03-Regimento-Interno-EPAGRI-2026_compressed.pdf', icon: 'download' }
    ],
    examples: [
      { area: 'Passo 1', text: 'Baixe os dois arquivos indicados no slide e faça o upload deles no Gemini para montar a base de consulta.' },
      { area: 'Passo 2', text: 'Vamos pedir para gerar um relatório com as atribuições do seu cargo ou do seu departamento estadual.' },
],
    theme: 'light',
    animationType: 'float',
    backgroundAnimation: 'gemini'
  },
  {
    id: 'materiais',
    title: 'Extras',
    subtitle: 'Materiais e Ferramentas Adicionais',
    content: `
**Recursos adicionais para explorar:**

Visando apoiar a continuidade do aprendizado e a implementação prática da IA na EPAGRI, aqui estão alguns recursos extras que podem ser úteis para aprofundar seus conhecimentos e experimentar novas ferramentas:

Se preferir temos uma pasta compartilhada no Drive para acessar os materiais, [acesse aqui.](https://drive.google.com/drive/folders/1cAw6l1y7GmtR6W3Q26jqCIqJXgdOex_X?usp=sharing)
    `,
    links: [
      {
        title: 'EpagrIA',
        url: 'https://epagria.epagri.sc.gov.br/',
        icon: 'sparkles',
      },
      {
        title: 'Guia de TR e ETP',
        url: 'https://gemini.google.com/gem/185MSs-9-RLJi-aDDd5mAI-z12C1gqGiF?usp=sharing',
        icon: 'file-text',
      },
      {
        title: 'RILC - NotebookLM',
        url: 'https://notebooklm.google.com/notebook/caafa64e-0529-4c53-b5b4-2de8b02b18b8',
        icon: 'download',
      },
      {
        title: 'Engenheiro de Prompts',
        url: 'https://gemini.google.com/gem/1Igx7Igc1yoWnvEAXBvO6mTY-Ck5fyzTl?usp=sharing',
        icon: 'sparkles',
      },
      {
        title: 'Guia de Prompts Gemini',
        url: 'https://drive.google.com/file/d/1O7fp1QKvzc3NB1BT_msGx8LeLJSV5mU5/view?usp=sharing',
        icon: 'download',
      },
      {
        title: 'Gemini em conteúdos visuais',
        url: 'https://workspace.google.com/blog/ai-and-machine-learning/beyond-the-hype-5-practical-ways-to-use-ai-powered-visual-content?utm_source=cloud_sfdc&utm_medium=email&utm_campaign=FY26-Q1-global-GlobalNurture-GWS39400-emailnurture-dl-sugarpine&utm_content=q1infoworkeremail2&utm_term=&mkt_tok=ODA4LUdKVy0zMTQAAAGhC_G39gT0qvQ6F3MsEe_Cl4vtDopTcCBbXYWeXGfmyktiSQiwCLS31OCxin_er8omB-iRGHnkpXBYrT2_hti0lbuGbiRqWnDXMYKzTvM6aOpvazBT-Y3Z',
        icon: 'download',
      },
    ],
    theme: 'light',
    animationType: 'pulse',
    backgroundAnimation: 'question'
  },
  {
    id: 'workspace-text',
    title: 'Workspace I: Redação e Análise',
    subtitle: 'Módulo 7',
    content: `
A IA já está embutida no Google Workspace, trazendo funcionalidades avançadas para redação, análise de dados e criação de conteúdo visual.

**Gmail:**
* Escreve e-mails automaticamente com base em instruções fornecidas.
* Ajusta o tom de escrita do e-mail (de informal para formal).
* Resume longas threads de e-mail em tópicos.
* Sugere respostas rápidas e personalizadas para cada mensagem.

**Google Docs:**
* Estrutura documentos complexos a partir de tópicos.
* Transforma notas esparsas de uma reunião no esqueleto de um projeto.
* Sugere revisões gramaticais e de estilo avançadas.
* Gera resumos executivos de documentos longos, destacando os pontos-chave para tomada de decisão.
    `,
    links: [
      { title: 'Gmail', url: 'https://mail.google.com', icon: 'mail' },
      { title: 'Google Docs', url: 'https://docs.google.com/document/d/1dBQyBGN5EXjvkk7Yf0GyVAVaBCF81AeipVvJgm1Pbvs/edit?usp=sharing', icon: 'file-text' }
    ],
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'google'
  },
  {
    id: 'workspace-data',
    title: 'Workspace II: Dados e Visual',
    subtitle: 'Módulo 8',
    content: `
A IA também potencializa a análise de dados e a criação de conteúdo visual, transformando a forma como interagimos com planilhas e apresentações.

**Google Sheets:**
* Identifica inconsistências em planilhas de campo rapidamente.
* Você digita o que quer em linguagem natural e a IA cria a fórmula.
* Gera resumos automáticos de grandes volumes de dados.
* Cria gráficos e dashboards a partir de descrições textuais, sem necessidade de configuração manual.

**Google Slides:**
* Conversão de boletins técnicos densos em roteiros visuais dinâmicos para dias de campo.
* Geração de imagens exclusivas para ilustrar apresentações.
* Criação de layouts e designs personalizados.
    `,
    links: [
      { title: 'Google Sheets', url: 'https://docs.google.com/spreadsheets/d/1GTKRDexgP9i6Jr4GnDGCq6oWeZhTUItXqd6orITYZCI/edit?usp=sharing', icon: 'grid' },
      { title: 'Google Slides', url: 'https://docs.google.com/presentation/d/1Pdu9qpIxWqU5iqJC5LVW2nKyt2Y2jeKF_PEK4uwzc18/edit?usp=sharing', icon: 'presentation' }
    ],
    animationType: 'slide',
    backgroundAnimation: 'google'
  },
  {
    id: 'panorama-1',
    title: 'Geradores de Imagens',
    subtitle: 'Módulo 9: Panorama de Mercado',
    content: `
Ferramentas para criação de materiais de divulgação, ilustrações técnicas e prototipagem visual, semelhantes ao **Nano Banana** do Google.

* **Midjourney:** Referência em qualidade estética e realismo. Operado via Discord, ideal para campanhas de alto impacto visual (Comunicação e Marketing).
* **DALL-E 3 (OpenAI):** Integrado ao ecossistema Microsoft e ChatGPT. Preciso em seguir instruções complexas e renderizar textos legíveis nas imagens.
* **Adobe Firefly:** A escolha para compliance e segurança jurídica. Treinado em bancos de imagens licenciadas (Adobe Stock), garantindo que não infrinjam direitos autorais.
    `,
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'marketplace'
  },
  {
    id: 'panorama-2',
    title: 'Texto, Raciocínio e Vídeos',
    subtitle: 'Módulo 9: Panorama de Mercado',
    content: `
**IA Generativa de Texto e Raciocínio (LLMs), semelhante ao Gemini:**
* **ChatGPT (OpenAI):** Pioneiro e versátil. Excelente para raciocínio lógico e suporte à programação.
* **Claude (Anthropic):** Focado em segurança e escrita humanizada. Grande "janela de contexto", ideal para analisar múltiplos PDFs simultaneamente (Jurídico e Pesquisa).
* **DeepSeek:** Alta eficiência e baixo custo. Performance excepcional em matemática, lógica e codificação.

**Criadores de Vídeos (Text-to-Video):**
* **Sora (OpenAI):** Alta fidelidade para vídeos de até 1 minuto com consistência física *(até 26 de abril de 2026)*.
* **Luma Dream Machine:** Acessível e de alta qualidade. Útil para animar fotos históricas.
* **Kling AI:** Potente para movimentos complexos e vídeos longos (até 2 minutos), ideal para tutoriais.
    `,
    theme: 'light',
    animationType: 'float',
    backgroundAnimation: 'marketplace'
  },
  {
    id: 'panorama-3',
    title: 'Prototipagem, Automação e Apresentações',
    subtitle: 'Módulo 9: Panorama de Mercado',
    content: `
**Criação de Apresentações:**
* **Beautiful.ai:** IA focada em design que ajusta o layout automaticamente.
* **Tome:** Focado em "storytelling" assistido por IA.
* **Prezi AI:** Estruturas de zoom e mapas mentais dinâmicos a partir de textos.

**Insights e Prototipagem:**
* **Google AI Studio:** Ambiente para desenvolvedores testarem o Gemini 1.5 Pro com até 2 milhões de tokens.
* **Gamma App:** Cria sites e apresentações instantaneamente a partir de um prompt.
* **Framer AI:** Design profissional de sites com layouts responsivos gerados por IA.

**Gerenciadores de Fluxos (No-Code):**
* **Make:** Interface visual sofisticada para fluxos complexos.
* **n8n:** Alternativa poderosa com instalação em servidores próprios (self-hosted).
* **Zapier:** Líder em integrações simples e ecossistema de apps.
    `,
    theme: 'light',
    animationType: 'slide',
    backgroundAnimation: 'marketplace'
  },
  {
    id: 'panorama-4',
    title: 'Ferramentas Setoriais',
    subtitle: 'Módulo 9: Panorama de Mercado',
    content: `
**Para Pesquisa e Ensino:**
* **Perplexity AI:** Motor de busca que cita fontes acadêmicas em tempo real.
* **Scite.ai:** Analisa o contexto de citações em artigos científicos.
* **Consensus:** Um motor de busca que usa IA para extrair conclusões diretamente de artigos científicos revisados por pares.
* **ChatPDF / AskYourPDF:** Analisa rapidamente editais de licitação volumosos, buscando palavras-chave e prazos.

**Para Jurídico, RH e Administração:**
* **Projuris Contratos:** Solução para extrair dados de documentos, controlar prazos de renovação automaticamente e gerir o ciclo de vida contratual.
* **Gupy Clima e Engajamento:** Utilizada para analisar o sentimento dos servidores em pesquisas internas, ajudando a identificar focos de desmotivação ou sobrecarga antes que se tornem problemas de gestão.
* **IBM watsonx Orchestrate:** Oferece agentes de IA que automatizam tarefas complexas de RH entre sistemas, como extração de dados para folhas de pagamento ou gestão de benefícios de forma segura e em escala.
* **Jus IA:** Plataforma brasileira que analisa jurisprudência e gera peças jurídicas.
* **Alice (CGU):** Ferramenta desenvolvida pela Controladoria-Geral da União que usa IA para analisar editais e atas de registro de preços, identificando riscos de irregularidades ou sobrepreço automaticamente.

    `,
    theme: 'light',
    animationType: 'pulse',
    backgroundAnimation: 'marketplace'
  },
  {
    id: 'oficina',
    title: 'Oficina de Projetos',
    subtitle: 'Laboratório Final',
    content: `
**Desenvolvimento da solução.**

Reúnam-se em grupos por área de atuação ou afinidade.

Identifiquem um "gargalo" ou tarefa repetitiva do setor que pode ser resolvido com inteligência artificial. Pensem em algo que tome tempo, seja complexo ou que exija análises demoradas ou repetitivas de informações.

Desenvolvam uma solução utilizando o **Gemini, Gem** e/ou o **NotebookLM** e preparem uma apresentação rápida *(Showcase)* demonstrando:
* Qual era o problema?
* Como a IA foi aplicada?
* Qual o resultado esperado ou ganho de tempo?
    `,
    theme: 'light',
    animationType: 'pulse',
    backgroundAnimation: 'challenge'
  },
  {
    id: 'showcase',
    title: 'Showcase',
    subtitle: 'Apresentação dos Projetos',
    content: `
**Apresentação dos Projetos**

Chegou a hora de compartilhar as soluções desenvolvidas com a turma! Cada grupo terá alguns minutos para demonstrar como a IA pode resolver o problema identificado no seu setor.

**Lembre-se:** o objetivo é mostrar o potencial da IA para transformar processos e otimizar o trabalho na EPAGRI. Sejam criativos e aproveitem para inspirar os colegas!
 `,
    theme: 'light',
    animationType: 'float',
    backgroundAnimation: 'handson'
  },
  {
    id: 'celebration',
    title: 'Parabéns a Todos! 🎉🥳',
    subtitle: 'Encerramento',
    content: `

O futuro é promissor e cheio de possibilidades. Continuem explorando, experimentando e inovando com as ferramentas que conhecemos. O conhecimento é o primeiro passo para a transformação na EPAGRI!

Estamos à disposição para apoiar a implementação dos projetos e para continuar essa jornada. 

**Muito obrigado a todos!**
`,
    examples: [
      { area: 'Dúvidas e Suporte', text: 'Equipe DEGTI e DEPLAN\n\ndesenvolvimento@epagri.sc.gov.br\nplanejamento@epagri.sc.gov.br\nalinegirotto@epagri.sc.gov.br\n	humbertoneto@epagri.sc.gov.br\n\nContato Aline: (48) 3665-5403\nContato Humberto: (48) 3665-5297\n' }
    ],
    theme: 'dark',
    animationType: 'pulse',
    backgroundAnimation: 'celebration'
  },
  {
    id: 'avaliacao',
    title: 'Sua Opinião É Importante!',
    subtitle: 'Avaliação da Capacitação',
    content: `
**Queremos saber sua experiência!**

Acesse o QR Code no seu celular e responda nosso formulário de avaliação. Seus comentários, sugestões e feedback são essenciais para melhorar futuras capacitações e tornar a jornada de IA na EPAGRI cada vez melhor.

[Acesse o formulário.](https://docs.google.com/forms/d/e/1FAIpQLSflk94mWsf6QDRqPNZX23ZmkCcIl-1ni9pzdOMRl5TMkovl-g/viewform?usp=preview)

**Obrigado por participar!** 🙏
    `,
    qrCode: 'https://docs.google.com/forms/d/e/1FAIpQLSflk94mWsf6QDRqPNZX23ZmkCcIl-1ni9pzdOMRl5TMkovl-g/viewform?usp=preview',
    theme: 'dark',
    animationType: 'float',
    backgroundAnimation: 'celebration'
  },
  {
    id: 'coffee',
    title: 'Coffee Break',
    subtitle: 'Intervalo de Integração',
    content: `
Pausa para um café e networking. Voltamos em breve!
    `,
    theme: 'dark',
    animationType: 'bounce',
    backgroundAnimation: 'coffee'
  },
  {
    id: 'almoco',
    title: 'Almoço',
    subtitle: 'Intervalo',
    content: `
**Bom apetite!** Retornamos após o almoço.
    `,
    theme: 'dark',
    animationType: 'bounce',
    backgroundAnimation: 'lunch'
  },
];

