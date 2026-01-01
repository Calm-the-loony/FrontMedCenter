import React, { useState } from 'react';
import { Leaf, Brain, Microscope, Heart } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    { 
      id: 1, 
      title: 'Интегративная терапия', 
      icon: <Leaf size={24} color="white" />, 
      description: 'Синтез традиционной и функциональной медицины' 
    },
    { 
      id: 2, 
      title: 'Нейротехнологии', 
      icon: <Brain size={24} color="white" />, 
      description: 'Инновационные методы восстановления мозга' 
    },
    { 
      id: 3, 
      title: 'Молекулярная диагностика', 
      icon: <Microscope size={24} color="white" />, 
      description: 'Анализ на клеточном уровне' 
    },
    { 
      id: 4, 
      title: 'Персонализированная медицина', 
      icon: <Heart size={24} color="white" />, 
      description: 'Лечение, созданное специально для вас' 
    },
  ];

  return (
    <div className="home-services-section">
      <div className="home-services-wrapper">
        <div className="home-services-header">
          <h2 className="home-services-title">
            Инновационные <span className="home-services-title-highlight">услуги</span>
          </h2>
        </div>

        <div className="home-services-grid home-services-grid-two-columns">
          {services.map((service) => (
            <div
              key={service.id}
              className={`home-services-card ${hoveredCard === service.id ? 'home-services-card-hover' : ''}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="home-services-icon-wrapper">
                {service.icon}
                <div className="home-services-icon-dot"></div>
              </div>
              <h3 className="home-services-card-title">{service.title}</h3>
              <p className="home-services-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;