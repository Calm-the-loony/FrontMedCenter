import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube,
  Heart,
  Stethoscope,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContactsPage.css';

const ContactsPage = () => {
  const contacts = {
    address: 'ул. Медицинская, д. 15, Москва, 127006',
    phone: '+7 (495) 123-45-67',
    email: 'info@medicare.ru',
    workingHours: 'Пн-Пт: 8:00 - 22:00, Сб-Вс: 9:00 - 20:00',
    emergencyPhone: '+7 (495) 987-65-43'
  };

  const departments = [
    {
      name: 'Терапевтическое отделение',
      phone: '+7 (495) 111-22-33',
      email: 'therapy@medicare.ru',
      hours: '8:00 - 20:00'
    },
    {
      name: 'Хирургическое отделение',
      phone: '+7 (495) 222-33-44',
      email: 'surgery@medicare.ru',
      hours: '9:00 - 18:00'
    },
    {
      name: 'Педиатрическое отделение',
      phone: '+7 (495) 333-44-55',
      email: 'pediatrics@medicare.ru',
      hours: '8:00 - 21:00'
    },
    {
      name: 'Стоматологическое отделение',
      phone: '+7 (495) 444-55-66',
      email: 'dentistry@medicare.ru',
      hours: '9:00 - 19:00'
    }
  ];

  const socialLinks = [
    { icon: Instagram, link: 'https://instagram.com/medicare', label: 'Instagram' },
    { icon: Facebook, link: 'https://facebook.com/medicare', label: 'Facebook' },
    { icon: Youtube, link: 'https://youtube.com/medicare', label: 'YouTube' }
  ];

  return (
    <div className="contacts-page">
      <div className="contacts-bg-shapes">
        <div className="contacts-circle contacts-circle1"></div>
        <div className="contacts-circle contacts-circle2"></div>
        <div className="contacts-circle contacts-circle3"></div>
        <div className="contacts-circle contacts-circle4"></div>
      </div>

      <section className="contacts-section">
        <div className="contacts-container">
          <div className="contacts-header">
            <div className="contacts-tag">
              <div className="contacts-tag-dot"></div>
              КОНТАКТЫ
            </div>
            <h1 className="contacts-title">
              Свяжитесь с нами
              <span className="contacts-title-highlight">MediCare</span>
            </h1>
            <p className="contacts-description">
              Мы всегда готовы ответить на ваши вопросы и помочь записаться на прием. 
              Выберите удобный способ связи или посетите наш медицинский центр.
            </p>
          </div>

          <div className="contacts-content">
            <div className="contacts-grid">
              <div className="contacts-info-section">
                <div className="contacts-info-card">
                  <h2 className="contacts-info-title">
                    <Phone size={20} />
                    Контактная информация
                  </h2>
                  
                  <div className="contacts-info-list">
                    <div className="contacts-info-item">
                      <div className="contacts-info-icon">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="contacts-info-label">Адрес</div>
                        <div className="contacts-info-value">{contacts.address}</div>
                      </div>
                    </div>

                    <div className="contacts-info-item">
                      <div className="contacts-info-icon">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="contacts-info-label">Телефон</div>
                        <div className="contacts-info-value">
                          <a href={`tel:${contacts.phone}`} className="contacts-link">
                            {contacts.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="contacts-info-item">
                      <div className="contacts-info-icon">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="contacts-info-label">Email</div>
                        <div className="contacts-info-value">
                          <a href={`mailto:${contacts.email}`} className="contacts-link">
                            {contacts.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="contacts-info-item">
                      <div className="contacts-info-icon">
                        <Clock size={20} />
                      </div>
                      <div>
                        <div className="contacts-info-label">Часы работы</div>
                        <div className="contacts-info-value">{contacts.workingHours}</div>
                      </div>
                    </div>

                    <div className="contacts-info-item contacts-emergency">
                      <div className="contacts-info-icon">
                        <Heart size={20} />
                      </div>
                      <div>
                        <div className="contacts-info-label">Неотложная помощь</div>
                        <div className="contacts-info-value contacts-emergency-phone">
                          <a href={`tel:${contacts.emergencyPhone}`} className="contacts-emergency-link">
                            {contacts.emergencyPhone}
                          </a>
                        </div>
                        <div className="contacts-emergency-note">Круглосуточно</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Отделения */}
                <div className="contacts-departments">
                  <h3 className="contacts-section-title">
                    <Stethoscope size={18} />
                    Отделения
                  </h3>
                  <div className="departments-list">
                    {departments.map((dept, index) => (
                      <div key={index} className="department-item">
                        <div className="department-name">{dept.name}</div>
                        <div className="department-info">
                          <div className="department-phone">
                            <Phone size={14} />
                            <a href={`tel:${dept.phone}`}>{dept.phone}</a>
                          </div>
                          <div className="department-hours">
                            <Clock size={14} />
                            {dept.hours}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contacts-map-section">
                <div className="contacts-map-container">
                  <div className="contacts-map">
                    <div className="map-placeholder">
                      <MapPin size={48} color="#10b981" />
                      <div className="map-placeholder-text">
                        <h3>Медицинский центр MediCare</h3>
                        <p>ул. Медицинская, д. 15, Москва</p>
                      </div>
                    </div>
                  </div>
                  <div className="map-instructions">
                    <p>Используйте навигатор для построения маршрута</p>
                    <a 
                      href="https://yandex.ru/maps" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      Построить маршрут в Яндекс.Картах →
                    </a>
                  </div>
                </div>

                <div className="contacts-social">
                  <h3 className="contacts-section-title">
                    <Shield size={18} />
                    Мы в социальных сетях
                  </h3>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <div className="social-icon">
                          <social.icon size={20} />
                        </div>
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="contacts-quick-links">
                  <h3 className="contacts-section-title">Полезные ссылки</h3>
                  <div className="quick-links-list">
                    <Link to="/appointment" className="quick-link">
                      <ArrowRight size={16} />
                      <span>Записаться на прием</span>
                    </Link>
                    <Link to="/doctors" className="quick-link">
                      <ArrowRight size={16} />
                      <span>Наши врачи</span>
                    </Link>
                    <Link to="/services" className="quick-link">
                      <ArrowRight size={16} />
                      <span>Услуги и цены</span>
                    </Link>
                    <Link to="/faq" className="quick-link">
                      <ArrowRight size={16} />
                      <span>Часто задаваемые вопросы</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="contacts-notes">
              <div className="note-card">
                <div className="note-icon">
                  <Heart size={24} />
                </div>
                <div className="note-content">
                  <h3>Ваше здоровье — наш приоритет</h3>
                  <p>
                    Медицинский центр MediCare предоставляет полный спектр медицинских услуг 
                    в соответствии с международными стандартами качества. Все наши специалисты 
                    имеют высокую квалификацию и регулярно проходят повышение квалификации.
                  </p>
                </div>
              </div>

              <div className="note-card">
                <div className="note-icon">
                  <Shield size={24} />
                </div>
                <div className="note-content">
                  <h3>Лицензии и сертификаты</h3>
                  <p>
                    Мы работаем на основании лицензии № ЛО-77-01-012345 от 01.01.2023. 
                    Все медицинские услуги оказываются в соответствии с законодательством РФ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;