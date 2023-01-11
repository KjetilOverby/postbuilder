import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { ContextAppData } from '../data/context/ContextAppData'

export default function App({ Component, pageProps }: AppProps) {
  
  const [poster, setPoster] = useState();
  const [skurliste, setSkurliste] = useState();
  const [skurlisteInfo, setSkurlisteInfo] = useState();
  const [finalSkurlisteInfo, setFinalSkurlisteInfo] = useState();
  const [postInfo, setPostInfo] = useState();
  const [searchResultModal, setSearchResultModal] = useState(false);
  const [update, setUpdate] = useState(false);

  const api = axios.create({
    baseURL: process.env.api,
  });

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

 

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
  }, [update]);

   // ************ Edit Post *************

   useEffect(() => {
    (async () => {
      try {
        const response = await api.patch("/api/poster/posterEdit");
        setSkurliste(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

 
  return (
    <Auth0Provider
      // @ts-ignore
      domain={domain}
      // @ts-ignore
      clientId={clientId}
      // @ts-ignore
      redirectUri={typeof window !== "undefined" && window.location.origin}
    >
      <ContextAppData.Provider value={{postInfo, setPostInfo}}>
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
        setUpdate={setUpdate}
        update={update}
        finalSkurlisteInfo={finalSkurlisteInfo}
        setFinalSkurlisteInfo={setFinalSkurlisteInfo}
      />
      </ContextAppData.Provider>
    </Auth0Provider>
  );
}
