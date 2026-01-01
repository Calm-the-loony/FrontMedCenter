import React, { useState } from 'react';
import { Stethoscope, ArrowRight } from 'lucide-react';
import './CtaSection.css';

const CtaSection = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleConsultationClick = () => {
    console.log('Starting consultation...');
    const formSection = document.querySelector('.hero-form-container');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cta-section">
      <div className="cta-wrapper">
        <div className="cta-card">
          <div className="cta-decorative-circle cta-circle-1"></div>
          <div className="cta-decorative-circle cta-circle-2"></div>
          <div className="cta-decorative-circle cta-circle-3"></div>
          
          <div className="cta-card-content">
            <div className="cta-icon-wrapper">
              <Stethoscope size={36} color="#10b981" />
              <div className="cta-icon-dot"></div>
            </div>

            <h2 className="cta-title">
              Начните путь<br />
              <span className="cta-title-highlight">к здоровой жизни</span>
            </h2>

            <p className="cta-subtitle">
              Запишитесь на бесплатную консультацию и получите персональный 
              план восстановления от наших специалистов
            </p>

            <button
              className={`cta-button ${isButtonHovered ? 'cta-button-hover' : ''}`}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onClick={handleConsultationClick}
            >
              <span className="cta-button-text">Начать консультацию</span>
              <ArrowRight size={20} className="cta-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;