import React from 'react';
import { Cross } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Cross size={20} color="white" />
              </div>
              <span className="footer-logo-text">
                Medi<span className="footer-logo-text-dark">Care</span>
              </span>
            </div>
            <p className="footer-tagline">
              Традиционная медицина с заботой
            </p>
          </div>

          <div className="footer-links">
            <a href="/about" className="footer-link">О нас</a>
            <a href="/doctors" className="footer-link">Врачи</a>
            <a href="/services" className="footer-link">Услуги</a>
            <a href="/contacts" className="footer-link">Контакты</a>
          </div>
        </div>
        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} MediCare. Все права защищены.
          </div>
          
          <div className="footer-legal">
            <a href="/privacy" className="legal-link">Конфиденциальность</a>
            <a href="/terms" className="legal-link">Условия</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;