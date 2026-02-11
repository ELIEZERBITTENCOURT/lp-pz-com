import React, { useEffect, useRef, useState } from 'react';
import '../styles/Benefits.css';
import { benefitsData } from '../data/api';

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card ${visibleItems.includes(index) ? 'visible' : ''}`}
            >
              <div className="benefit-number">{benefit.number}</div>
              <div className="benefit-icon"><benefit.icon size={58} color="var(--primary-brown)"/></div>
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
            <p>Solicite um orçamento gratuito e descubra como podemos transformar sua comunicação.</p>
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