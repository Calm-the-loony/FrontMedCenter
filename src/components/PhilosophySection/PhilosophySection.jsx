import React, { useState } from 'react';
import { Brain, Cpu, Heart, Leaf } from 'lucide-react';
import './PhilosophySection.css';

const PhilosophySection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: 'Биосовместимость',
      desc: 'Методы, гармонирующие с природой организма',
      icon: <Heart size={20} color="white" />
    },
    {
      title: 'Технологии будущего',
      desc: 'AI-диагностика и цифровое здоровье',
      icon: <Cpu size={20} color="white" />
    },
    {
      title: 'Целостный подход',
      desc: 'Здоровье тела, разума и духа',
      icon: <Brain size={20} color="white" />
    },
    {
      title: 'Устойчивость',
      desc: 'Экологичные практики и материалы',
      icon: <Leaf size={20} color="white" />
    }
  ];

  return (
    <div className="philosophy-section">
      <div className="philosophy-wrapper">
        <div className="philosophy-header">
          <h2 className="philosophy-title">
            Наша <span className="philosophy-title-highlight">философия</span>
          </h2>
          <p className="philosophy-subtitle">
            Четыре принципа, лежащих в основе органической медицины
          </p>
        </div>

        <div className="philosophy-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`philosophy-card ${hoveredCard === index ? 'philosophy-card-hover' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="philosophy-icon">
                {feature.icon}
                <div className="philosophy-icon-dot"></div>
              </div>
              <h3 className="philosophy-card-title">{feature.title}</h3>
              <p className="philosophy-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;