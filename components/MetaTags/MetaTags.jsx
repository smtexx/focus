import Head from 'next/head';

export default function MetaTags() {
  return (
    <Head>
      <meta
        content="width=device-width, initial-scale=1.0"
        name="viewport"
      />

      {/* Icons */}
      <link href="share/favicon.ico" rel="icon" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="share/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="share/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="share/favicon-16x16.png"
      />

      <link rel="manifest" href="share/manifest.json" />

      {/* Open Graph */}
      <meta property="og:locale" content="ru-RU" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://smtexx.github.io/focus"
      />
      <meta
        property="og:title"
        content="Фотостудия Focus - лучшие моменты вашей жизни!"
      />
      <meta
        property="og:description"
        content="Мы ловим лучшие моменты вашей жизни. Делаем упор на качество, внимательно следим за каждой деталью и создаем фотографии, которые запомнятся навсегда."
      />
      <meta
        property="og:image"
        content="https://smtexx.github.io/focus/share/ogg-image-wide.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image"
        content="https://smtexx.github.io/focus/share/android-chrome-512x512.png"
      />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
