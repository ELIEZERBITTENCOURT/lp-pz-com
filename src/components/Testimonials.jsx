import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials = () => {
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

  const testimonials = [
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

  return (
    <section id="testimonials" className="section testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <p className="section-subtitle">
            A satisfação de quem confia na Pazzini Comunicacion fala por si
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="testimonial-quote">"</div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star"><Star color="#f6d32d" /></span>
                ))}
              </div>
              
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;