/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheets */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Libraries Stylesheet */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="lib/lightbox/css/lightbox.min.css"
          rel="stylesheet"
        />

        {/* Customized Bootstrap Stylesheet */}
        <link
          href="lib/bootstrap/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Description */}
        <meta
          name="description"
          content="Профессиональная фотостудия Focus - съемка портретов, свадеб, корпоративных мероприятий и других важных событий. Наша команда опытных фотографов и редакторов поможет вам создать неповторимый образ и запечатлеть яркие моменты жизни. Забронируйте сессию уже сегодня и получите качественные фотографии, которые будут радовать вас годами!"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Scripts */}
        <script
          defer
          src="https://code.jquery.com/jquery-3.4.1.min.js"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        ></script>
        <script defer src="lib/wow/wow.min.js"></script>
        <script defer src="lib/easing/easing.min.js"></script>
        <script defer src="lib/waypoints/waypoints.min.js"></script>
        <script defer src="lib/counterup/counterup.min.js"></script>
        <script
          defer
          src="lib/owlcarousel/owl.carousel.min.js"
        ></script>
        <script defer src="lib/lightbox/js/lightbox.min.js"></script>
        <script defer src="js/main.js"></script>
      </body>
    </Html>
  );
}
