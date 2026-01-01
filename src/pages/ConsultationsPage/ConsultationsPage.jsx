import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Video, 
  Check, 
  MapPin, 
  ChevronRight,
  Cross,
  Shield,
  Award,
  Star,
  Users,
  Activity
} from 'lucide-react';
import './ConsultationsPage.css';

const ConsultationsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('in-person');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    symptoms: ''
  });

  const doctors = [
    {
      id: 1,
      name: 'Доктор Анна Смирнова',
      specialty: 'Терапевт высшей категории',
      experience: '15 лет опыта',
      rating: 4.9,
      reviews: 127,
      consultationTypes: ['in-person', 'online'],
      availableDates: ['2024-01-20', '2024-01-21', '2024-01-22'],
      availableTimes: ['10:00', '11:00', '14:00', '15:00'],
      description: 'Специалист по профилактике и лечению хронических заболеваний',
      education: 'Московский медицинский университет',
      image: 'АС'
    },
    {
      id: 2,
      name: 'Доктор Сергей Иванов',
      specialty: 'Кардиолог, к.м.н.',
      experience: '12 лет опыта',
      rating: 4.8,
      reviews: 98,
      consultationTypes: ['in-person'],
      availableDates: ['2024-01-20', '2024-01-22', '2024-01-23'],
      availableTimes: ['09:00', '11:00', '16:00', '17:00'],
      description: 'Эксперт по заболеваниям сердечно-сосудистой системы',
      education: 'Санкт-Петербургский медицинский университет',
      image: 'СИ'
    },
    {
      id: 3,
      name: 'Доктор Елена Козлова',
      specialty: 'Невролог',
      experience: '10 лет опыта',
      rating: 5.0,
      reviews: 84,
      consultationTypes: ['in-person', 'online'],
      availableDates: ['2024-01-21', '2024-01-22', '2024-01-24'],
      availableTimes: ['10:30', '13:00', '14:30', '16:00'],
      description: 'Специалист по заболеваниям нервной системы',
      education: 'Новосибирский медицинский университет',
      image: 'ЕК'
    },
    {
      id: 4,
      name: 'Доктор Мария Петрова',
      specialty: 'Эндокринолог',
      experience: '8 лет опыта',
      rating: 4.7,
      reviews: 63,
      consultationTypes: ['online'],
      availableDates: ['2024-01-20', '2024-01-23', '2024-01-24'],
      availableTimes: ['09:00', '12:00', '15:00', '18:00'],
      description: 'Специалист по гормональным нарушениям',
      education: 'Казанский медицинский университет',
      image: 'МП'
    }
  ];

  const consultationTypes = [
    {
      id: 'in-person',
      title: 'Очная консультация',
      description: 'Личный прием в медицинском центре',
      price: 'от 3 500 ₽',
      icon: MapPin,
      features: [
        'Личный осмотр врача',
        'Лабораторные исследования',
        'Современное оборудование',
        'Индивидуальный подход'
      ]
    },
    {
      id: 'online',
      title: 'Онлайн консультация',
      description: 'Консультация по видеосвязи',
      price: 'от 2 800 ₽',
      icon: Video,
      features: [
        'Консультация из дома',
        'Запись консультации',
        'Электронные рецепты',
        'Последующее наблюдение'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Конфиденциальность',
      description: 'Все данные защищены по стандарту HIPAA'
    },
    {
      icon: Users,
      title: 'Опытные специалисты',
      description: 'Врачи с опытом работы от 8 лет'
    },
    {
      icon: Activity,
      title: 'Современное оборудование',
      description: 'Диагностика на современном оборудовании'
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: 'Сертифицированные медицинские услуги'
    }
  ];

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setBookingStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setBookingStep(3);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setBookingStep(4);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (bookingStep === 4) {
      alert(`Запись успешно оформлена!\nВрач: ${selectedDoctor.name}\nДата: ${selectedDate}\nВремя: ${selectedTime}\nТип: ${consultationType === 'in-person' ? 'Очная' : 'Онлайн'}`);
      setIsBookingModalOpen(false);
      resetBooking();
    }
  };

  const resetBooking = () => {
    setSelectedDoctor(null);
    setSelectedDate('');
    setSelectedTime('');
    setBookingStep(1);
    setFormData({
      name: '',
      phone: '',
      email: '',
      symptoms: ''
    });
  };

  const startBooking = () => {
    setIsBookingModalOpen(true);
    resetBooking();
  };

  return (
    <div className="consultations-page">
      <section className="consultations-hero">
        <div className="consultations-container">
          <div className="consultations-header">
            <div className="consultations-tag">
              <div className="consultations-tag-dot"></div>
              ЗАПИСЬ НА КОНСУЛЬТАЦИЮ
            </div>
            <h1 className="consultations-title">
              Запись на прием к врачу
              <span className="consultations-title-highlight">MediCare</span>
            </h1>
            <p className="consultations-description">
              Запишитесь на очную или онлайн консультацию с ведущими специалистами. 
              Быстрая запись, удобное время и профессиональная помощь.
            </p>
            <button className="consultations-hero-button" onClick={startBooking}>
              Записаться на прием
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="consultations-benefits">
        <div className="consultations-container">
          <div className="consultations-section-header">
            <h2>Почему выбирают MediCare</h2>
            <p>Наши преимущества для вашего здоровья</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <benefit.icon size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-types-section">
        <div className="consultations-container">
          <div className="consultations-section-header">
            <h2>Форматы консультаций</h2>
            <p>Выберите удобный способ получения медицинской помощи</p>
          </div>

          <div className="types-grid">
            {consultationTypes.map((type) => (
              <div 
                key={type.id}
                className={`type-card ${consultationType === type.id ? 'selected' : ''}`}
                onClick={() => setConsultationType(type.id)}
              >
                <div className="type-header">
                  <div className="type-icon">
                    <type.icon size={32} />
                  </div>
                  <div className="type-info">
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </div>
                </div>
                
                <ul className="type-features">
                  {type.features.map((feature, index) => (
                    <li key={index}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="type-price">
                  <span>{type.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Врачи */}
      <section className="consultations-doctors">
        <div className="consultations-container">
          <div className="consultations-section-header">
            <h2>Наши специалисты</h2>
            <p>Выберите врача для записи на прием</p>
          </div>

          <div className="doctors-grid">
            {doctors
              .filter(doctor => consultationType === 'both' || doctor.consultationTypes.includes(consultationType))
              .map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                  <div className="doctor-header">
                    <div className="doctor-avatar">
                      <span>{doctor.image}</span>
                    </div>
                    <div className="doctor-info">
                      <h3>{doctor.name}</h3>
                      <p className="doctor-specialty">{doctor.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="doctor-rating">
                    <Star size={16} />
                    <span>{doctor.rating}</span>
                    <span className="reviews">({doctor.reviews} отзывов)</span>
                  </div>
                  
                  <p className="doctor-description">{doctor.description}</p>
                  
                  <div className="doctor-details">
                    <div className="doctor-experience">
                      <Clock size={14} />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="doctor-education">
                      <Award size={14} />
                      <span>{doctor.education}</span>
                    </div>
                  </div>

                  <div className="doctor-consultation-types">
                    {doctor.consultationTypes.map((type, index) => (
                      <span 
                        key={index} 
                        className={`consultation-type-badge ${type}`}
                      >
                        {type === 'in-person' ? 'Очно' : 'Онлайн'}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="doctor-book-button"
                    onClick={() => {
                      setSelectedDoctor(doctor);
                      setIsBookingModalOpen(true);
                    }}
                  >
                    <Calendar size={16} />
                    <span>Записаться на прием</span>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Модальное окно записи */}
      {isBookingModalOpen && (
        <div className="booking-modal-overlay" onClick={() => setIsBookingModalOpen(false)}>
          <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Запись на прием</h2>
              <button className="modal-close" onClick={() => setIsBookingModalOpen(false)}>
                <Cross size={24} />
              </button>
            </div>

            <div className="modal-steps">
              <div className={`step ${bookingStep >= 1 ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <span>Выбор врача</span>
              </div>
              <div className={`step ${bookingStep >= 2 ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <span>Дата</span>
              </div>
              <div className={`step ${bookingStep >= 3 ? 'active' : ''}`}>
                <div className="step-number">3</div>
                <span>Время</span>
              </div>
              <div className={`step ${bookingStep >= 4 ? 'active' : ''}`}>
                <div className="step-number">4</div>
                <span>Данные</span>
              </div>
            </div>

            <div className="modal-content">
              {bookingStep === 1 && (
                <div className="step-content">
                  <h3>Выберите специалиста</h3>
                  <div className="doctors-select">
                    {doctors
                      .filter(doctor => consultationType === 'both' || doctor.consultationTypes.includes(consultationType))
                      .map((doctor) => (
                        <div 
                          key={doctor.id}
                          className={`doctor-select-card ${selectedDoctor?.id === doctor.id ? 'selected' : ''}`}
                          onClick={() => handleDoctorSelect(doctor)}
                        >
                          <div className="select-avatar">{doctor.image}</div>
                          <div className="select-info">
                            <h4>{doctor.name}</h4>
                            <p>{doctor.specialty}</p>
                            <div className="select-rating">
                              <Star size={12} />
                              <span>{doctor.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {bookingStep === 2 && selectedDoctor && (
                <div className="step-content">
                  <h3>Выберите дату</h3>
                  <div className="dates-select">
                    {selectedDoctor.availableDates.map((date, index) => (
                      <button
                        key={index}
                        className={`date-button ${selectedDate === date ? 'selected' : ''}`}
                        onClick={() => handleDateSelect(date)}
                      >
                        {new Date(date).toLocaleDateString('ru-RU', { 
                          weekday: 'short', 
                          day: 'numeric',
                          month: 'short'
                        })}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 3 && selectedDoctor && selectedDate && (
                <div className="step-content">
                  <h3>Выберите время</h3>
                  <div className="times-select">
                    {selectedDoctor.availableTimes.map((time, index) => (
                      <button
                        key={index}
                        className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 4 && (
                <div className="step-content">
                  <h3>Ваши данные</h3>
                  <form onSubmit={handleSubmitBooking}>
                    <div className="form-group">
                      <label>Имя и фамилия *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div className="form-group">
                      <label>Телефон *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Симптомы или причина обращения</label>
                      <textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleFormChange}
                        rows="3"
                        placeholder="Опишите ваши симптомы..."
                      />
                    </div>
                    
                    <div className="booking-summary">
                      <h4>Детали записи:</h4>
                      <p><strong>Врач:</strong> {selectedDoctor?.name}</p>
                      <p><strong>Дата:</strong> {selectedDate}</p>
                      <p><strong>Время:</strong> {selectedTime}</p>
                      <p><strong>Тип:</strong> {consultationType === 'in-person' ? 'Очная консультация' : 'Онлайн консультация'}</p>
                    </div>
                    
                    <button type="submit" className="submit-booking-button">
                      Подтвердить запись
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="modal-footer">
              {bookingStep > 1 && (
                <button 
                  className="modal-back-button"
                  onClick={() => setBookingStep(bookingStep - 1)}
                >
                  Назад
                </button>
              )}
              {bookingStep < 4 && (
                <button 
                  className="modal-next-button"
                  onClick={() => {
                    if (bookingStep === 1 && !selectedDoctor) {
                      alert('Пожалуйста, выберите врача');
                      return;
                    }
                    if (bookingStep === 2 && !selectedDate) {
                      alert('Пожалуйста, выберите дату');
                      return;
                    }
                    if (bookingStep === 3 && !selectedTime) {
                      alert('Пожалуйста, выберите время');
                      return;
                    }
                    setBookingStep(bookingStep + 1);
                  }}
                >
                  Далее
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="consultations-cta">
        <div className="consultations-container">
          <div className="cta-content">
            <h2>Есть вопросы?</h2>
            <p>Свяжитесь с нами для получения дополнительной информации</p>
            <div className="cta-buttons">
              <Link to="/contacts" className="cta-button secondary">
                <Phone size={18} />
                <span>Контакты</span>
              </Link>
              <button className="cta-button primary" onClick={startBooking}>
                <Calendar size={18} />
                <span>Записаться онлайн</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationsPage;