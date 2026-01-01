import React from 'react';
import { Shield, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TermsPage.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <div className="terms-bg-shapes">
        <div className="terms-circle terms-circle1"></div>
        <div className="terms-circle terms-circle2"></div>
        <div className="terms-circle terms-circle3"></div>
        <div className="terms-circle terms-circle4"></div>
      </div>

      <section className="terms-section">
        <div className="terms-container">
          <div className="terms-header">
            <div className="terms-tag">
              <div className="terms-tag-dot"></div>
              ПРАВОВАЯ ИНФОРМАЦИЯ
            </div>
            <h1 className="terms-title">
              Условия использования
              <span className="terms-title-highlight">MediCare</span>
            </h1>
            <p className="terms-description">
              Пожалуйста, внимательно ознакомьтесь с условиями использования сервиса 
              перед регистрацией и началом работы с платформой
            </p>
          </div>

          <div className="terms-card">
            <div className="terms-icon-header">
              <div className="terms-icon-wrapper">
                <FileText size={32} />
              </div>
              <div className="terms-update-info">
                <span className="terms-version">Версия 2.0</span>
                <span className="terms-date">Обновлено 01.01.2025</span>
              </div>
            </div>

            <div className="terms-content">
              <div className="terms-grid">
                <div className="terms-column">
                  <div className="terms-info-box">
                    <div className="terms-info-header">
                      <Shield size={20} className="terms-info-icon" />
                      <h3>1. Общие положения</h3>
                    </div>
                    <div className="terms-info-content">
                      <p>
                        1.1. Настоящие Условия использования регулируют отношения между ООО "МедиКэр" 
                        (далее — "Оператор") и пользователями сервиса онлайн-записи MediCare 
                        (далее — "Сервис").
                      </p>
                      <p>
                        1.2. Используя Сервис, вы подтверждаете свое согласие с настоящими Условиями 
                        и Политикой конфиденциальности.
                      </p>
                    </div>
                  </div>

                  <div className="terms-info-box">
                    <div className="terms-info-header">
                      <h3>2. Регистрация и учетная запись</h3>
                    </div>
                    <div className="terms-info-content">
                      <p>
                        2.1. Для использования всех функций Сервиса необходима регистрация 
                        и создание личного кабинета.
                      </p>
                      <p>
                        2.2. Вы обязаны предоставить достоверную и полную информацию при регистрации.
                      </p>
                      <p>
                        2.3. Вы несете ответственность за сохранность своих учетных данных.
                      </p>
                    </div>
                  </div>

                  <div className="terms-info-box">
                    <div className="terms-info-header">
                      <h3>3. Запись на прием</h3>
                    </div>
                    <div className="terms-info-content">
                      <p>
                        3.1. Сервис предоставляет возможность онлайн-записи на прием к врачам 
                        медицинского центра.
                      </p>
                      <p>
                        3.2. Подтверждение записи осуществляется в течение 2 часов в рабочие дни.
                      </p>
                      <p>
                        3.3. Отмена записи возможна не позднее чем за 24 часа до назначенного времени.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="terms-column">
                  <div className="terms-info-box">
                    <div className="terms-info-header">
                      <h3>4. Медицинские услуги</h3>
                    </div>
                    <div className="terms-info-content">
                      <p>
                        4.1. Сервис является платформой для записи на прием и не предоставляет 
                        медицинские услуги напрямую.
                      </p>
                      <p>
                        4.2. Все медицинские услуги оказываются непосредственно медицинским 
                        центром в соответствии с лицензией.
                      </p>
                    </div>
                  </div>

                  <div className="terms-info-box">
                    <div className="terms-info-header">
                      <h3>5. Ответственность</h3>
                    </div>
                    <div className="terms-info-content">
                      <p>
                        5.1. Оператор не несет ответственности за действия медицинских работников 
                        и качество оказываемых ими услуг.
                      </p>
                      <p>
                        5.2. Оператор оставляет за собой право изменять график работы врачей 
                        и доступные услуги.
                      </p>
                    </div>
                  </div>

                  <div className="terms-info-box">
                    <div className="terms-info-header">
                      <h3>6. Заключительные положения</h3>
                    </div>
                    <div className="terms-info-content">
                      <p>
                        6.1. Оператор вправе вносить изменения в настоящие Условия.
                      </p>
                      <p>
                        6.2. Все споры решаются в соответствии с законодательством Российской Федерации.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="terms-divider">
                <span>Контактная информация</span>
              </div>

              <div className="terms-contact-info">
                <div className="terms-contact-item">
                  <strong>ООО "МедиКэр"</strong>
                  <span>Оператор сервиса MediCare</span>
                </div>
                <div className="terms-contact-item">
                  <strong>ИНН</strong>
                  <span>1234567890</span>
                </div>
                <div className="terms-contact-item">
                  <strong>ОГРН</strong>
                  <span>1234567890123</span>
                </div>
                <div className="terms-contact-item">
                  <strong>Телефон</strong>
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="terms-contact-item">
                  <strong>Email</strong>
                  <span>legal@medicare.ru</span>
                </div>
              </div>
            </div>

            <div className="terms-actions">
              <Link to="/privacy" className="terms-link">
                Политика конфиденциальности →
              </Link>
              <div className="terms-buttons">
                <Link to="/auth" className="terms-back-to-auth">
                  Вернуться к регистрации
                </Link>
                <Link to="/" className="terms-home-button">
                  На главную
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;