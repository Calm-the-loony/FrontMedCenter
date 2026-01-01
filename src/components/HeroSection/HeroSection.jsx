import React, { useState } from 'react';
import { User, Phone, Plus, Calendar, ChevronRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goals: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-content-row">
          <div className="hero-left-column">
            <div className="hero-content-wrapper">
              <div className="hero-tag">
                <div className="tag-dot"></div>
                Традиционная медицина с заботой
              </div>

              <h1 className="hero-title">
                Здоровье —<br />
                <span className="hero-highlight">наша общая цель</span>
              </h1>

              <p className="hero-description">
                Мы сочетаем проверенные методы традиционной медицины с современными 
                технологиями, предлагая комплексный подход к вашему здоровью.
              </p>

              <div className="hero-cta-section">
                <h2 className="cta-title">Бесплатная консультация</h2>
                <div className="hero-buttons">
                  <button className="hero-button-primary">
                    <Calendar size={18} />
                    Бесплатная консультация
                  </button>
                  <button className="hero-button-secondary">
                    Узнать о подходе
                    <ChevronRight size={16} className="button-chevron-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right-column">
            <div className="hero-form-container">
              <h2 className="hero-form-title">Первичная консультация</h2>
              <p className="hero-form-subtitle">Бесплатно • 45 минут • Онлайн или в клинике</p>

              <form className="hero-form" onSubmit={handleSubmit}>
                <div className="hero-input-group">
                  <div className="hero-input-icon-wrapper">
                    <User size={18} color="#10b981" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    className="hero-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="hero-input-group">
                  <div className="hero-input-icon-wrapper">
                    <Phone size={18} color="#10b981" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                    className="hero-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="hero-textarea-group">
                  <div className="hero-textarea-icon">
                    <Plus size={18} color="#64748b" />
                  </div>
                  <div className="hero-textarea-wrapper">
                    <label className="hero-textarea-label">Ваши цели здоровья</label>
                    <textarea
                      name="goals"
                      placeholder="Расскажите, что вас беспокоит"
                      className="hero-textarea"
                      value={formData.goals}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="hero-submit-button">
                  Записаться на консультацию
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;