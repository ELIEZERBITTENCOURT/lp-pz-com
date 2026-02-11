import { 
    TextSearch, 
    Zap, 
    Handshake, 
    MessageCircleMore, 
    Award, 
    ClockPlus, 
    PencilRuler, 
    Palette,
    FileText,
    GraduationCap,
    PenTool
} from 'lucide-react';

export const valuesData = [
  {
    icon: TextSearch,
    title: 'Precisão',
    description:
      'Atenção meticulosa a cada detalhe do seu texto, garantindo excelência em cada palavra.'
  },
  {
    icon: Zap,
    title: 'Agilidade',
    description:
      'Prazos respeitados rigorosamente sem jamais comprometer a qualidade do trabalho.'
  },
  {
    icon: Handshake,
    title: 'Parceria',
    description:
      'Trabalhamos lado a lado com você até alcançar a perfeição desejada.'
  }
];

export const benefitsData = [
    {
      number: '01',
      title: 'Comunicação Clara',
      description: 'Textos que transmitem sua mensagem com precisão, eliminando ambiguidades e garantindo compreensão imediata do seu público.',
      icon:  MessageCircleMore

    },
    {
      number: '02',
      title: 'Credibilidade Profissional',
      description: 'Materiais impecáveis que reforçam sua imagem profissional e transmitem confiança absoluta ao seu público-alvo.',
      icon: Award
    },
    {
      number: '03',
      title: 'Economia de Tempo',
      description: 'Dedique-se ao que realmente importa para você enquanto cuidamos da qualidade textual dos seus documentos.',
      icon: ClockPlus
    },
    {
      number: '04',
      title: 'Adequação às Normas',
      description: 'Conformidade total com ABNT e outros padrões técnicos exigidos no contexto acadêmico e profissional.',
      icon: PencilRuler
    },
    {
      number: '05',
      title: 'Personalização',
      description: 'Cada projeto é único. Adaptamos nossa abordagem às suas necessidades específicas e ao perfil do seu público-alvo.',
      icon: Palette
    },
    {
      number: '06',
      title: 'Suporte Contínuo',
      description: 'Acompanhamento completo durante todo o processo, com feedback construtivo e orientações personalizadas.',
      icon: Handshake
    }
];

export const servicesData = [
    {
      icon: FileText,
      title: 'Revisão Textual',
      description: 'Análise criteriosa de ortografia, gramática, coesão e coerência. Garantimos que seu texto comunique exatamente o que você deseja, com clareza e profissionalismo.',
      features: [
        'Correção ortográfica e gramatical',
        'Aprimoramento de coesão e coerência textual',
        'Adequação ao público-alvo e contexto',
        'Sugestões de melhoria estilística'
      ],
      color: 'orange'
    },
    {
      icon: GraduationCap,
      title: 'Formatação Acadêmica',
      description: 'Formatação completa de trabalhos segundo as normas ABNT. TCCs, dissertações, artigos e monografias com padrão profissional e rigor técnico impecável.',
      features: [
        'Normas ABNT rigorosamente atualizadas',
        'Estruturação de elementos pré e pós-textuais',
        'Formatação de referências bibliográficas',
        'Revisão e padronização de citações'
      ],
      color: 'brown'
    },
    {
      icon: PenTool,
      title: 'Textos Institucionais',
      description: 'Criação e revisão de textos corporativos que transmitem a identidade da sua marca. Da página "Sobre" aos comunicados oficiais, com tom e estilo adequados.',
      features: [
        'Textos para websites e páginas institucionais',
        'Comunicados e relatórios corporativos',
        'Apresentações e materiais institucionais',
        'Conteúdo estratégico para redes sociais'
      ],
      color: 'white'
    }
  ];

export const testimonialsData = [
    {
      name: 'Ana Paula Silva',
      role: 'Mestranda em Educação',
      text: 'A revisão e formatação da minha dissertação foram impecáveis. A Pazzini entendeu perfeitamente o que eu precisava e entregou um trabalho de altíssima qualidade. Recomendo fortemente!',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor de Marketing',
      text: 'Precisávamos de textos institucionais que transmitissem a essência da nossa marca. O resultado superou todas as expectativas. Profissionalismo e criatividade em cada palavra.',
      rating: 5
    },
    {
      name: 'Mariana Costa',
      role: 'Advogada',
      text: 'Excelente serviço de revisão. A atenção aos detalhes e o cuidado com a linguagem técnica fizeram toda a diferença nos meus documentos jurídicos. Muito satisfeita!',
      rating: 5
    }
  ];
