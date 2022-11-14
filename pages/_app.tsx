import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [poster, setPoster] = useState();
  const [skurliste, setSkurliste] = useState();
  const [skurlisteInfo, setSkurlisteInfo] = useState();
  const [postInfo, setPostInfo] = useState();
  const [searchResultModal, setSearchResultModal] = useState<boolean>(false);

  const api = axios.create({
    baseURL: process.env.api,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/api/poster");
        setPoster(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/api/skurliste");
        setSkurliste(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Component
      {...pageProps}
      poster={poster}
      skurliste={skurliste}
      setSkurlisteInfo={setSkurlisteInfo}
      skurlisteInfo={skurlisteInfo}
      setPostInfo={setPostInfo}
      postInfo={postInfo}
      setSearchResultModal={setSearchResultModal}
      searchResultModal={searchResultModal}
    />
  );
}
