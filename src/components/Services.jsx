import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, GraduationCap, FileText, PenTool } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleCards([0]), 0);
            setTimeout(() => setVisibleCards([0, 1]), 200);
            setTimeout(() => setVisibleCards([0, 1, 2]), 400);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FileText,
      title: 'Revisão Textual',
      description: 'Análise criteriosa de ortografia, gramática, coesão e coerência. Garantimos que seu texto comunique exatamente o que você deseja, com clareza e profissionalismo.',
      features: [
        'Correção ortográfica e gramatical completa',
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
      color: 'accent'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="services-background">
        <div className="background-shape shape-1"></div>
        <div className="background-shape shape-2"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para todas as suas necessidades de comunicação textual
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card card-${service.color} ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="service-header">
                <div className="service-icon"><service.icon size={48} color="#f6d32d" /></div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="service-cta" onClick={scrollToContact}>
                <span>Solicitar Orçamento</span>
                <span className="cta-arrow">→</span>
              </button>
              
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>
        
        <div className="services-footer-cta">
          <div className="footer-cta-content">
            <div className="footer-cta-icon"><Lightbulb size={68} color="#f6d32d" /></div>
            <div className="footer-cta-text">
              <h3>Não encontrou o que procura?</h3>
              <p>Entre em contato e vamos desenvolver uma solução personalizada para suas necessidades específicas.</p>
            </div>
          </div>
          <button className="btn btn-primary" onClick={scrollToContact}>
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;