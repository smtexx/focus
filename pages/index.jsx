import { useEffect } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('spinner').classList.remove('show');
    }, 500);
  }, []);

  return (
    <>
      {/* Header */}
      <section className="container-fluid hero-header bg-light pt-3 pb-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="text-primary text-uppercase mb-2 animated slideInDown">
                Добро пожаловать в Focus!
              </p>
              <h1 className="display-4 mb-3 animated slideInDown">
                Фотостудия Focus, лучшие моменты всегда в фокусе!
              </h1>
              <p className="animated slideInDown">
                Сохраним самые важные моменты вашей жизни в
                незабываемых фотографиях и видео. Профессионально
                превращаем Ваши идеи в качественный цифровой контент с
                помощью новейших технологий.
              </p>
              <div className="d-flex align-items-center pt-4 animated slideInDown">
                <a href="" className="btn btn-primary py-3 px-4 me-5">
                  Подробнее
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/ijb0amENO0E"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="ms-4 mb-0 d-none d-sm-block">
                  Смотреть видео
                </h5>
              </div>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid bg-white p-3 w-100 mb-3"
                    src="img/hero-1.jpg"
                    alt="Молодожены"
                  />
                  <img
                    className="img-fluid bg-white p-3 w-50"
                    src="img/hero-3.jpg"
                    alt="Девочка с тортом"
                  />
                </div>
                <div className="col-6">
                  <img
                    className="img-fluid bg-white p-3 w-50 mb-3"
                    src="img/hero-4.jpg"
                    alt="Портрет женщины"
                  />
                  <img
                    className="img-fluid bg-white p-3 w-100"
                    src="img/hero-2.jpg"
                    alt="Семейная пара с ребенком"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Start */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-1">
            <div className="modal-header bg-primary ">
              <h3
                className="modal-title text-white"
                id="exampleModalLabel"
              >
                Лучшие фото
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="container-xxl py-5" id="about">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img
                    className="img-fluid bg-light p-3"
                    src="img/about-1.jpg"
                    alt="Девушка в свадебном платье"
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img
                    className="img-fluid bg-light p-3"
                    src="img/about-2.jpg"
                    alt="Девушка с фотоаппаратом"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="h-100">
                <p className="text-primary text-uppercase mb-2">
                  О нас
                </p>
                <h1 className="display-6 mb-4">
                  Доверьтесь профессионалам
                </h1>
                <p>
                  Требуется фотограф, который всегда делает свою
                  работу с профессионализмом и страстью? Наш фотограф
                  имеет многолетний опыт фотографии и привносит
                  индивидуальный подход в каждый проект. Он умело
                  использует свет, композицию и свой креатив, чтобы
                  создавать фотографии высочайшего качества.
                </p>
                <p>
                  Мы внимательны к вашим пожеланиям и умеем превращать
                  их в живые и красочные кадры. Если вы хотите, чтобы
                  ваше фото было настоящим произведением искусства,
                  свяжитесь с нами уже сегодня!
                </p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Уникальные фотографии
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Внимание к деталям
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Выезд на мереоприятия
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-3"></i>
                    Профессиональная техника
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5" href="">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="container-xxl py-5" id="facts">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Почему выбирают нас?
            </p>
            <h1 className="display-6 mb-5">
              Огромный опыт фотографии
            </h1>
          </div>
          <div className="row g-3">
            <div
              className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  532
                </h1>
                <h4 className="mb-3">Довольных клиента</h4>
                <span>
                  Сотни наших клиентов остались довольны качественными
                  фотографиями.
                </span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  5
                </h1>
                <h4 className="mb-3">Лет на рынке</h4>
                <span>
                  Более 5 лет мы профессионально занимаемся
                  фотографией, сохраняя лучшие моменты вашей жизни.
                </span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fact-item bg-light text-center h-100 p-5">
                <h1
                  className="display-2 text-primary mb-3"
                  data-toggle="counter-up"
                >
                  26 000
                </h1>
                <h4 className="mb-3">Обработанных фотографий</h4>
                <span>
                  Мы сняли и обработали более 26 000 великолепных
                  фотографий для наших клиентов.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section
        className="container-xxl bg-light py-5 my-5"
        id="service"
      >
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">Услуги</p>
            <h1 className="display-6 mb-4">
              Качественные фотоуслуги для вас
            </h1>
          </div>
          <div className="row g-3">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-1.jpg"
                    alt="Молодожены на свадьбе"
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Свадьбы</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-2.jpg"
                    alt="Портрет женщины"
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Портреты</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-3.jpg"
                    alt="Детский праздник"
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Праздники</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="img/service-4.jpg"
                    alt="Девушка на природе"
                  />
                  <div className="service-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-link text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4>Креативы</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
      <section className="container-xxl py-5" id="projects">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Наши работы
            </p>
            <h1 className="display-6 mb-0">
              Откройте себя в уникальной фотосессии
            </h1>
          </div>
          <div className="row g-3">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-5.jpg"
                      alt="Влюбленная пара"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-5.jpg"
                      data-lightbox="project"
                    >
                      Момент
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-1.jpg"
                      alt="Вечеринка"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-1.jpg"
                      data-lightbox="project"
                    >
                      Вечеринка
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-2.jpg"
                      alt="Детский праздник"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-2.jpg"
                      data-lightbox="project"
                    >
                      Праздник
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-6.jpg"
                      alt="Девушка на пляже"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-6.jpg"
                      data-lightbox="project"
                    >
                      Отдых
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-7.jpg"
                      alt="Свадьба"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-7.jpg"
                      data-lightbox="project"
                    >
                      Свадьба
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-3.jpg"
                      alt="Семейное фото"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-3.jpg"
                      data-lightbox="project"
                    >
                      Семья
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="row g-3">
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-4.jpg"
                      alt="Девушка на природе"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-4.jpg"
                      data-lightbox="project"
                    >
                      Креатив
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="project-item">
                    <img
                      className="img-fluid"
                      src="img/project-8.jpg"
                      alt="Портрет мужчины"
                    />
                    <a
                      className="project-title h5 mb-0"
                      href="img/project-8.jpg"
                      data-lightbox="project"
                    >
                      Портрет
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-xxl px-0 py-5" id="team">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '500px' }}
        >
          <p className="text-primary text-uppercase mb-2">Команда</p>
          <h1 className="display-6 mb-0">
            Креативный фотограф и крутой редактор
          </h1>
        </div>
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 flex-sm-row">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-1.jpg"
                    alt="Алена Лазарева"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>Алена Лазарева</h4>
                    <span>Фотограф</span>
                  </div>
                  <p>
                    Креатив - неотъемлемая часть моей работы, всегда
                    ищу новые идеи, чтобы сделать фотосессию
                    неповторимой
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="row g-0 flex-sm-row-reverse flex-lg-row">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-2.jpg"
                    alt="Денис Блюм"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>Денис Блюм</h4>
                    <span>Редактор</span>
                  </div>
                  <p>
                    Развиваю свои навыки, чтобы достичь идеального
                    результата, сохраняя естественность изображений
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 flex-lg-row-reverse">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-3.jpg"
                    alt="Роман Зайцев"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>Роман Зайцев</h4>
                    <span>Видеограф</span>
                  </div>
                  <p>
                    Создаю качественный контент, мой креативный подход
                    всегда подчеркивает уникальность проекта
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="row g-0 flex-sm-row-reverse">
              <div className="col-sm-6">
                <div className="team-img position-relative">
                  <img
                    className="img-fluid"
                    src="img/team-4.jpg"
                    alt="Полина Андреева"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>Полина Андреева</h4>
                    <span>Ретушер</span>
                  </div>
                  <p>
                    Конечный результат фотосессии во многом зависит от
                    моего умения творчески и точно обработать снимки
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-outline-primary rounded-circle me-2"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-xxl py-5" id="testimonial">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Отзывы клиентов
            </p>
            <h1 className="display-6 mb-0">
              Нам доверяют 500+ клиентов!
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-1.jpg"
                  alt="Максим Демидов"
                />
                <div className="ms-4">
                  <h5 className="mb-1">Максим Демидов</h5>
                  <span>Фотосессия</span>
                </div>
              </div>
              <p className="mb-0">
                Фотосессия юбилея прошла отлично! Фотограф поработал
                отлично, снимки великолепны! Доволен результатом!
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-2.jpg"
                  alt="Анна Волевич"
                />
                <div className="ms-4">
                  <h5 className="mb-1">Анна Волевич</h5>
                  <span>Детский праздник</span>
                </div>
              </div>
              <p className="mb-0">
                Фотограф профессионально запечатлел лучшие моменты дня
                рождения дочери. Рекомендую!
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-3.jpg"
                  alt="Артур Лебедев"
                />
                <div className="ms-4">
                  <h5 className="mb-1">Артур Лебедев</h5>
                  <span>Корпоратив</span>
                </div>
              </div>
              <p className="mb-0">
                Приятно удивлены качеством фото новогоднего
                корпоратива! Фотограф настоящий профессионал.
              </p>
            </div>
            <div className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="flex-shrink-0 rounded-circle border p-1"
                  src="img/testimonial-4.jpg"
                  alt="Татьяна Яковлева"
                />
                <div className="ms-4">
                  <h5 className="mb-1">Татьяна Яковлева</h5>
                  <span>Свадьба</span>
                </div>
              </div>
              <p className="mb-0">
                Мы в восторге от нашей фотосессии! Спасибо за
                профессиональную организацию съемки!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
