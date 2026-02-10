import React from 'react';
import '../styles/Footer.css';
import { AlarmCheck, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column footer-about">
              <h3 className="footer-logo">Pazzini Comunicacion</h3>
              <p className="footer-description">
                Transformando palavras em impacto. Excelência em revisão textual, 
                formatação acadêmica e textos institucionais.
              </p>
              <div className="footer-social">
                <a href="mailto:pazzinicomunicacion@gmail.com" className="social-link" aria-label="E-mail">
                  <Mail/>
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <MessageCircle/>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Serviços</h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => scrollToSection('services')}>
                    Revisão Textual
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')}>
                    Formatação Acadêmica
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')}>
                    Textos Institucionais
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')}>
                    Consultoria Personalizada
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Empresa</h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => scrollToSection('about')}>
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('benefits')}>
                    Diferenciais
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')}>
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')}>
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Contato</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon"><Mail size={16}/></span>
                  <a href="mailto:pazzinicomunicacion@gmail.com">
                    pazzinicomunicacion@gmail.com
                  </a>
                </li>
                <li>
                  <span className="contact-icon"><AlarmCheck size={18}/></span>
                  <span>Seg - Sex: 9h às 18h</span>
                </li>
                <li>
                  <span className="contact-icon"><MapPin size={18}/></span>
                  <span>Atendimento Online</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Pazzini Comunicacion. Todos os direitos reservados.
            </p>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
              <span className="arrow-up">↑</span>
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;