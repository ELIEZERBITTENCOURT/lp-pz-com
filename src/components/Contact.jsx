import React, { useState } from 'react';
import { AlarmClock, Mail, MessageCircleMore, LockKeyhole } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.service) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    // Send via email 
    const emailSubject = `Solicitação de ${formData.service} - ${formData.name}`;
    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}
Serviço: ${formData.service}

Mensagem:
${formData.message || 'Sem mensagem adicional'}
    `.trim();

    window.location.href = `mailto:pazzinicomunicacion@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = formData.name 
      ? `Olá! Meu nome é ${formData.name}. Gostaria de saber mais sobre os serviços de ${formData.service || 'revisão textual'}.`
      : 'Olá! Gostaria de saber mais sobre os serviços da Pazzini Comunicacion.';
    
    const whatsappUrl = `https://wa.me/55519994103113?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-background">
        <div className="background-wave"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Solicite um orçamento gratuito ou tire suas dúvidas. Estamos prontos para ajudar!
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-header">
              <h3>Vamos conversar?</h3>
              <p>Escolha a melhor forma de contato ou preencha o formulário ao lado.</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><Mail size={32}/></div>
                <div className="method-content">
                  <h4>E-mail</h4>
                  <a href="mailto:pazzinicomunicacion@gmail.com">
                    pazzinicomunicacion@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon"><MessageCircleMore size={32}/></div>
                <div className="method-content">
                  <h4>WhatsApp</h4>
                  <button className="whatsapp-btn" onClick={handleWhatsApp}>
                    Iniciar Conversa
                  </button>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon"><AlarmClock size={32}/></div>
                <div className="method-content">
                  <h4>Horário de Atendimento</h4>
                  <p>Seg - Sex: 8h às 20h30<br/>Sáb: 9h às 18h</p>
                </div>
              </div>
            </div>
            
            <div className="info-guarantee">
              <div className="guarantee-icon"><LockKeyhole size={32}/></div>
              <div className="guarantee-text">
                <strong>Seus dados estão seguros</strong>
                <p>Respeitamos sua privacidade e não compartilhamos suas informações.</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefone/WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Serviço de Interesse *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Revisão Textual">Revisão Textual</option>
                  <option value="Formatação Acadêmica">Formatação Acadêmica</option>
                  <option value="Textos Institucionais">Textos Institucionais</option>
                  <option value="Consultoria Personalizada">Consultoria Personalizada</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos mais sobre seu projeto..."
                  rows="4"
                ></textarea>
              </div>
              
              {formStatus === 'success' && (
                <div className="form-message success">
                  ✓ Formulário enviado com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="form-message error">
                  ✗ Por favor, preencha todos os campos obrigatórios.
                </div>
              )}
              
              <button type="submit" className="btn btn-primary btn-submit">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;