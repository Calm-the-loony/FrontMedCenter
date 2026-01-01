import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Check
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AuthPage.css';

// Моковые данные пользователей
const mockUsers = {
  'patient@medicare.ru': { 
    password: 'patient123', 
    type: 'patient',
    firstName: 'Иван',
    lastName: 'Петров',
    middleName: 'Сергеевич',
    phone: '+7 (999) 123-45-67',
    birthDate: '1990-05-15',
    insuranceNumber: '1234567890123456',
    appointments: [
      { id: 1, date: '2025-01-20', time: '10:00', doctor: 'Др. Смирнова А.И.', specialty: 'Терапевт', status: 'confirmed' },
      { id: 2, date: '2025-01-25', time: '14:30', doctor: 'Др. Иванов П.С.', specialty: 'Кардиолог', status: 'pending' }
    ],
    medicalHistory: [
      { id: 1, date: '2024-12-10', diagnosis: 'ОРВИ', doctor: 'Др. Смирнова А.И.' },
      { id: 2, date: '2024-11-05', diagnosis: 'Гипертония', doctor: 'Др. Иванов П.С.' }
    ]
  },
  'doctor@medicare.ru': { 
    password: 'doctor123', 
    type: 'doctor',
    firstName: 'Анна',
    lastName: 'Смирнова',
    middleName: 'Ивановна',
    phone: '+7 (495) 765-43-21',
    specialty: 'Терапевт',
    license: 'ЛИЦ-2025-12345',
    experience: 8,
    schedule: 'Пн-Пт: 9:00-18:00',
    patientsToday: 12,
    upcomingAppointments: [
      { id: 1, patient: 'Иван Петров', time: '10:00', complaint: 'Повышенное давление' },
      { id: 2, patient: 'Мария Сидорова', time: '11:00', complaint: 'Кашель' }
    ]
  },
  'nurse@medicare.ru': { 
    password: 'nurse123', 
    type: 'nurse',
    firstName: 'Ольга',
    lastName: 'Кузнецова',
    middleName: 'Петровна',
    phone: '+7 (495) 654-32-10',
    department: 'Процедурный кабинет',
    license: 'МС-2025-67890',
    experience: 5,
    schedule: 'Пн-Сб: 8:00-16:00',
    proceduresToday: 8
  },
  'admin@medicare.ru': { 
    password: 'admin123', 
    type: 'admin',
    firstName: 'Александр',
    lastName: 'Васильев',
    middleName: 'Михайлович',
    phone: '+7 (495) 987-65-43',
    role: 'Администратор системы',
    permissions: ['users', 'doctors', 'appointments', 'settings'],
    systemStats: {
      totalUsers: 1245,
      activeDoctors: 24,
      appointmentsToday: 56
    }
  }
};

const AuthPage = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Если пользователь уже авторизован, перенаправляем в профиль
  React.useEffect(() => {
    if (currentUser) {
      navigate('/profile');
    }
  }, [currentUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isLogin) {
      // Регистрация нового пациента
      const formData = new FormData(e.target);
      const firstName = formData.get('firstName') || '';
      const lastName = formData.get('lastName') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || '';
      const password = formData.get('password') || '';
      const confirmPassword = formData.get('confirmPassword') || '';
      
      // Проверка паролей
      if (password !== confirmPassword) {
        setErrorMessage('Пароли не совпадают');
        return;
      }
      
      // Проверка email
      if (mockUsers[email]) {
        setErrorMessage('Пользователь с таким email уже существует');
        return;
      }
      
      // Создание нового пользователя
      const newUser = {
        type: 'patient',
        email,
        firstName,
        lastName,
        phone,
        appointments: [],
        medicalHistory: [],
        insuranceNumber: 'НОВЫЙ-' + Date.now().toString().slice(-12)
      };
      
      login(newUser);
      navigate('/profile');
      return;
    }
    
    // Вход существующего пользователя
    const formData = new FormData(e.target);
    const email = formData.get('email') || '';
    const password = formData.get('password') || '';
    
    if (!email || !password) {
      setErrorMessage('Введите email и пароль');
      return;
    }
    
    const user = mockUsers[email];
    
    if (!user) {
      setErrorMessage('Пользователь с таким email не найден');
      return;
    }
    
    if (user.password !== password) {
      setErrorMessage('Неверный пароль');
      return;
    }
    
    const { password: _, ...userData } = user;
    login(userData);
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-shapes">
        <div className="auth-circle auth-circle1"></div>
        <div className="auth-circle auth-circle2"></div>
        <div className="auth-circle auth-circle3"></div>
        <div className="auth-circle auth-circle4"></div>
      </div>

      <section className="auth-section">
        <div className="auth-container">
          <div className="auth-header">
            <div className="auth-tag">
              <div className="auth-tag-dot"></div>
              {isLogin ? 'ВХОД В АККАУНТ' : 'СОЗДАНИЕ АККАУНТА'}
            </div>
            <h1 className="auth-title">
              Добро пожаловать в
              <span className="auth-title-highlight">MediCare</span>
            </h1>
            <p className="auth-description">
              {isLogin 
                ? 'Войдите в личный кабинет для управления вашим здоровьем и записями на приемы'
                : 'Создайте личный кабинет для управления вашим здоровьем, записью на приемы и доступом к персональному плану лечения.'}
            </p>
          </div>

          <div className="auth-card">
            <div className="auth-mode-toggle">
              <button
                className={`auth-mode-button ${!isLogin ? 'auth-mode-button-active' : ''}`}
                onClick={() => setIsLogin(false)}
                type="button"
              >
                Регистрация
              </button>
              <button
                className={`auth-mode-button ${isLogin ? 'auth-mode-button-active' : ''}`}
                onClick={() => setIsLogin(true)}
                type="button"
              >
                Вход
              </button>
            </div>

            {/* Сообщение об ошибке */}
            {errorMessage && (
              <div className="auth-error-message">
                {errorMessage}
              </div>
            )}

            {/* Тестовые данные */}
            {isLogin && (
              <div className="auth-test-users">
                <h4>Тестовые пользователи:</h4>
                <div className="auth-test-user">
                  <strong>Пациент:</strong> patient@medicare.ru / patient123
                </div>
                <div className="auth-test-user">
                  <strong>Врач:</strong> doctor@medicare.ru / doctor123
                </div>
                <div className="auth-test-user">
                  <strong>Медсестра:</strong> nurse@medicare.ru / nurse123
                </div>
                <div className="auth-test-user">
                  <strong>Админ:</strong> admin@medicare.ru / admin123
                </div>
              </div>
            )}

            <form className="auth-form" onSubmit={handleSubmit}>
              {!isLogin ? (
                <div className="auth-grid">
                  <div className="auth-form-section">
                    <h2 className="auth-section-title">Личная информация</h2>
                    <p className="auth-section-subtitle">Ваши базовые данные</p>

                    <div className="auth-name-group">
                      <div className="auth-input-group">
                        <label className="auth-label">Имя</label>
                        <div className="auth-input-wrapper">
                          <User size={18} className="auth-input-icon" />
                          <input 
                            type="text" 
                            name="firstName"
                            placeholder="Ваше имя" 
                            className="auth-input"
                            required 
                          />
                        </div>
                      </div>
                      <div className="auth-input-group">
                        <label className="auth-label">Фамилия</label>
                        <div className="auth-input-wrapper">
                          <User size={18} className="auth-input-icon" />
                          <input 
                            type="text" 
                            name="lastName"
                            placeholder="Ваша фамилия" 
                            className="auth-input"
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="auth-input-group">
                      <label className="auth-label">Email</label>
                      <div className="auth-input-wrapper">
                        <Mail size={18} className="auth-input-icon" />
                        <input 
                          type="email" 
                          name="email"
                          placeholder="your@email.com" 
                          className="auth-input"
                          required 
                        />
                      </div>
                    </div>

                    <div className="auth-input-group">
                      <label className="auth-label">Телефон</label>
                      <div className="auth-input-wrapper">
                        <Phone size={18} className="auth-input-icon" />
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="+7 (___) ___-__-__" 
                          className="auth-input"
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Аккаунт и безопасность */}
                  <div className="auth-form-section">
                    <h2 className="auth-section-title">Аккаунт и безопасность</h2>
                    <p className="auth-section-subtitle">Защита ваших данных</p>

                    <div className="auth-input-group">
                      <label className="auth-label">Пароль</label>
                      <div className="auth-input-wrapper">
                        <Lock size={18} className="auth-input-icon" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="••••••••"
                          className="auth-input"
                          required
                          minLength="6"
                        />
                        <button
                          type="button"
                          className="auth-password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="auth-input-group">
                      <label className="auth-label">Подтвердите пароль</label>
                      <div className="auth-input-wrapper">
                        <Check size={18} className="auth-input-icon" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          placeholder="••••••••"
                          className="auth-input"
                          required
                          minLength="6"
                        />
                        <button
                          type="button"
                          className="auth-password-toggle"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="auth-security-box">
                      <Shield size={20} className="auth-security-icon" />
                      <div>
                        <div className="auth-security-title">Безопасность данных</div>
                        <div className="auth-security-text">
                          Ваши персональные и медицинские данные защищены согласно законодательству о защите персональных данных
                        </div>
                      </div>
                    </div>

                    <div className="auth-checkbox">
                      <input type="checkbox" id="terms" required className="auth-checkbox-input" />
                      <label htmlFor="terms" className="auth-checkbox-label">
                        Я согласен с{' '}
                        <Link to="/terms" className="auth-agreement-link">
                          условиями использования
                        </Link>{' '}
                        и{' '}
                        <Link to="/privacy" className="auth-agreement-link">
                          политикой конфиденциальности
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="auth-login-form">
                  <div className="auth-input-group">
                    <label className="auth-label">Email</label>
                    <div className="auth-input-wrapper">
                      <Mail size={18} className="auth-input-icon" />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="your@email.com" 
                        className="auth-input"
                        required 
                      />
                    </div>
                  </div>

                  <div className="auth-input-group">
                    <label className="auth-label">Пароль</label>
                    <div className="auth-input-wrapper">
                      <Lock size={18} className="auth-input-icon" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="••••••••"
                        className="auth-input"
                        required
                      />
                      <button
                        type="button"
                        className="auth-password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="auth-forgot-password">
                    <button type="button" className="auth-forgot-link">
                      Забыли пароль?
                    </button>
                  </div>
                </div>
              )}

              <div className="auth-divider"></div>

              <button type="submit" className="auth-submit-button">
                {isLogin ? 'Войти в аккаунт' : 'Создать аккаунт и начать путь к здоровью'}
              </button>

              <div className="auth-switch-mode">
                {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
                <button
                  type="button"
                  className="auth-switch-link"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Зарегистрируйтесь' : 'Войти'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthPage;