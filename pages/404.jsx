/* eslint-disable @next/next/no-html-link-for-pages */

import PageTitle from '../components/PageTitle/PageTitle';

/* eslint-disable @next/next/no-img-element */
export default function Custom404() {
  return (
    <>
      <PageTitle title="404 - не найдено | Фотостудия Focus" />;
      {/* Header */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">
                404 <br /> Страница не найдена
              </h1>
              <p className="animated slideInDown">
                Вы перешли по адресу, которому не соответствует ни
                одна страница нашего сайта...
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
      {/* 404 */}
      <div
        className="container-xxl py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Страница не найдена</h1>
              <p className="mb-4">
                Нам жаль, но запрашиваемая страница отсутствует на
                сервере. Перейдите на главную страницу или
                воспользуйтесь формой поиска.
              </p>
              <a className="btn btn-primary py-3 px-5" href="index.html">
                Вернуться на главную страницу
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
