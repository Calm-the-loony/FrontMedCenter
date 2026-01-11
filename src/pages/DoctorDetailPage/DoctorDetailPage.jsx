import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  User, 
  Star, 
  Award, 
  Calendar,
  Clock,
  GraduationCap,
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Cross,
  ChevronLeft,
  Phone,
  Check,
  Shield,
  MessageSquare,
  ThumbsUp,
  Edit,
  X,
  Send,
  Mail,
  MapPin,
  Video,
  ChevronRight
} from 'lucide-react';
import './DoctorDetailPage.css';

// Данные врачей с дополнительной информацией для записи
const doctorsData = [
  {
    id: 1,
    name: 'Дмитрий Иванов',
    specialty: 'therapy',
    position: 'Главный терапевт',
    experience: 15,
    rating: 4.9,
    reviews: 127,
    description: 'Специалист по внутренним болезням, кардиологии и гастроэнтерологии',
    detailedDescription: 'Высококвалифицированный специалист с 15-летним опытом работы. Прошел стажировку в ведущих клиниках Европы. Специализируется на лечении сердечно-сосудистых заболеваний, болезней желудочно-кишечного тракта и органов дыхания. Применяет современные методы диагностики и лечения.',
    education: 'Московский государственный медицинский университет',
    services: ['Консультация', 'Диагностика', 'Лечение хронических заболеваний', 'Профилактические осмотры'],
    schedule: 'Пн-Пт: 9:00-18:00',
    price: '3 500 ₽',
    imageColor: '#10b981',
    featured: true,
    consultationTypes: ['in-person', 'online'],
    availableDates: ['2024-01-20', '2024-01-21', '2024-01-22', '2024-01-23'],
    availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    languages: ['Русский', 'Английский'],
    certifications: ['Сертификат по терапии', 'Сертификат по кардиологии'],
    phone: '+7 (999) 123-45-67',
    email: 'd.ivanov@medicare.ru',
    room: 'Кабинет 101'
  },
  {
    id: 2,
    name: 'Анна Петрова',
    specialty: 'neurology',
    position: 'Невролог высшей категории',
    experience: 12,
    rating: 4.8,
    reviews: 89,
    description: 'Эксперт по заболеваниям нервной системы и реабилитации',
    detailedDescription: 'Специалист с 12-летним опытом в области неврологии. Прошла обучение в лучших клиниках Германии и Швейцарии. Специализируется на лечении заболеваний позвоночника, головных болей, последствий инсультов и неврологических расстройств.',
    education: 'Санкт-Петербургский медицинский университет',
    services: ['Неврологическое обследование', 'ЭНМГ', 'Реабилитация после инсульта'],
    schedule: 'Вт-Сб: 10:00-19:00',
    price: '4 200 ₽',
    imageColor: '#8b5cf6',
    featured: true,
    consultationTypes: ['in-person'],
    availableDates: ['2024-01-20', '2024-01-22', '2024-01-24'],
    availableTimes: ['10:00', '11:00', '15:00', '16:00'],
    languages: ['Русский', 'Немецкий'],
    certifications: ['Сертификат по неврологии'],
    phone: '+7 (999) 123-45-68',
    email: 'a.petrova@medicare.ru',
    room: 'Кабинет 205'
  },
  {
    id: 3,
    name: 'Сергей Кузнецов',
    specialty: 'orthopedics',
    position: 'Хирург-ортопед',
    experience: 18,
    rating: 4.9,
    reviews: 156,
    description: 'Специалист по лечению заболеваний опорно-двигательного аппарата',
    detailedDescription: 'Опытный хирург-ортопед с 18-летним стажем. Выполнил более 2000 успешных операций. Специализируется на артроскопических операциях, эндопротезировании суставов и лечении спортивных травм.',
    education: 'Российский национальный исследовательский медицинский университет',
    services: ['Консультация', 'Артроскопия', 'Эндопротезирование суставов'],
    schedule: 'Пн-Чт: 8:00-17:00',
    price: '5 000 ₽',
    imageColor: '#f59e0b',
    consultationTypes: ['in-person'],
    availableDates: ['2024-01-21', '2024-01-22', '2024-01-23'],
    availableTimes: ['09:00', '11:00', '14:00', '16:00'],
    languages: ['Русский'],
    certifications: ['Сертификат по травматологии и ортопедии'],
    phone: '+7 (999) 123-45-69',
    email: 's.kuznetsov@medicare.ru',
    room: 'Операционный блок 3'
  },
  {
    id: 4,
    name: 'Елена Сидорова',
    specialty: 'ophthalmology',
    position: 'Офтальмолог-хирург',
    experience: 14,
    rating: 4.7,
    reviews: 94,
    description: 'Специалист по лазерной коррекции зрения и лечению заболеваний глаз',
    detailedDescription: 'Ведущий офтальмолог-хирург с 14-летним опытом. Выполнила более 5000 успешных операций по коррекции зрения. Специализируется на современных методах лечения катаракты, глаукомы и лазерной коррекции зрения.',
    education: 'Московская медицинская академия',
    services: ['Диагностика зрения', 'Лазерная коррекция', 'Лечение катаракты'],
    schedule: 'Вт-Пт: 9:00-18:00',
    price: '4 800 ₽',
    imageColor: '#0ea5e9',
    consultationTypes: ['in-person', 'online'],
    availableDates: ['2024-01-22', '2024-01-23', '2024-01-24'],
    availableTimes: ['10:00', '12:00', '14:00', '16:00'],
    languages: ['Русский', 'Английский'],
    certifications: ['Сертификат по офтальмологии'],
    phone: '+7 (999) 123-45-70',
    email: 'e.sidorova@medicare.ru',
    room: 'Кабинет 305'
  }
];

// Начальные отзывы
const initialReviewsData = {
  1: [
    {
      id: 1,
      author: 'Анна Смирнова',
      date: '15.12.2023',
      rating: 5,
      text: 'Отличный врач! Очень внимательный и профессиональный. Помог решить проблемы с давлением, которые мучили годами.',
      verified: true,
      likes: 24
    },
    {
      id: 2,
      author: 'Иван Петров',
      date: '10.12.2023',
      rating: 4,
      text: 'Врач очень компетентный, все объяснил доступным языком. Единственное - немного пришлось подождать перед приемом.',
      verified: true,
      likes: 12
    }
  ],
  2: [],
  3: [],
  4: []
};

const DoctorDetailPage = () => {
  const { id } = useParams();
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    symptoms: '',
    consultationType: 'in-person'
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const doctor = doctorsData.find(d => d.id === parseInt(id));

  useEffect(() => {
    // Загружаем отзывы для конкретного врача
    const doctorReviews = initialReviewsData[parseInt(id)] || [];
    setReviews(doctorReviews);
  }, [id]);

  if (!doctor) {
    return (
      <div className="doctor-detail-not-found">
        <div className="doctor-detail-container">
          <h1>Врач не найден</h1>
          <p>Попробуйте выбрать другого специалиста</p>
          <Link to="/doctors" className="doctor-detail-back-button">
            <ChevronLeft size={20} />
            Вернуться к списку врачей
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      const newReviewObj = {
        id: reviews.length + 1,
        author: 'Вы',
        date: new Date().toLocaleDateString('ru-RU'),
        rating: newRating,
        text: newReview,
        verified: false,
        likes: 0
      };
      
      // Добавляем новый отзыв в начало списка
      setReviews([newReviewObj, ...reviews]);
      setNewReview('');
      setNewRating(5);
      setShowReviewForm(false);
      
      // Обновляем рейтинг врача
      // В реальном приложении здесь будет запрос к серверу
      console.log('Отзыв добавлен:', newReviewObj);
    }
  };

  const handleLikeReview = (reviewId) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, likes: review.likes + 1 } : review
    ));
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
      alert(`Запись успешно оформлена!\nВрач: ${doctor.name}\nДата: ${selectedDate}\nВремя: ${selectedTime}\nТип: ${formData.consultationType === 'in-person' ? 'Очная' : 'Онлайн'}\nМы свяжемся с вами для подтверждения.`);
      setIsBookingModalOpen(false);
      resetBooking();
    }
  };

  const resetBooking = () => {
    setSelectedDate('');
    setSelectedTime('');
    setBookingStep(1);
    setFormData({
      name: '',
      phone: '',
      email: '',
      symptoms: '',
      consultationType: 'in-person'
    });
  };

  const startBooking = () => {
    setIsBookingModalOpen(true);
    resetBooking();
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setBookingStep(3);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setBookingStep(4);
  };

  const consultationTypes = [
    {
      id: 'in-person',
      title: 'Очная консультация',
      icon: MapPin,
      description: `Личный прием в медицинском центре, кабинет ${doctor.room}`
    },
    {
      id: 'online',
      title: 'Онлайн консультация',
      icon: Video,
      description: 'Консультация по видеосвязи из любого места'
    }
  ];

  return (
    <div className="doctor-detail-page">
      {/* Герой-секция */}
      <section className="doctor-detail-hero">
        <div className="doctor-detail-container">
          <Link to="/doctors" className="doctor-detail-back-link">
            <ChevronLeft size={20} />
            <span>Назад к врачам</span>
          </Link>
          
          <div className="doctor-detail-header">
            <div className="doctor-detail-main-info">
              <div className="doctor-detail-avatar" style={{ backgroundColor: doctor.imageColor }}>
                <User size={48} color="white" />
              </div>
              
              <div className="doctor-detail-header-content">
                <div className="doctor-detail-tags">
                  <span className="doctor-detail-specialty-tag">
                    {doctor.specialty === 'therapy' ? 'Терапия' : 
                     doctor.specialty === 'neurology' ? 'Неврология' :
                     doctor.specialty === 'orthopedics' ? 'Ортопедия' :
                     doctor.specialty === 'ophthalmology' ? 'Офтальмология' :
                     doctor.specialty === 'pediatrics' ? 'Педиатрия' : 'Хирургия'}
                  </span>
                  {doctor.featured && (
                    <span className="doctor-detail-featured-tag">
                      <Star size={14} />
                      Рекомендуем
                    </span>
                  )}
                </div>
                
                <h1 className="doctor-detail-name">{doctor.name}</h1>
                <p className="doctor-detail-position">{doctor.position}</p>
                
                <div className="doctor-detail-rating">
                  <div className="doctor-detail-rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill={i < Math.floor(doctor.rating) ? "#f59e0b" : "none"}
                        color={i < doctor.rating ? "#f59e0b" : "#e2e8f0"}
                      />
                    ))}
                  </div>
                  <div className="doctor-detail-rating-info">
                    <span className="doctor-detail-rating-value">{doctor.rating}</span>
                    <span className="doctor-detail-rating-reviews">({doctor.reviews + reviews.length} отзывов)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="doctor-detail-actions">
              <div className="doctor-detail-price">
                <span className="doctor-detail-price-label">Стоимость консультации</span>
                <span className="doctor-detail-price-value">{doctor.price}</span>
              </div>
              <button 
                className="doctor-detail-book-button"
                onClick={startBooking}
              >
                <Calendar size={20} />
                <span>Записаться на прием</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <div className="doctor-detail-container">
        <div className="doctor-detail-content-grid">
          {/* Левая колонка - информация */}
          <div className="doctor-detail-info-section">
            <div className="doctor-detail-section-card">
              <h2 className="doctor-detail-section-title">
                <User size={20} />
                О враче
              </h2>
              <p className="doctor-detail-description">{doctor.detailedDescription}</p>
              
              <div className="doctor-detail-info-grid">
                <div className="doctor-detail-info-item">
                  <Clock size={20} />
                  <div>
                    <h4>Опыт работы</h4>
                    <p>{doctor.experience} лет</p>
                  </div>
                </div>
                
                <div className="doctor-detail-info-item">
                  <Calendar size={20} />
                  <div>
                    <h4>Расписание</h4>
                    <p>{doctor.schedule}</p>
                  </div>
                </div>
                
                <div className="doctor-detail-info-item">
                  <GraduationCap size={20} />
                  <div>
                    <h4>Образование</h4>
                    <p>{doctor.education}</p>
                  </div>
                </div>
                
                <div className="doctor-detail-info-item">
                  <Shield size={20} />
                  <div>
                    <h4>Языки</h4>
                    <p>{doctor.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="doctor-detail-section-card">
              <h2 className="doctor-detail-section-title">
                <Check size={20} />
                Услуги
              </h2>
              <div className="doctor-detail-services-grid">
                {doctor.services.map((service, index) => (
                  <div key={index} className="doctor-detail-service-item">
                    <Check size={16} />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="doctor-detail-section-card">
              <h2 className="doctor-detail-section-title">
                <Award size={20} />
                Сертификаты
              </h2>
              <div className="doctor-detail-certifications-grid">
                {doctor.certifications.map((cert, index) => (
                  <div key={index} className="doctor-detail-cert-item">
                    <Award size={16} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка - отзывы и контакты */}
          <div className="doctor-detail-sidebar">
            <div className="doctor-detail-section-card">
              <div className="doctor-detail-sidebar-header">
                <h2 className="doctor-detail-section-title">
                  <MessageSquare size={20} />
                  Отзывы пациентов
                  <span className="doctor-detail-reviews-count">({reviews.length})</span>
                </h2>
                <button 
                  className="doctor-detail-add-review-btn"
                  onClick={() => setShowReviewForm(true)}
                >
                  <Edit size={18} />
                  Написать отзыв
                </button>
              </div>

              {/* Форма отзыва */}
              {showReviewForm && (
                <div className="doctor-detail-review-form">
                  <div className="doctor-detail-review-form-header">
                    <h3>Оставить отзыв</h3>
                    <button 
                      className="doctor-detail-close-btn"
                      onClick={() => setShowReviewForm(false)}
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmitReview}>
                    <div className="doctor-detail-rating-selector">
                      <span>Ваша оценка:</span>
                      <div className="doctor-detail-stars-selector">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={`doctor-detail-star-selector-btn ${star <= newRating ? 'active' : ''}`}
                            onClick={() => setNewRating(star)}
                          >
                            <Star size={24} />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="doctor-detail-form-group">
                      <textarea
                        placeholder="Поделитесь вашим опытом..."
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        rows={4}
                        required
                      />
                    </div>
                    
                    <button type="submit" className="doctor-detail-submit-btn">
                      <Send size={18} />
                      Отправить отзыв
                    </button>
                  </form>
                </div>
              )}

              {/* Список отзывов */}
              <div className="doctor-detail-reviews-list">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} className="doctor-detail-review-item">
                      <div className="doctor-detail-review-header">
                        <div className="doctor-detail-review-author">
                          <div className="doctor-detail-author-avatar">
                            {review.author.charAt(0)}
                          </div>
                          <div className="doctor-detail-author-info">
                            <span className="doctor-detail-author-name">{review.author}</span>
                            <span className="doctor-detail-review-date">{review.date}</span>
                          </div>
                        </div>
                        
                        <div className="doctor-detail-review-rating">
                          <div className="doctor-detail-review-stars">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                fill={i < review.rating ? "#f59e0b" : "none"}
                                color={i < review.rating ? "#f59e0b" : "#e2e8f0"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="doctor-detail-review-text">{review.text}</p>
                      
                      <div className="doctor-detail-review-footer">
                        {review.verified && (
                          <span className="doctor-detail-verified-badge">
                            <Check size={12} />
                            Проверенный отзыв
                          </span>
                        )}
                        <button 
                          className="doctor-detail-like-btn"
                          onClick={() => handleLikeReview(review.id)}
                        >
                          <ThumbsUp size={16} />
                          <span>{review.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="doctor-detail-no-reviews">
                    <MessageSquare size={48} />
                    <p>Пока нет отзывов</p>
                    <p>Будьте первым, кто оставит отзыв</p>
                  </div>
                )}
              </div>
            </div>

            <div className="doctor-detail-section-card">
              <h2 className="doctor-detail-section-title">
                <Phone size={20} />
                Контакты
              </h2>
              <div className="doctor-detail-contacts-list">
                <div className="doctor-detail-contact-item">
                  <Phone size={20} />
                  <div>
                    <h4>Телефон</h4>
                    <a href={`tel:${doctor.phone}`}>{doctor.phone}</a>
                  </div>
                </div>
                
                <div className="doctor-detail-contact-item">
                  <Mail size={20} />
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
                  </div>
                </div>
                
                <div className="doctor-detail-contact-item">
                  <MapPin size={20} />
                  <div>
                    <h4>Кабинет</h4>
                    <p>{doctor.room}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно записи */}
      {isBookingModalOpen && (
        <div className="doctor-detail-modal-overlay" onClick={() => setIsBookingModalOpen(false)}>
          <div className="doctor-detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="doctor-detail-modal-header">
              <h2>Запись на прием к {doctor.name}</h2>
              <button 
                className="doctor-detail-modal-close"
                onClick={() => setIsBookingModalOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="doctor-detail-modal-steps">
              <div className={`doctor-detail-step ${bookingStep >= 1 ? 'active' : ''}`}>
                <div className="doctor-detail-step-number">1</div>
                <span>Тип приема</span>
              </div>
              <div className={`doctor-detail-step ${bookingStep >= 2 ? 'active' : ''}`}>
                <div className="doctor-detail-step-number">2</div>
                <span>Дата</span>
              </div>
              <div className={`doctor-detail-step ${bookingStep >= 3 ? 'active' : ''}`}>
                <div className="doctor-detail-step-number">3</div>
                <span>Время</span>
              </div>
              <div className={`doctor-detail-step ${bookingStep >= 4 ? 'active' : ''}`}>
                <div className="doctor-detail-step-number">4</div>
                <span>Данные</span>
              </div>
            </div>

            <div className="doctor-detail-modal-content">
              {bookingStep === 1 && (
                <div className="doctor-detail-step-content">
                  <h3>Выберите тип приема</h3>
                  <div className="doctor-detail-consultation-types-select">
                    {consultationTypes
                      .filter(type => doctor.consultationTypes.includes(type.id))
                      .map((type) => (
                        <div 
                          key={type.id}
                          className={`doctor-detail-consultation-type-card ${formData.consultationType === type.id ? 'selected' : ''}`}
                          onClick={() => {
                            setFormData({...formData, consultationType: type.id});
                            setBookingStep(2);
                          }}
                        >
                          <div className="doctor-detail-consultation-type-icon">
                            <type.icon size={24} />
                          </div>
                          <div className="doctor-detail-consultation-type-info">
                            <h4>{type.title}</h4>
                            <p>{type.description}</p>
                          </div>
                          <ChevronRight size={20} />
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="doctor-detail-step-content">
                  <h3>Выберите дату</h3>
                  <div className="doctor-detail-dates-select">
                    {doctor.availableDates.map((date, index) => (
                      <button
                        key={index}
                        className={`doctor-detail-date-button ${selectedDate === date ? 'selected' : ''}`}
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

              {bookingStep === 3 && selectedDate && (
                <div className="doctor-detail-step-content">
                  <h3>Выберите время</h3>
                  <div className="doctor-detail-times-select">
                    {doctor.availableTimes.map((time, index) => (
                      <button
                        key={index}
                        className={`doctor-detail-time-button ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 4 && (
                <div className="doctor-detail-step-content">
                  <h3>Ваши данные</h3>
                  <form onSubmit={handleSubmitBooking}>
                    <div className="doctor-detail-form-group">
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
                    <div className="doctor-detail-form-group">
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
                    <div className="doctor-detail-form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="doctor-detail-form-group">
                      <label>Симптомы или причина обращения</label>
                      <textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleFormChange}
                        rows="3"
                        placeholder="Опишите ваши симптомы..."
                      />
                    </div>
                    
                    <div className="doctor-detail-booking-summary">
                      <h4>Детали записи:</h4>
                      <p><strong>Врач:</strong> {doctor.name}</p>
                      <p><strong>Тип:</strong> {formData.consultationType === 'in-person' ? 'Очная консультация' : 'Онлайн консультация'}</p>
                      <p><strong>Дата:</strong> {selectedDate}</p>
                      <p><strong>Время:</strong> {selectedTime}</p>
                      {formData.consultationType === 'in-person' && (
                        <p><strong>Кабинет:</strong> {doctor.room}</p>
                      )}
                      <p><strong>Стоимость:</strong> {doctor.price}</p>
                    </div>
                    
                    <button type="submit" className="doctor-detail-submit-booking-button">
                      Подтвердить запись
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="doctor-detail-modal-footer">
              {bookingStep > 1 && (
                <button 
                  className="doctor-detail-modal-back-button"
                  onClick={() => setBookingStep(bookingStep - 1)}
                >
                  Назад
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA секция */}
      <section className="doctor-detail-cta-section">
        <div className="doctor-detail-container">
          <div className="doctor-detail-cta-content">
            <h2>Записаться на прием к врачу</h2>
            <p>Выберите удобное время для консультации у {doctor.name}</p>
            <div className="doctor-detail-cta-buttons">
              <Link to="/doctors" className="doctor-detail-cta-btn secondary">
                <ChevronLeft size={18} />
                <span>Назад к врачам</span>
              </Link>
              <button 
                className="doctor-detail-cta-btn primary"
                onClick={startBooking}
              >
                <Calendar size={18} />
                <span>Записаться на прием</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetailPage;