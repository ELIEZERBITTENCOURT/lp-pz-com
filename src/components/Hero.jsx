import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient gradient-1"></div>
        <div className="hero-gradient gradient-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon"><Sparkles color="#f5c211" /></span>
            <span className="badge-text">Comunicação que transforma ideias em resultados</span>
          </div>
          
          <h1 className="hero-title">
            Suas palavras merecem{' '}
            <span className="highlight">excelência</span>
          </h1>
          
          <p className="hero-subtitle">
            Revisão textual profissional, formatação acadêmica impecável e textos 
            institucionais que comunicam sua essência com clareza e impacto.
          </p>
          
          <div className="hero-cta-group">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Solicitar Diagnóstico Gratuito
            </button>
            <button className="btn btn-secondary" onClick={scrollToServices}>
              Conhecer Serviços
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projetos Revisados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfação</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Retorno Médio</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-decoration decoration-1"></div>
          <div className="visual-decoration decoration-2"></div>
          <div className="hero-illustration">
            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main Circle Background */}
              <circle cx="250" cy="250" r="180" fill="var(--soft-orange)" opacity="0.15"/>
              <circle cx="250" cy="250" r="140" fill="var(--light-orange)" opacity="0.2"/>
              
              {/* Document Icon */}
              <rect x="150" y="150" width="200" height="260" rx="12" fill="var(--white)" stroke="var(--primary-brown)" strokeWidth="3"/>

              {/* Text Lines */}
              <line x1="180" y1="190" x2="320" y2="190" stroke="var(--medium-brown)" strokeWidth="3" strokeLinecap="round"/>
              <line x1="180" y1="220" x2="290" y2="220" stroke="var(--medium-brown)" strokeWidth="3" strokeLinecap="round"/>
              <line x1="180" y1="250" x2="320" y2="250" stroke="var(--light-brown)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="180" y1="275" x2="280" y2="275" stroke="var(--light-brown)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="180" y1="300" x2="310" y2="300" stroke="var(--light-brown)" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Checkmark */}
              <circle cx="380" cy="180" r="40" fill="var(--primary-orange)"/>
              <path d="M365 180 L375 190 L395 170" stroke="var(--white)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* Accent Elements */}
              <circle cx="120" cy="350" r="8" fill="var(--accent-orange)" opacity="0.6"/>
              <circle cx="380" cy="380" r="12" fill="var(--soft-orange)" opacity="0.5"/>
              <circle cx="140" cy="120" r="6" fill="var(--primary-orange)" opacity="0.7"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;