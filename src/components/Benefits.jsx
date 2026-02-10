import React, { useEffect, useRef, useState } from 'react';
import { Award, ClockPlus, Handshake, MessageCircleMore, Palette, PencilRuler } from 'lucide-react'
import '../styles/Benefits.css';

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of benefit items
            [0, 1, 2, 3, 4, 5].forEach((index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 100);
            });
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

  const benefits = [
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="benefits" className="section benefits" ref={sectionRef}>
      <div className="benefits-background">
        <div className="background-grid"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Por que escolher a Pazzini Comunicacion?</h2>
          <p className="section-subtitle">
            Muito mais do que revisar textos, oferecemos uma parceria estratégica 
            para elevar a qualidade da sua comunicação.
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card ${visibleItems.includes(index) ? 'visible' : ''}`}
            >
              <div className="benefit-number">{benefit.number}</div>
              <div className="benefit-icon"><benefit.icon size={58}/></div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <div className="benefit-line"></div>
            </div>
          ))}
        </div>
        
        <div className="benefits-cta-section">
          <div className="cta-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
          </div>
          <div className="cta-content">
            <h3>Pronto para elevar a qualidade dos seus textos?</h3>
            <p>Solicite um diagnóstico gratuito e descubra como podemos transformar sua comunicação.</p>
            <button className="btn btn-primary" onClick={scrollToContact}>
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;