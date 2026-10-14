export const notaPcD = "Pessoas com deficiência são bem-vindas e não há limite de idade.";

export const regrasInscricao = {
  pcdSemLimiteIdade: true
};

export const cursos = [
  {
    id: "suporte-ti",
    titulo: "Suporte em T.I.",
    resumoBanner: "Montagem, manutenção de hardware e software, e administração de redes",
    imagemBanner: "suporte-ti-banner.webp",
    sobre: "Capacita para montagem e manutenção de hardware e software, instalação e atualização de sistemas operacionais e equipamentos.",
    habilidades: [
      {
        titulo: "Montagem e manutenção de computadores",
        topicos: [
          "Componentes internos: placa-mãe, processador, memória e armazenamento",
          "Montagem passo a passo de um computador",
          "Troca de peças e upgrades",
          "Diagnóstico de falhas de hardware",
          "Limpeza e manutenção preventiva"
        ]
      },
      {
        titulo: "Instalação de sistemas operacionais",
        topicos: [
          "Particionamento e formatação de discos",
          "Instalação do Windows e noções de Linux",
          "Drivers e atualizações",
          "Backup e restauração de dados"
        ]
      },
      {
        titulo: "Configuração de redes básicas",
        topicos: [
          "Conceitos de redes: endereço IP, DNS, DHCP e Wi-Fi",
          "Cabeamento e crimpagem de cabos de rede",
          "Configuração de roteadores e switches",
          "Compartilhamento de arquivos e impressoras",
          "Diagnóstico de problemas de conexão"
        ]
      },
      {
        titulo: "Suporte técnico ao usuário",
        topicos: [
          "Atendimento e escuta ativa do problema",
          "Abertura e registro de chamados",
          "Resolução guiada passo a passo",
          "Noções de suporte remoto",
          "Comunicação clara com usuários não técnicos"
        ]
      },
      {
        titulo: "Segurança da informação: noções básicas",
        topicos: [
          "Senhas fortes e autenticação em dois fatores",
          "Antivírus e proteção contra malwares",
          "Phishing e golpes digitais",
          "Backup e proteção de dados",
          "Noções básicas da LGPD"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "14 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: false
    },
    requisitos: {
      idadeMinima: 14,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-8"
    },
    turnos: [
      { turno: "Manhã", observacao: "Início imediato" },
      { turno: "Tarde", observacao: "Cadastro reserva" }
    ]
  },

  {
    id: "mecanica-automotiva",
    titulo: "Mecânica Automotiva",
    resumoBanner: "Manutenção, reparo e diagnóstico de veículos automotores.",
    imagemBanner: "mecanica-banner.webp",
    sobre: "O jovem aprende a realizar diagnósticos, manutenção preventiva (revisão) e corretiva (reparo) em veículos automotores. Jovens do curso irão realizar prática na empresa.",
    habilidades: [
      {
        titulo: "Diagnóstico de falhas veiculares",
        topicos: [
          "Identificação de ruídos, vibrações e sinais de falha",
          "Leitura de luzes de alerta do painel",
          "Noções de sistema elétrico e bateria",
          "Uso de instrumentos básicos de medição"
        ]
      },
      {
        titulo: "Manutenção preventiva",
        topicos: [
          "Troca de óleo e filtros",
          "Revisão de freios, suspensão e pneus",
          "Verificação de fluidos e correias",
          "Plano de revisões periódicas"
        ]
      },
      {
        titulo: "Manutenção corretiva",
        topicos: [
          "Funcionamento básico do motor",
          "Reparo e substituição de componentes mecânicos",
          "Sistemas de freio e transmissão",
          "Testes após o reparo"
        ]
      },
      {
        titulo: "Prática em empresa parceira",
        topicos: [
          "Rotina de oficina mecânica",
          "Segurança e uso de EPIs",
          "Trabalho em equipe e atendimento ao cliente",
          "Organização de ferramentas e do espaço de trabalho"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "18 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: false
    },
    requisitos: {
      idadeMinima: 18,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-8"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "corte-costura-modelagem",
    titulo: "Corte, Costura e Modelagem Sustentável",
    resumoBanner: "Confecção de roupas com foco em moda sustentável e técnicas de modelagem.",
    imagemBanner: "costura-banner.webp",
    sobre: "Oferece formação profissional com conhecimentos e habilidades básicas e específicas ao exercício da função. Ao final do curso, os jovens deverão apresentar competências para organizar o trabalho em etapas, prever recursos, distribuir o tempo, tomar decisões, localizar e selecionar informações, atender procedimentos de segurança e legislação específica, aplicar princípios de preservação ambiental e Gestão pela Qualidade, e trabalhar eficazmente com outras pessoas.",
    habilidades: [
      {
        titulo: "Técnicas de corte e costura",
        topicos: [
          "Tipos de tecidos e aviamentos",
          "Operação da máquina de costura reta e overloque",
          "Pontos e acabamentos",
          "Corte de tecidos com precisão",
          "Confecção de peças básicas"
        ]
      },
      {
        titulo: "Modelagem de peças",
        topicos: [
          "Tomada de medidas do corpo",
          "Traçado de moldes básicos",
          "Ajustes e adaptações de modelagem",
          "Interpretação de fichas técnicas"
        ]
      },
      {
        titulo: "Moda sustentável",
        topicos: [
          "Princípios de sustentabilidade na moda",
          "Reaproveitamento de tecidos e retalhos",
          "Redução de desperdício no corte",
          "Customização e reforma de peças"
        ]
      },
      {
        titulo: "Organização do trabalho",
        topicos: [
          "Planejamento das etapas de produção",
          "Cálculo de materiais e tempo",
          "Normas de segurança no ambiente de trabalho",
          "Gestão pela qualidade",
          "Trabalho em equipe"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "15 a 22 anos",
      escolaridadeMinima: "7º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 15,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-7"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "projetista-moveis",
    titulo: "Projetista de Móveis",
    resumoBanner: "Planejamento e execução de projetos de móveis e marcenaria.",
    imagemBanner: "projetista-banner.webp",
    sobre: "Ao final do curso o aprendiz adquire competências compatíveis com o ofício de Auxiliar de Marcenaria e com as necessidades das empresas, promovendo sua inserção no mercado de trabalho e na sociedade. Também terá noções de como projetar móveis.",
    habilidades: [
      {
        titulo: "Fundamentos de marcenaria",
        topicos: [
          "Tipos de madeira e derivados (MDF, compensado)",
          "Medição, marcação e corte",
          "Técnicas de união e encaixe",
          "Lixamento e acabamento"
        ]
      },
      {
        titulo: "Noções de projeto de móveis",
        topicos: [
          "Leitura e interpretação de desenho técnico",
          "Esboço e planejamento de peças",
          "Ergonomia e funcionalidade",
          "Lista de materiais e orçamento básico"
        ]
      },
      {
        titulo: "Uso de ferramentas e equipamentos",
        topicos: [
          "Ferramentas manuais de marcenaria",
          "Serras, furadeiras e lixadeiras",
          "Segurança e uso de EPIs",
          "Cuidados e manutenção dos equipamentos"
        ]
      },
      {
        titulo: "Preparação para o mercado de trabalho",
        topicos: [
          "Rotina de uma marcenaria",
          "Postura profissional e pontualidade",
          "Trabalho em equipe",
          "Direitos e deveres do jovem aprendiz"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "16 a 22 anos",
      escolaridadeMinima: "1º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 16,
      idadeMaxima: 22,
      escolaridadeMinima: "medio-1"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "eletromecanica-elevadores",
    titulo: "Eletromecânica de Elevadores",
    resumoBanner: "Manutenção, operação e segurança de sistemas de elevadores.",
    imagemBanner: "elevadores-banner.webp",
    sobre: "Conhecer as tecnologias relacionadas à prestação de serviços de manutenção, troca de peças e assistência técnica. Proporciona experimentações práticas no ambiente de manutenção em equipamentos e reconhece a importância das relações humanas no trabalho, identificando possibilidades e limites da atuação profissional.",
    habilidades: [
      {
        titulo: "Tecnologias de elevadores",
        topicos: [
          "Componentes: cabine, contrapeso, cabos e guias",
          "Sistemas de tração e motores",
          "Comandos e painéis elétricos",
          "Tipos de elevadores e aplicações"
        ]
      },
      {
        titulo: "Manutenção e troca de peças",
        topicos: [
          "Manutenção preventiva e corretiva",
          "Substituição de componentes",
          "Lubrificação e ajustes",
          "Registro de serviços realizados"
        ]
      },
      {
        titulo: "Assistência técnica segura",
        topicos: [
          "Normas de segurança e uso de EPIs",
          "Trabalho em altura: noções básicas",
          "Segurança elétrica",
          "Procedimentos de emergência"
        ]
      },
      {
        titulo: "Relações humanas no trabalho",
        topicos: [
          "Comunicação em equipe",
          "Atendimento ao cliente em chamados técnicos",
          "Postura e ética profissional",
          "Limites e possibilidades da atuação profissional"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "17 a 22 anos",
      escolaridadeMinima: "2º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 17,
      idadeMaxima: 22,
      escolaridadeMinima: "medio-2"
    },
    turnos: [
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "cabeleireiro",
    titulo: "Assistente de Cabeleireiro",
    resumoBanner: "Técnicas de corte, coloração, tratamentos capilares e atendimento em salões.",
    imagemBanner: "cabeleireiro-banner.webp",
    sobre: "Capacita os jovens a atuarem como assistentes em salões de beleza, no tratamento de cabelos. Oferece formação profissional com conhecimentos e habilidades básicas e específicas ao exercício da função.",
    habilidades: [
      {
        titulo: "Tratamento capilar",
        topicos: [
          "Tipos de cabelo e couro cabeludo",
          "Lavagem e hidratação",
          "Tratamentos e escovação",
          "Noções de corte e penteados"
        ]
      },
      {
        titulo: "Produtos e procedimentos",
        topicos: [
          "Shampoos, condicionadores e máscaras",
          "Noções de coloração e descoloração",
          "Preparo e aplicação de produtos",
          "Higiene e biossegurança no salão"
        ]
      },
      {
        titulo: "Atendimento ao cliente",
        topicos: [
          "Recepção e acolhimento",
          "Comunicação e escuta das necessidades do cliente",
          "Postura e apresentação profissional",
          "Organização da agenda e do espaço de trabalho"
        ]
      },
      {
        titulo: "Prática assistida",
        topicos: [
          "Apoio ao cabeleireiro nos procedimentos",
          "Preparo de materiais e bancada",
          "Acompanhamento de atendimentos reais",
          "Trabalho em equipe no salão"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "17 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 17,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-8"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "vendas-atendimento",
    titulo: "Vendas e Atendimento ao Cliente",
    resumoBanner: "Técnicas de vendas, atendimento ao cliente e negociação comercial.",
    imagemBanner: "vendas-banner.webp",
    sobre: "Reconhecer o panorama do varejo no mercado atual. Oferece um conjunto de experiências teórico-práticas na área de Vendas e reconhece os princípios da qualidade na prestação de serviços.",
    habilidades: [
      {
        titulo: "Panorama do varejo",
        topicos: [
          "Como funciona o comércio varejista",
          "Perfil do consumidor atual",
          "Vendas presenciais e online",
          "Rotinas de loja: estoque, vitrine e caixa"
        ]
      },
      {
        titulo: "Atendimento ao cliente",
        topicos: [
          "Comunicação clara e cordial",
          "Escuta ativa das necessidades",
          "Lidando com dúvidas e reclamações",
          "Pós-venda e fidelização"
        ]
      },
      {
        titulo: "Técnicas de vendas",
        topicos: [
          "Abordagem e sondagem do cliente",
          "Apresentação de produtos e benefícios",
          "Negociação e contorno de objeções",
          "Fechamento da venda",
          "Noções de matemática comercial"
        ]
      },
      {
        titulo: "Qualidade na prestação de serviços",
        topicos: [
          "Princípios de qualidade no atendimento",
          "Ética e postura profissional",
          "Trabalho em equipe",
          "Direitos do consumidor: noções básicas"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "15 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 15,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-8"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "desporto",
    titulo: "Desporto",
    resumoBanner: "Formação em educação física, esportes e atividades recreativas.",
    imagemBanner: "desporto-banner.webp",
    sobre: "Oferece um conjunto de experiências teórico-práticas na área do Desporto. Executa as rotinas básicas do processo de trabalho da prática desportiva e reconhece o panorama da prática desportiva no mercado atual.",
    habilidades: [
      {
        titulo: "Prática desportiva",
        topicos: [
          "Fundamentos de diferentes modalidades esportivas",
          "Aquecimento, alongamento e condicionamento físico",
          "Regras e arbitragem básica",
          "Organização de atividades e materiais esportivos"
        ]
      },
      {
        titulo: "Trabalho em equipe",
        topicos: [
          "Jogos e atividades coletivas",
          "Liderança e cooperação",
          "Atividades recreativas para diferentes públicos",
          "Respeito, ética e espírito esportivo"
        ]
      },
      {
        titulo: "Panorama do mercado esportivo",
        topicos: [
          "Áreas de atuação no esporte",
          "Esporte, saúde e qualidade de vida",
          "Eventos e projetos esportivos",
          "Primeiros socorros: noções básicas"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "14 a 22 anos",
      escolaridadeMinima: "7º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 14,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-7"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "gastronomia",
    titulo: "Gastronomia",
    resumoBanner: "Técnicas culinárias profissionais e preparação de alimentos.",
    imagemBanner: "gastronomia-banner.webp",
    sobre: "Ensina informações técnicas sobre Gastronomia. Capacita os jovens a desenvolver atividades de rotina do setor de cozinha, atendimento e restaurantes.",
    habilidades: [
      {
        titulo: "Técnicas de cozinha",
        topicos: [
          "Cortes e preparo de ingredientes",
          "Métodos de cocção: assar, refogar, grelhar e cozinhar",
          "Preparo de molhos, massas e sobremesas básicas",
          "Aproveitamento integral dos alimentos"
        ]
      },
      {
        titulo: "Rotina do setor de cozinha",
        topicos: [
          "Higiene pessoal e manipulação segura de alimentos",
          "Organização da bancada (mise en place)",
          "Armazenamento e controle de estoque",
          "Uso e cuidados com utensílios e equipamentos"
        ]
      },
      {
        titulo: "Atendimento em restaurantes",
        topicos: [
          "Postura e apresentação profissional",
          "Atendimento ao cliente no salão",
          "Comunicação entre cozinha e salão",
          "Trabalho em equipe"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "18 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 18,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-8"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "refrigeracao-climatizacao",
    titulo: "Refrigeração e Climatização",
    resumoBanner: "Instalação e manutenção de sistemas de ar condicionado e refrigeração.",
    imagemBanner: "refrigeracao-banner.webp",
    sobre: "Prepara os aprendizes para auxiliar os serviços de instalação, reparação e manutenção de máquinas e equipamentos de ar-condicionado em ambientes residenciais, comerciais e industriais.",
    habilidades: [
      {
        titulo: "Instalação de climatização",
        topicos: [
          "Princípios do ciclo de refrigeração",
          "Tipos de aparelhos: split, janela e outros",
          "Instalação de unidades internas e externas",
          "Tubulação, drenagem e conexões elétricas básicas"
        ]
      },
      {
        titulo: "Reparação de equipamentos",
        topicos: [
          "Componentes: compressor, condensador e evaporador",
          "Diagnóstico de falhas comuns",
          "Substituição de peças",
          "Uso de ferramentas e instrumentos de medição"
        ]
      },
      {
        titulo: "Manutenção preventiva",
        topicos: [
          "Limpeza de filtros e serpentinas",
          "Verificação de funcionamento e eficiência",
          "Rotinas em ambientes residenciais, comerciais e industriais",
          "Segurança, EPIs e descarte correto de resíduos"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "18 a 22 anos",
      escolaridadeMinima: "2º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 18,
      idadeMaxima: 22,
      escolaridadeMinima: "medio-2"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "assistente-administrativo",
    titulo: "Assistente Administrativo",
    resumoBanner: "Gestão de documentos, atendimento e rotinas administrativas empresariais.",
    imagemBanner: "adm-banner.webp",
    sobre: "Oferece formação profissional básica voltada ao desenvolvimento de competências técnicas e socioemocionais necessárias ao exercício de atividades administrativas em empresas públicas e privadas. Prepara o jovem para atuar em rotinas de escritório, controle de documentos, atendimento ao público, elaboração de relatórios, apoio em processos de gestão e execução de tarefas relacionadas à administração de recursos materiais e humanos.",
    habilidades: [
      {
        titulo: "Rotinas de escritório",
        topicos: [
          "Organização e arquivamento de documentos",
          "Redação de e-mails e comunicados",
          "Informática básica: editor de texto e planilhas",
          "Agenda, protocolo e controle de correspondências"
        ]
      },
      {
        titulo: "Atendimento ao público",
        topicos: [
          "Atendimento presencial e telefônico",
          "Comunicação profissional",
          "Postura e ética no ambiente corporativo",
          "Lidando com situações difíceis"
        ]
      },
      {
        titulo: "Elaboração de relatórios",
        topicos: [
          "Coleta e organização de informações",
          "Planilhas, tabelas e gráficos simples",
          "Estrutura de um relatório",
          "Apoio em processos de gestão"
        ]
      },
      {
        titulo: "Administração de recursos",
        topicos: [
          "Controle de materiais e estoque",
          "Noções de rotinas de recursos humanos",
          "Noções de finanças e orçamento",
          "Planejamento e organização do tempo"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "14 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 14,
      idadeMaxima: 22,
      escolaridadeMinima: "fund-8"
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "desenvolvimento-web",
    titulo: "Desenvolvimento Web",
    resumoBanner: "Criação e arquitetura de softwares e sites modernos.",
    imagemBanner: "programacao-banner.webp",
    sobre: "Forma o aluno em desenvolvimento web e tecnologias digitais, começando por fundamentos de informática, lógica de programação e uso de IDEs. Ensina a criar sites responsivos com HTML5 e CSS3, desenvolver backend em PHP, estruturar e manipular bancos de dados em SQL e construir aplicações completas com operações CRUD usando PHP, SQL e Bootstrap. Inclui introdução ao desenvolvimento mobile, uso de Git e GitHub, metodologias ágeis (Scrum e Kanban) e integração prática de conceitos de Inteligência Artificial e Machine Learning em projetos web.",
    habilidades: [
      {
        titulo: "Lógica de programação",
        topicos: [
          "Fundamentos de informática",
          "Algoritmos e fluxogramas",
          "Variáveis, condicionais e laços de repetição",
          "Funções e vetores",
          "Uso de IDEs e editores de código"
        ]
      },
      {
        titulo: "Sites responsivos com HTML5, CSS3 e JavaScript",
        topicos: [
          "Estrutura semântica com HTML5",
          "Estilização com CSS3, Flexbox e Grid",
          "Design responsivo e media queries",
          "Introdução ao JavaScript e manipulação do DOM"
        ]
      },
      {
        titulo: "Backend em PHP e banco de dados SQL",
        topicos: [
          "Fundamentos de PHP",
          "Modelagem de dados e comandos SQL",
          "Operações CRUD",
          "Construção de aplicações completas com Bootstrap",
          "Introdução ao desenvolvimento mobile"
        ]
      },
      {
        titulo: "Versionamento com Git e GitHub",
        topicos: [
          "Conceitos de versionamento de código",
          "Comandos básicos do Git: commit, branch e merge",
          "Colaboração com GitHub",
          "Metodologias ágeis: Scrum e Kanban"
        ]
      },
      {
        titulo: "Introdução a IA e Machine Learning",
        topicos: [
          "Conceitos de Inteligência Artificial",
          "Introdução ao Machine Learning",
          "Uso de APIs de IA em projetos web",
          "Aplicações práticas e uso responsável de IA"
        ]
      }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "17 a 22 anos",
      escolaridadeMinima: "2º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    requisitos: {
      idadeMinima: 17,
      idadeMaxima: 22,
      escolaridadeMinima: "medio-2"
    },
    turnos: [
      { turno: "Tarde", observacao: "" }
    ]
  }
];

export const escolaridades = {
  "fund-7": 1,
  "fund-8": 2,
  "fund-9": 3,
  "medio-1": 4,
  "medio-2": 5,
  "medio-3": 6,
  "medio-completo": 7,
  "nao-estudando": 8,
  "superior-cursando": 9
};

// Helper de busca — usado pelo template dinâmico via ?curso=<id> na URL
export function getCursoPorId(id) {
  return cursos.find((curso) => curso.id === id) ?? null;
}