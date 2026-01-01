import React from 'react';
import { Shield, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PrivacyPage.css';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-bg-shapes">
        <div className="privacy-circle privacy-circle1"></div>
        <div className="privacy-circle privacy-circle2"></div>
        <div className="privacy-circle privacy-circle3"></div>
        <div className="privacy-circle privacy-circle4"></div>
      </div>


      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-header">
            <div className="privacy-tag">
              <div className="privacy-tag-dot"></div>
              ЗАЩИТА ДАННЫХ
            </div>
            <h1 className="privacy-title">
              Политика конфиденциальности
              <span className="privacy-title-highlight">MediCare</span>
            </h1>
            <p className="privacy-description">
              Мы ценим ваше доверие и обеспечиваем полную защиту ваших персональных данных 
              в соответствии с ФЗ-152 "О персональных данных"
            </p>
          </div>

          <div className="privacy-card">
            <div className="privacy-icon-header">
              <div className="privacy-icon-wrapper">
                <Lock size={32} />
              </div>
              <div className="privacy-compliance">
                <span className="privacy-law">ФЗ-152</span>
                <span className="privacy-status">Соответствует требованиям</span>
              </div>
            </div>

            <div className="privacy-content">
              <div className="privacy-grid">
                <div className="privacy-column">
                  <div className="privacy-info-box">
                    <div className="privacy-info-header">
                      <Shield size={20} className="privacy-info-icon" />
                      <h3>1. Общие положения</h3>
                    </div>
                    <div className="privacy-info-content">
                      <p>
                        1.1. Настоящая Политика определяет порядок обработки персональных данных 
                        в ООО "МедиКэр" (далее — Оператор).
                      </p>
                      <p>
                        1.2. Цель обработки данных — предоставление услуг онлайн-записи 
                        и медицинского обслуживания.
                      </p>
                    </div>
                  </div>

                  <div className="privacy-info-box">
                    <div className="privacy-info-header">
                      <h3>2. Какие данные мы собираем</h3>
                    </div>
                    <div className="privacy-info-content">
                      <div className="privacy-data-list">
                        <div className="privacy-data-item">
                          <div className="privacy-data-bullet"></div>
                          <span>ФИО, дата рождения, пол</span>
                        </div>
                        <div className="privacy-data-item">
                          <div className="privacy-data-bullet"></div>
                          <span>Контактные данные (телефон, email)</span>
                        </div>
                        <div className="privacy-data-item">
                          <div className="privacy-data-bullet"></div>
                          <span>Данные паспорта или иного удостоверения личности</span>
                        </div>
                        <div className="privacy-data-item">
                          <div className="privacy-data-bullet"></div>
                          <span>Медицинские данные (история болезни, диагнозы, назначения)</span>
                        </div>
                        <div className="privacy-data-item">
                          <div className="privacy-data-bullet"></div>
                          <span>Данные полиса ОМС/ДМС</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="privacy-info-box">
                    <div className="privacy-info-header">
                      <h3>3. Как мы используем данные</h3>
                    </div>
                    <div className="privacy-info-content">
                      <div className="privacy-usage-list">
                        <div className="privacy-usage-item">
                          <div className="privacy-usage-icon">📅</div>
                          <div>
                            <strong>Запись на прием</strong>
                            <p>Организация и напоминание о визитах</p>
                          </div>
                        </div>
                        <div className="privacy-usage-item">
                          <div className="privacy-usage-icon">📋</div>
                          <div>
                            <strong>Мед. документация</strong>
                            <p>Ведение медицинской истории</p>
                          </div>
                        </div>
                        <div className="privacy-usage-item">
                          <div className="privacy-usage-icon">📞</div>
                          <div>
                            <strong>Связь с пациентами</strong>
                            <p>Информирование о лечении</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="privacy-column">
                  <div className="privacy-info-box">
                    <div className="privacy-info-header">
                      <h3>4. Защита данных</h3>
                    </div>
                    <div className="privacy-info-content">
                      <div className="privacy-protection">
                        <div className="privacy-protection-item">
                          <div className="privacy-protection-icon">🔒</div>
                          <div>
                            <h4>Шифрование данных</h4>
                            <p>Все данные передаются по защищенному соединению SSL/TLS</p>
                          </div>
                        </div>
                        <div className="privacy-protection-item">
                          <div className="privacy-protection-icon">🛡️</div>
                          <div>
                            <h4>Контроль доступа</h4>
                            <p>Строгий контроль доступа персонала к медицинским данным</p>
                          </div>
                        </div>
                        <div className="privacy-protection-item">
                          <div className="privacy-protection-icon">📊</div>
                          <div>
                            <h4>Регулярные аудиты</h4>
                            <p>Периодическая проверка систем безопасности</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="privacy-info-box">
                    <div className="privacy-info-header">
                      <h3>5. Ваши права</h3>
                    </div>
                    <div className="privacy-info-content">
                      <div className="privacy-rights-list">
                        <div className="privacy-rights-item">
                          <div className="privacy-rights-check">✓</div>
                          <span>На доступ к своим персональным данным</span>
                        </div>
                        <div className="privacy-rights-item">
                          <div className="privacy-rights-check">✓</div>
                          <span>На уточнение, блокирование или уничтожение данных</span>
                        </div>
                        <div className="privacy-rights-item">
                          <div className="privacy-rights-check">✓</div>
                          <span>На отзыв согласия на обработку данных</span>
                        </div>
                        <div className="privacy-rights-item">
                          <div className="privacy-rights-check">✓</div>
                          <span>На обжалование действий Оператора</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="privacy-info-box">
                    <div className="privacy-info-header">
                      <h3>6. Сроки хранения</h3>
                    </div>
                    <div className="privacy-info-content">
                      <p>
                        6.1. Персональные данные хранятся в течение сроков, установленных 
                        законодательством РФ для медицинской документации.
                      </p>
                      <p>
                        6.2. После достижения целей обработки данные обезличиваются или уничтожаются.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="privacy-divider">
                <span>Контактная информация</span>
              </div>

              <div className="privacy-contact-info">
                <div className="privacy-contact-item">
                  <strong>Ответственный за защиту данных</strong>
                  <span>Иванов И.И.</span>
                </div>
                <div className="privacy-contact-item">
                  <strong>Телефон</strong>
                  <span>+7 (495) 123-45-67 (доб. 100)</span>
                </div>
                <div className="privacy-contact-item">
                  <strong>Email</strong>
                  <span>dpo@medicare.ru</span>
                </div>
                <div className="privacy-contact-item">
                  <strong>Адрес</strong>
                  <span>123456, г. Москва, ул. Медицинская, д. 1</span>
                </div>
              </div>
            </div>

            <div className="privacy-consent-box">
              <div className="privacy-consent-icon">📋</div>
              <div className="privacy-consent-content">
                <h3>Согласие на обработку персональных данных</h3>
                <p>
                  Регистрируясь в системе MediCare, вы даете согласие на обработку 
                  ваших персональных данных в соответствии с настоящей Политикой 
                  конфиденциальности.
                </p>
              </div>
            </div>

            <div className="privacy-actions">
              <Link to="/terms" className="privacy-link">
                Условия использования →
              </Link>
              <div className="privacy-buttons">
                <Link to="/auth" className="privacy-back-to-auth">
                  Вернуться к регистрации
                </Link>
                <Link to="/" className="privacy-home-button">
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

export default PrivacyPage;