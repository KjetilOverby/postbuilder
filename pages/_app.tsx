import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import React, { useState, useRef, useEffect, createContext } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { ContextAppData } from "../data/context/ContextAppData";

export default function App({ Component, pageProps }: AppProps) {
  const [poster, setPoster] = useState();
  const [skurliste, setSkurliste] = useState();
  const [skurlisteInfo, setSkurlisteInfo] = useState();
  const [finalSkurlisteInfo, setFinalSkurlisteInfo] = useState();
  const [postInfo, setPostInfo] = useState();
  const [searchResultModal, setSearchResultModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [postID, setPostID] = useState();
  const [dotUpdate, setDotUpdate] = useState(false);
  const [openDot, setOpenDot] = useState(false);

  const [colorTheme, setColorTheme] = useState({});
  const [chosenTheme, setChosenTheme] = useState("");
  const [chosenThemeColor, setChosenThemeColor] = useState("");
  const [parsedTheme, setParsedTheme] = useState("");

  const UseComponentDidMount = () => {
    const ref = useRef<any>();
    useEffect(() => {
      ref.current = true;
    }, []);
    return ref.current;
  };

  const api = axios.create({
    baseURL: process.env.api,
  });

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const isComponentMounted = UseComponentDidMount();

  function purpleTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#363538");
      r.style.setProperty("--primary-text", "#c2c2c2");
      r.style.setProperty("--table-bg", "#282729");
      r.style.setProperty("--outer", "#405697");
      r.style.setProperty("--outer-text", "#9db2ef");
      r.style.setProperty("--center", "#52d6f4");
      r.style.setProperty("--center-text", "#2b6977");
      r.style.setProperty("--text", "#52d6f4");
      r.style.setProperty("--hover", "#464646");
      r.style.setProperty("--running", "#567574");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#394046");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#6cacd2, rgb(41, 41, 41))"
      );
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#d2c1df, rgb(18, 32, 73))"
      );
      r.style.setProperty("--center-text2", "#23194b");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function greenTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#17252a");
      r.style.setProperty("--primary-text", "#def2f1");
      r.style.setProperty("--table-bg", "#29424b");
      r.style.setProperty("--outer", "#2b7a78");
      r.style.setProperty("--outer-text", "#ceeeda");
      r.style.setProperty("--center", "#def2f1");
      r.style.setProperty("--center-text", "#436268");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "#395352");
      r.style.setProperty("--running", "#26706d");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#394046");
      r.style.setProperty("--outer2", "#5d5c61");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#7395ae");
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function brightTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty(
        "--primary",
        "linear-gradient(#d2c1df, rgb(18, 32, 73))"
      );
      r.style.setProperty("--primary-text", "#def2f1");
      r.style.setProperty("--table-bg", "#c7bcb6");
      r.style.setProperty("--outer", "#123c69");
      r.style.setProperty("--outer-text", "#ceeeda");
      r.style.setProperty("--center", "#ab3b61");
      r.style.setProperty("--center-text", "#f0b8cb");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "#bab2b5");
      r.style.setProperty("--running", "#26706d");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#EEE2DC");
      r.style.setProperty("--outer2", "#5d5c61");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#7395ae");
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }

  useEffect(() => {
    if (isComponentMounted) {
      localStorage.setItem("color", JSON.stringify(chosenTheme));
    }
  }, [chosenTheme]);

  useEffect(() => {
    setChosenThemeColor(localStorage.getItem("color"));
  }, [chosenTheme]);

  useEffect(() => {
    if (chosenThemeColor === '"green"') {
      greenTheme();
    } else if (chosenThemeColor === '"purple"') {
      purpleTheme();
    } else if (chosenThemeColor === '"bright"') {
      brightTheme();
    }
  }, [chosenThemeColor]);

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
  }, [update]);

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
  }, [update, dotUpdate]);

  // DELETE POSTS

  return (
    <Auth0Provider
      // @ts-ignore
      domain={domain}
      // @ts-ignore
      clientId={clientId}
      // @ts-ignore
      redirectUri={typeof window !== "undefined" && window.location.origin}
    >
      <ContextAppData.Provider
        value={{
          postInfo,
          setPostInfo,
          openEdit,
          setOpenEdit,
          setUpdate,
          update,
          setPostID,
          postID,
        }}
      >
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
          dotUpdate={dotUpdate}
          setDotUpdate={setDotUpdate}
          openDot={openDot}
          setOpenDot={setOpenDot}
          setChosenTheme={setChosenTheme}
        />
      </ContextAppData.Provider>
    </Auth0Provider>
  );
}
