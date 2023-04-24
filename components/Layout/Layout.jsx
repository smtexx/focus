/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect } from 'react';
import MetaTags from '../MetaTags/MetaTags';
import Logo from '../Logo/Logo';
import s from './Layout.module.css';

/* eslint-disable @next/next/no-img-element */
export default function Layout({ children }) {
  useEffect(() => {
    function hideLoader() {
      const spinner = document.getElementById('spinner');
      if(spinner) {
        spinner.classList.remove('show')
      }
    }

    setTimeout(() => {      
      hideLoader();
    }, 3000);
  }, [children]);

  return (
    <>
      <MetaTags />
      {/* Spinner */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          role="status"
        ></div>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a
          href="index.html"
          className="navbar-brand d-block d-lg-none"
        >
          <h1 className={`text-primary ${s.headerMobile}`}>
            <Logo />
            Focus
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              На главную
            </a>
            <a href="index.html#about" className="nav-item nav-link">
              О нас
            </a>
            <a href="index.html#facts" className="nav-item nav-link">
              Преимущества
            </a>
          </div>
          <a
            href="index.html"
            className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block"
          >
            <h1 className={`text-white ${s.headerDesctop}`}>
              <Logo />
              Focus
            </h1>
          </a>
          <div className="navbar-nav me-auto py-0">
            <a href="index.html#service" className="nav-item nav-link">
              Услуги
            </a>
            <div className="nav-item dropdown">
              <a
                href="index.html#service"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Информация
              </a>
              <div className="dropdown-menu rounded-0 shadow-sm border-0 m-0">
                <a href="index.html#projects" className="dropdown-item">
                  Наши работы
                </a>
                <a href="index.html#team" className="dropdown-item">
                  Команда
                </a>
                <a href="index.html#testimonial" className="dropdown-item">
                  Отзывы
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Pages */}
      <main>{children}</main>

      {/* Footer */}
      <div
        className="container-fluid footer position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row g-5 py-5">
          <div className="col-lg-6 pe-lg-5">
            <a href="index.html" className="navbar-brand">
              <h1 className="display-5 text-primary">Focus</h1>
            </a>
            <p>
              Фотостудия Focus - это профессионалы, с многолетним
              опытом работы в сфере фотографии. Мы предлагаем полный
              спектр услуг: от портретов до свадебной съёмки.
              Гарантируем качество и индивидуальный подход к каждому
              клиенту. Работая с нами, вы получите высококлассные
              фотографии, которые идеально запечатлят лучшие моменты
              вашей жизни.
            </p>
            <p>
              <i className="fa fa-map-marker-alt me-2"></i>
              Краснообск, ул. Западная 220
            </p>
            <p className={s.link}>
              <i className="fa fa-phone-alt me-2 "></i>
              <a className="text-white-50" href="tel:+79031111111">
                +7 (903) 111-11-11
              </a>
            </p>
            <p className={s.link}>
              <i className="fa fa-envelope me-2 "></i>{' '}
              <a
                className="text-white-50"
                href="mailto:contact@v-focuse.ru"
              >
                contact@v-focuse.ru
              </a>
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-square btn-outline-primary rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-square btn-outline-primary rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square btn-outline-primary rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-square btn-outline-primary rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="row g-5">
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Навигация</h4>
                <a className="btn btn-link" href="index.html#about">
                  О нас
                </a>
                <a className="btn btn-link" href="index.html#facts">
                  Преимущества
                </a>
                <a className="btn btn-link" href="index.html#service">
                  Услуги
                </a>
                <a className="btn btn-link" href="index.html#projects">
                  Наши работы
                </a>
                <a className="btn btn-link" href="index.html#testimonial">
                  Отзывы
                </a>
              </div>
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Интересное</h4>
                <a className="btn btn-link" href="#">
                  Конкурсы
                </a>
                <a className="btn btn-link" href="#">
                  Лучшие фото
                </a>
                <a className="btn btn-link" href="#">
                  Крутые идеи
                </a>
                <a className="btn btn-link" href="#">
                  Стили фотографии
                </a>
                <a className="btn btn-link" href="#">
                  35AWARDS
                </a>
              </div>
              <div className="col-sm-12">
                <h4 className="text-light mb-4">Рассылка акций</h4>
                <div className="w-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-0 bg-secondary text-white"
                      style={{ padding: '20px 30px' }}
                      placeholder="Ваш Email адрес"
                    />
                    <button className="btn btn-primary px-4">
                      Подписаться
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid bg-dark text-white border-top border-secondary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="py-4 px-5 text-center text-md-start">
            <p className="mb-0 text-primary">
              <span>&copy;</span> <span id="current-year"></span>{' '}
              <a href="index.html">Фотостудия Focus. </a>
              <span className="text-white">Все права защищены.</span>
            </p>
          </div>
          <div className="py-4 px-5 bg-secondary footer-shape position-relative text-center text-md-end">
            <p className={`mb-0 ${s.created}`}>
              Created by{' '}
              <a className="fw-bold" href="mailto:smtexx@yandex.ru">
                SMTEXX
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
