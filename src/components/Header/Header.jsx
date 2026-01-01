import React, { useState } from 'react';
import { Phone, Calendar, Cross, Menu, X, User, LogIn, Home, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isAuthHovered, setIsAuthHovered] = useState(false);
  
  const menuItems = [
    { id: 'services', label: 'Услуги', isLink: true, path: '/services' },
    { id: 'doctors', label: 'Врачи', isLink: true, path: '/doctors' }, 
    { id: 'about', label: 'О нас', isLink: true, path: '/about' },
    { id: 'contacts', label: 'Контакты', isLink: true, path: '/contacts' },
  ];

  const handleMenuItemClick = (item) => {
    setIsMobileMenuOpen(false);
    
    if (item.isLink) {
      navigate(item.path);
    } else {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(`${item.id}-section`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(`${item.id}-section`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleAuthClick = () => {
    setIsMobileMenuOpen(false);
    if (currentUser) {
      navigate('/profile');
    } else {
      navigate('/auth');
    }
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/'); 
  };

  const handleConsultationsClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/consultations');
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/'); 
  };

  return (
    <>
      <nav className="header-nav">
        <div className="header-container">
          <Link 
            to="/" 
            className="header-logo"
            onClick={handleLogoClick}
          >
            <div className="header-logo-icon">
              <Cross size={22} color="white" />
              <div className="header-logo-dot"></div>
            </div>
            <div className="header-logo-text-container">
              <div className="header-logo-text">
                Medi<span className="header-logo-text-dark">Care</span>
              </div>
              <div className="header-logo-subtitle">Частный медицинский центр</div>
            </div>
          </Link>

          <div className="header-desktop-content">
            <div className="header-nav-group">
              <div
                className={`header-menu-item ${hoveredItem === 'home' ? 'header-menu-item-hover' : ''}`}
                onMouseEnter={() => setHoveredItem('home')}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={handleHomeClick}
              >
                Главная
                <div 
                  className={`header-menu-underline ${hoveredItem === 'home' ? 'header-menu-underline-active' : ''}`}
                ></div>
              </div>

              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`header-menu-item ${hoveredItem === item.id ? 'header-menu-item-hover' : ''}`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.label}
                  <div 
                    className={`header-menu-underline ${hoveredItem === item.id ? 'header-menu-underline-active' : ''}`}
                  ></div>
                </div>
              ))}
            </div>

            <div className="header-contact-group">
              <div className="header-contact-info">
                <Phone className="header-contact-icon" />
                <span>+7 (495) 123-45-67</span>
              </div>

              <div className="header-buttons-group">
                {currentUser ? (
                  <>
                    <motion.button
                      className="header-auth-button glow"
                      onMouseEnter={() => setIsAuthHovered(true)}
                      onMouseLeave={() => setIsAuthHovered(false)}
                      onClick={handleAuthClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isAuthHovered ? (
                        <User size={14} />
                      ) : (
                        <User size={14} />
                      )}
                      <span>{currentUser.firstName}</span>
                    </motion.button>
                    
                    <motion.button
                      className="header-button header-logout-button"
                      onClick={handleLogout}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LogOut className="header-button-icon" />
                      <span>Выйти</span>
                    </motion.button>
                  </>
                ) : (
                  <motion.button
                    className="header-auth-button glow"
                    onMouseEnter={() => setIsAuthHovered(true)}
                    onMouseLeave={() => setIsAuthHovered(false)}
                    onClick={handleAuthClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isAuthHovered ? (
                      <LogIn size={14} />
                    ) : (
                      <User size={14} />
                    )}
                    <span>Войти</span>
                  </motion.button>
                )}

                <motion.button
                  className="header-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConsultationsClick}
                >
                  <Calendar className="header-button-icon" />
                  <span>Консультация</span>
                </motion.button>
              </div>
            </div>
          </div>

          <button
            className="header-mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="header-mobile-menu-icon" />
            ) : (
              <Menu className="header-mobile-menu-icon" />
            )}
          </button>
        </div>
      </nav>

      <div 
        className={`header-mobile-menu-overlay ${isMobileMenuOpen ? 'header-mobile-menu-overlay-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      <div className={`header-mobile-menu-panel ${isMobileMenuOpen ? 'header-mobile-menu-panel-open' : ''}`}>
        <div className="header-mobile-menu-header">
          <div className="header-mobile-menu-title">Меню</div>
          <button
            className="header-mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        {currentUser && (
          <div className="header-mobile-user-info">
            <div className="mobile-user-avatar">
              <User size={18} />
            </div>
            <div className="mobile-user-details">
              <div className="mobile-user-name">{currentUser.firstName} {currentUser.lastName}</div>
              <div className="mobile-user-role">
                {currentUser.type === 'doctor' ? 'Врач' : 
                 currentUser.type === 'nurse' ? 'Медсестра' : 
                 currentUser.type === 'admin' ? 'Администратор' : 'Пациент'}
              </div>
            </div>
          </div>
        )}
        
        <div className="header-mobile-menu-items">
          <div
            className="header-mobile-menu-item"
            onClick={handleHomeClick}
          >
            <Home size={16} style={{ marginRight: '8px' }} />
            Главная
          </div>
          
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="header-mobile-menu-item"
              onClick={() => handleMenuItemClick(item)}
            >
              {item.label}
            </div>
          ))}
          
          <div
            className="header-mobile-menu-item"
            onClick={handleConsultationsClick}
          >
            <Calendar size={16} style={{ marginRight: '8px' }} />
            Консультация
          </div>
          
          {currentUser ? (
            <>
              <div
                className="header-mobile-menu-item"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/profile');
                }}
              >
                <User size={16} style={{ marginRight: '8px' }} />
                Личный кабинет
              </div>
              
              <div
                className="header-mobile-menu-item header-mobile-logout-item"
                onClick={handleLogout}
              >
                <LogOut size={16} style={{ marginRight: '8px' }} />
                Выйти
              </div>
            </>
          ) : (
            <div
              className="header-mobile-menu-item header-mobile-auth-item"
              onClick={handleAuthClick}
            >
              <LogIn size={16} style={{ marginRight: '8px' }} />
              Войти / Регистрация
            </div>
          )}
        </div>
        
        <div className="header-mobile-contact">
          <div className="header-mobile-contact-item">
            <Phone size={18} color="#10b981" />
            <div>
              <div className="header-mobile-contact-phone">+7 (495) 123-45-67</div>
              <div className="header-mobile-contact-hours">
                Ежедневно с 8:00 до 22:00
              </div>
            </div>
          </div>
          
          <button
            className="header-button header-mobile-button"
            onClick={handleConsultationsClick} 
          >
            <Calendar className="header-button-icon" />
            <span>Записаться на консультацию</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;