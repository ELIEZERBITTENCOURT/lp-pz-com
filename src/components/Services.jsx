import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';
import '../styles/Services.css';
import { servicesData } from '../data/api';

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
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`service-card card-${service.color} ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="service-header">
                <div className="service-icon">
                  <service.icon size={38} />
                </div>
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
                <span className="cta-arrow">
                  <ArrowRight size={14}/>
                </span>
              </button>
              
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>
        
        <div className="services-footer-cta">
          <div className="footer-cta-content">
            <div className="footer-cta-icon">
              <Lightbulb size={68} color="var(--soft-orange)"/>
            </div>
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