import React from "react";
import Head from "next/head";

const HeadComponent = () => {
  return (
    <>
      <Head>
        <title>Postarkiv</title>
        <meta name="description" content="Postarkiv, laget av Kjetil Øverby" />
        <link
          rel="icon"
          href="https://images.vexels.com/media/users/3/142635/isolated/preview/a2666c402d4de7d4854ecd75c5ac2b85-spinning-swirls-round-icon.png"
          sizes="any"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Armata&family=Buda:wght@300&family=Chakra+Petch:ital,wght@0,300;0,400;1,300&family=Electrolize&family=Exo:ital,wght@0,100;0,200;1,100&family=Fira+Code:wght@300;400&family=Fjalla+One&family=Krub:ital,wght@0,200;0,300;1,200&family=Maitree:wght@200;300&family=Mina&family=Nixie+One&family=Orbitron:wght@400;500&family=Poiret+One&family=Red+Hat+Display:ital,wght@0,300;0,400;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;1,100&family=Saira+Condensed:wght@100;200&family=Space+Grotesk:wght@300;400&family=Unica+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default HeadComponent;
