import React, { useEffect, useRef, useState } from 'react';
import { Target, Zap, Handshake, LibraryBig, Trophy, Star } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Atenção meticulosa a cada detalhe do seu texto, garantindo excelência em cada palavra.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Prazos respeitados rigorosamente sem jamais comprometer a qualidade do trabalho.'
    },
    {
      icon: Handshake,
      title: 'Parceria',
      description: 'Trabalhamos lado a lado com você até alcançar a perfeição desejada.'
    }
  ];

  return (
    <section id="about" className={`section about ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="about-background">
        <div className="background-texture"></div>
      </div>
      
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="about-label">Sobre Nós</div>
            
            <h2 className="about-title">
              Transformamos palavras em <span className="highlight">impacto</span>
            </h2>
            
            <div className="about-text">
              <p>
                A <strong>Pazzini Comunicacion</strong> nasceu da paixão pela palavra bem escrita 
                e pela comunicação eficaz. Somos especialistas em dar forma, clareza e 
                profissionalismo aos seus textos.
              </p>
              
              <p>
                Com experiência sólida em revisão textual, formatação acadêmica e produção de 
                conteúdo institucional, nossa missão é garantir que cada palavra conte 
                e que sua mensagem seja transmitida com a excelência que ela merece.
              </p>
            </div>
            
            <div className="about-values">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon"><value.icon size={48}/></div>
                  <div className="value-content">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card card-primary">
              <div className="card-icon"><LibraryBig size={48}/></div>
              <div className="card-data">
                <div className="card-number">10+</div>
                <div className="card-label">Anos de Experiência</div>
              </div>
            </div>
            
            <div className="visual-card card-secondary">
              <div className="card-icon"><Trophy size={48}/></div>
              <div className="card-data">
                <div className="card-number">500+</div>
                <div className="card-label">Projetos Finalizados</div>
              </div>
            </div>
            
            <div className="visual-card card-tertiary">
              <div className="card-icon"><Star size={48} /></div>
              <div className="card-data">
                <div className="card-number">98%</div>
                <div className="card-label">Clientes Satisfeitos</div>
              </div>
            </div>
            
            <div className="visual-background">
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="120" stroke="var(--primary-orange)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.2"/>
                <circle cx="150" cy="150" r="90" stroke="var(--accent-orange)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.25"/>
                <circle cx="150" cy="150" r="60" stroke="var(--soft-orange)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;