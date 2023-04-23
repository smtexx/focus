/* eslint-disable @next/next/no-img-element */

import PageTitle from '../components/PageTitle/PageTitle';

export default function Contact() {
  return (
    <>
      <PageTitle title="Контакты | Фотостудия Focus" />;{/* Header */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">
                Контакты
              </h1>
              <p className="animated slideInDown">
                Вы можете связаться с нами удобным для вас способом,
                или отправить сообщение используя форму обратной связи
                ниже. Будем рады ответить на любые вопросы.
              </p>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid bg-white p-3 w-100"
                    src="img/hero-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <img
                    className="img-fluid bg-white p-3 w-100"
                    src="img/hero-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <section className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <p className="text-primary text-uppercase mb-2">
              Написать нам
            </p>
            <h1 className="display-6 mb-5">
              Если у вас есть вопросы, напишите нам
            </h1>
          </div>
          <div className="row g-0 justify-content-center">
            <div
              className="col-lg-8 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="text-center mb-4">
                Заполните поля формы и мы обязательно свяжемся с вами.
                Пожалуйста, укажите в сообщении email для обратной
                связи и тему сообщения, так нам будет проще обработать
                ваше обращение.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Ваше имя"
                      />
                      <label htmlFor="name">Ваше имя</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ваш Email"
                      />
                      <label for="email">Ваш Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Тема сообщения"
                      />
                      <label for="subject">Тема сообщения</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Текст сообщения"
                        id="message"
                        style={{ height: '200px' }}
                      ></textarea>
                      <label for="message">Текст сообщения</label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                    >
                      Отправить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Google Map */}
      <section
        className="container-xxl py-5 px-0 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <iframe
          className="w-100 mb-n2"
          style={{ height: '450px' }}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Abdbaedf4f3d51e03895ba18b236d4eba509ddf00c46c2bbe50d05dd98498d693&amp;source=constructor"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
