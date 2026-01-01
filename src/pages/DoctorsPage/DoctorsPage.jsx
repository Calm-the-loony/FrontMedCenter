import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ChevronRight,
  Search,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Check,
  Sparkles,
  Shield,
  Clock4
} from 'lucide-react';
import './DoctorsPage.css';

const DoctorsPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    { id: 'all', name: 'Все врачи', icon: User, color: '#10b981', count: 24 },
    { id: 'therapy', name: 'Терапия', icon: Heart, color: '#ef4444', count: 8 },
    { id: 'neurology', name: 'Неврология', icon: Brain, color: '#8b5cf6', count: 5 },
    { id: 'orthopedics', name: 'Ортопедия', icon: Bone, color: '#f59e0b', count: 4 },
    { id: 'ophthalmology', name: 'Офтальмология', icon: Eye, color: '#0ea5e9', count: 3 },
    { id: 'pediatrics', name: 'Педиатрия', icon: Baby, color: '#ec4899', count: 4 },
    { id: 'surgery', name: 'Хирургия', icon: Cross, color: '#dc2626', count: 3 }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Дмитрий Иванов',
      specialty: 'therapy',
      position: 'Главный терапевт',
      experience: 15,
      rating: 4.9,
      reviews: 127,
      description: 'Специалист по внутренним болезням, кардиологии и гастроэнтерологии',
      education: 'Московский государственный медицинский университет',
      services: ['Консультация', 'Диагностика', 'Лечение хронических заболеваний'],
      schedule: 'Пн-Пт: 9:00-18:00',
      price: '3 500 ₽',
      imageColor: '#10b981',
      featured: true,
      nextAvailable: 'Сегодня, 14:30'
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
      education: 'Санкт-Петербургский медицинский университет',
      services: ['Неврологическое обследование', 'ЭНМГ', 'Реабилитация после инсульта'],
      schedule: 'Вт-Сб: 10:00-19:00',
      price: '4 200 ₽',
      imageColor: '#8b5cf6',
      featured: true,
      nextAvailable: 'Завтра, 10:00'
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
      education: 'Российский национальный исследовательский медицинский университет',
      services: ['Консультация', 'Артроскопия', 'Эндопротезирование суставов'],
      schedule: 'Пн-Чт: 8:00-17:00',
      price: '5 000 ₽',
      imageColor: '#f59e0b',
      nextAvailable: 'Сегодня, 16:45'
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
      education: 'Московская медицинская академия',
      services: ['Диагностика зрения', 'Лазерная коррекция', 'Лечение катаракты'],
      schedule: 'Вт-Пт: 9:00-18:00',
      price: '4 800 ₽',
      imageColor: '#0ea5e9',
      nextAvailable: 'Завтра, 11:15'
    },
    {
      id: 5,
      name: 'Мария Козлова',
      specialty: 'pediatrics',
      position: 'Детский врач',
      experience: 10,
      rating: 4.9,
      reviews: 203,
      description: 'Специалист по детским заболеваниям и профилактической медицине',
      education: 'Российский университет дружбы народов',
      services: ['Прием детей', 'Вакцинация', 'Профилактические осмотры'],
      schedule: 'Пн-Пт: 8:00-16:00',
      price: '3 200 ₽',
      imageColor: '#ec4899',
      nextAvailable: 'Сегодня, 15:30'
    },
    {
      id: 6,
      name: 'Алексей Волков',
      specialty: 'surgery',
      position: 'Хирург общей практики',
      experience: 20,
      rating: 4.8,
      reviews: 178,
      description: 'Опытный хирург с многолетним стажем работы',
      education: 'Саратовский государственный медицинский университет',
      services: ['Плановые операции', 'Экстренная хирургия', 'Послеоперационное ведение'],
      schedule: 'Пн-Ср-Пт: 8:00-17:00',
      price: '6 500 ₽',
      imageColor: '#dc2626',
      featured: true,
      nextAvailable: 'Пн, 9:00'
    },
    {
      id: 7,
      name: 'Ольга Николаева',
      specialty: 'therapy',
      position: 'Кардиолог',
      experience: 11,
      rating: 4.7,
      reviews: 76,
      description: 'Специалист по заболеваниям сердечно-сосудистой системы',
      education: 'Кемеровская государственная медицинская академия',
      services: ['ЭКГ', 'Холтер-мониторинг', 'Лечение гипертонии'],
      schedule: 'Вт-Чт-Сб: 10:00-19:00',
      price: '4 000 ₽',
      imageColor: '#ef4444',
      nextAvailable: 'Ср, 14:00'
    },
    {
      id: 8,
      name: 'Игорь Смирнов',
      specialty: 'neurology',
      position: 'Детский невролог',
      experience: 9,
      rating: 4.8,
      reviews: 112,
      description: 'Специалист по неврологическим заболеваниям у детей',
      education: 'Казанский государственный медицинский университет',
      services: ['Прием детей', 'Диагностика СДВГ', 'Реабилитация ДЦП'],
      schedule: 'Пн-Пт: 9:00-17:00',
      price: '3 800 ₽',
      imageColor: '#8b5cf6',
      nextAvailable: 'Чт, 13:45'
    }
  ];

  const stats = [
    { icon: Award, value: '15+', label: 'Лет средний опыт' },
    { icon: Star, value: '4.8', label: 'Средний рейтинг' },
    { icon: User, value: '95%', label: 'Пациентов рекомендуют' },
    { icon: Shield, value: '24', label: 'Врача в команде' }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  const handleBookAppointment = (doctor) => {
    alert(`Запись на прием к врачу ${doctor.name}\nСпециализация: ${doctor.position}\nБлижайшее время: ${doctor.nextAvailable}\nМы свяжемся с вами для подтверждения записи.`);
  };

  return (
    <div className="doctors-page">

      {/* Герой-секция */}
      <section className="doctors-hero">
        <div className="doctors-container">
          <div className="doctors-header">
            <div className="doctors-tag">
              <div className="doctors-tag-dot"></div>
              НАША КОМАНДА
            </div>
            <h1 className="doctors-title">
              Наши <span className="doctors-title-highlight">врачи</span>
            </h1>
            <p className="doctors-description">
              Профессиональные врачи с многолетним опытом работы. 
              Мы собрали команду лучших специалистов для вашего здоровья.
            </p>
          </div>

          {/* Поиск */}
          <div className="doctors-search-section">
            <div className="search-wrapper">
              <Search size={20} />
              <input
                type="text"
                placeholder="Поиск врача по имени или специализации..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="search-results-info">
              Найдено <span>{filteredDoctors.length}</span> врачей
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="doctors-stats-section">
        <div className="doctors-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Специализации */}
      <section className="doctors-specialties-section">
        <div className="doctors-container">
          <div className="section-header">
            <h2>Специализации</h2>
            <p>Выберите направление медицины</p>
          </div>
          
          <div className="specialties-grid">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                className={`specialty-card ${selectedSpecialty === specialty.id ? 'selected' : ''}`}
                onClick={() => setSelectedSpecialty(specialty.id)}
                style={{ '--specialty-color': specialty.color }}
              >
                <div className="specialty-icon-wrapper">
                  <div className="specialty-icon">
                    <specialty.icon size={20} />
                  </div>
                </div>
                <div className="specialty-info">
                  <span className="specialty-name">{specialty.name}</span>
                  <span className="specialty-count">{specialty.count} врачей</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Список врачей */}
      <section className="doctors-list-section">
        <div className="doctors-container">
          <div className="section-header">
            <div>
              <h2>Наши врачи</h2>
              <p>Выберите врача для записи на консультацию</p>
            </div>
            <div className="sort-options">
              <span className="sort-label">Найдено:</span>
              <span className="sort-count">{filteredDoctors.length} врачей</span>
            </div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="no-results-card">
              <div className="no-results-icon">
                <User size={48} />
              </div>
              <h3>Врачи не найдены</h3>
              <p>Попробуйте изменить поисковый запрос или выбрать другую специализацию.</p>
            </div>
          ) : (
            <div className="doctors-grid">
              {filteredDoctors.map((doctor) => (
                <div 
                  key={doctor.id}
                  className={`doctor-card ${doctor.featured ? 'featured' : ''}`}
                >
                  {doctor.featured && (
                    <div className="featured-badge">
                      <Sparkles size={12} />
                      <span>Рекомендуем</span>
                    </div>
                  )}
                  
                  <div className="doctor-card-header">
                    <div className="doctor-avatar" style={{ backgroundColor: doctor.imageColor }}>
                      <User size={32} color="white" />
                    </div>
                    <div className="doctor-header-info">
                      <h3 className="doctor-name">{doctor.name}</h3>
                      <p className="doctor-position">{doctor.position}</p>
                      <div className="doctor-rating">
                        <Star size={14} />
                        <span className="rating-value">{doctor.rating}</span>
                        <span className="rating-reviews">({doctor.reviews} отзывов)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="doctor-specialty-badge">
                    {specialties.find(s => s.id === doctor.specialty)?.name}
                  </div>
                  
                  <p className="doctor-description">{doctor.description}</p>
                  
                  <div className="doctor-details">
                    <div className="doctor-detail">
                      <Clock size={16} />
                      <span>{doctor.experience} лет опыта</span>
                    </div>
                    <div className="doctor-detail">
                      <Clock4 size={16} />
                      <span>{doctor.nextAvailable}</span>
                    </div>
                  </div>
                  
                  <div className="doctor-services">
                    {doctor.services.slice(0, 3).map((service, index) => (
                      <div key={index} className="service-item">
                        <Check size={12} />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="doctor-card-footer">
                    <div className="doctor-price">
                      <span className="price-label">Консультация</span>
                      <span className="price-value">{doctor.price}</span>
                    </div>
                    <button 
                      className="book-consultation-btn"
                      onClick={() => handleBookAppointment(doctor)}
                    >
                      <Calendar size={16} />
                      <span>Записаться</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="doctors-cta-section">
        <div className="doctors-container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Нужна помощь с выбором врача?</h2>
              <p>Наши координаторы помогут подобрать подходящего специалиста под ваши потребности</p>
              <div className="cta-buttons">
                <Link to="/contacts" className="cta-btn secondary">
                  <Phone size={18} />
                  <span>Контакты</span>
                </Link>
                <Link to="/consultations" className="cta-btn primary">
                  <Calendar size={18} />
                  <span>Бесплатная консультация</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;