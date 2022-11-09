import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [poster, setPoster] = useState();
  const [skurliste, setSkurliste] = useState();
  const api = axios.create({
    baseURL: process.env.api,
  });

  useEffect(() => {
    const api = axios.create({
      baseURL: process.env.api,
    });

    api
      .get("/api/poster")
      .then(function (response) {
        // handle success
        setPoster(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  console.log(skurliste);

  useEffect(() => {
    const api = axios.create({
      baseURL: process.env.api,
    });

    api
      .get("/api/skurliste")
      .then(function (response) {
        // handle success
        setSkurliste(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return <Component {...pageProps} poster={poster} skurliste={skurliste} />;
}
