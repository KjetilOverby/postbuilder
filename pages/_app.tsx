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

  const [chosenTheme, setChosenTheme] = useState<any>("");
  const [chosenThemeColor, setChosenThemeColor] = useState<any>("");

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
      r.style.setProperty("--outer", "#4b65b3");
      r.style.setProperty("--outer-text", "#9db2ef");
      r.style.setProperty("--center", "#9db2ef");
      r.style.setProperty("--center-text", "#2b6977");
      r.style.setProperty("--text", "#52d6f4");
      r.style.setProperty("--hover", "#464646");
      r.style.setProperty("--running", "#567574");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#394046");
      r.style.setProperty("--outer2", "#4b65b3");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#52d6f4");
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
      r.style.setProperty("--primary-text", "#ceeeda");
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
      r.style.setProperty("--outer2", "#2b7a78");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#def2f1");
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
      r.style.setProperty("--primary", "#eae7dc");
      r.style.setProperty("--primary-text", "#8e8d8a");
      r.style.setProperty("--table-bg", "#c9c6bc");
      r.style.setProperty("--outer", "#8e8d8a");
      r.style.setProperty("--outer-text", "#ceeeda");
      r.style.setProperty("--center", "#e98074");
      r.style.setProperty("--center-text", "#864942");
      r.style.setProperty("--text", "#8e8d8a");
      r.style.setProperty("--hover", "#aeaba1");
      r.style.setProperty("--running", "#d8c3a5");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#706f6c");
      r.style.setProperty("--outer2", "#d8c3a5");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#7395ae");
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function futuristicTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#2c3531");
      r.style.setProperty("--primary-text", "#def2f1");
      r.style.setProperty("--table-bg", "#1f2522");
      r.style.setProperty("--outer", "#116466");
      r.style.setProperty("--outer-text", "#ceeeda");
      r.style.setProperty("--center", "#d9b08c");
      r.style.setProperty("--center-text", "#88694e");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "#272f2b");
      r.style.setProperty("--running", "#26706d");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#1f2522");
      r.style.setProperty("--outer2", "#116466");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#d9b08c");
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function innovativeTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#5f6366");
      r.style.setProperty("--primary-text", "#def2f1");
      r.style.setProperty("--table-bg", "#4d6d9a");
      r.style.setProperty("--outer", "#99ced3");
      r.style.setProperty("--outer-text", "#406568");
      r.style.setProperty("--center", "#edb5bf");
      r.style.setProperty("--center-text", "#80414c");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "#324868");
      r.style.setProperty("--running", "#99ced3");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#3c567a");
      r.style.setProperty("--outer2", "#4d6d9a");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#99ced3");
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function flatcolorsTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#fff");
      r.style.setProperty("--primary-text", "#334b75");
      r.style.setProperty("--table-bg", "rgb(231, 231, 231)");
      r.style.setProperty("--outer", "#406568");
      r.style.setProperty("--outer-text", "#fff");
      r.style.setProperty("--center", "#77a6f7");
      r.style.setProperty("--center-text", "#3a537d");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "rgb(196, 196, 196)");
      r.style.setProperty("--running", "#99ced3");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#d3e3fc");
      r.style.setProperty("--outer2", "#4d6d9a");
      r.style.setProperty("--outer-text2", "#ceeeda");
      r.style.setProperty("--center2", "#99ced3");
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function duskGradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#19547b, #ffd89b)");
      r.style.setProperty("--primary-text", "#edd4ab");
      r.style.setProperty("--table-bg", "linear-gradient(#ffd89b, #19547b)");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#19547b, #ffd89b, #19547b)"
      );
      r.style.setProperty("--outer-text", "#79674a");
      r.style.setProperty(
        "--center",
        "linear-gradient(#0f3d5c, #ffd89b, #0f3d5c)"
      );
      r.style.setProperty("--center-text", "#79674a");
      r.style.setProperty("--text", "#19547b");
      r.style.setProperty("--hover", "#ffd89b");
      r.style.setProperty("--running", "#19547b");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#ffd89b, #19547b)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#19547b, #ffd89b, #19547b)"
      );
      r.style.setProperty("--outer-text2", "#79674a");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#0f3d5c, #ffd89b, #0f3d5c)"
      );
      r.style.setProperty("--center-text2", "#79674a");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function bluegradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#09203f, #537895)");
      r.style.setProperty("--primary-text", "#d3e3fc");
      r.style.setProperty("--table-bg", "linear-gradient(#537895, #09203f)");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#09203f, #537895, #09203f)"
      );
      r.style.setProperty("--outer-text", "#d3e3fc");
      r.style.setProperty(
        "--center",
        "linear-gradient(#0f3d5c, #537895, #0f3d5c)"
      );
      r.style.setProperty("--center-text", "#d3e3fc");
      r.style.setProperty("--text", "#09203f");
      r.style.setProperty("--hover", "#537895");
      r.style.setProperty("--running", "#77a6f7");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#537895, #09203f)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#09203f, #537895, #09203f)"
      );
      r.style.setProperty("--outer-text2", "#d3e3fc");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#0f3d5c, #537895, #0f3d5c)"
      );
      r.style.setProperty("--center-text2", "#d3e3fc");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function anwarGradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#334d50, #cbcaa5)");
      r.style.setProperty("--primary-text", "#d3e3fc");
      r.style.setProperty("--table-bg", "linear-gradient(#cbcaa5, #334d50)");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#334d50, #cbcaa5, #334d50)"
      );
      r.style.setProperty("--outer-text", "#334d50");
      r.style.setProperty(
        "--center",
        "linear-gradient(#0f3d5c, #cbcaa5, #0f3d5c)"
      );
      r.style.setProperty("--center-text", "#0f3d5c");
      r.style.setProperty("--text", "#334d50");
      r.style.setProperty("--hover", "#cbcaa5");
      r.style.setProperty("--running", "#cbcaa5");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#cbcaa5, #334d50)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#334d50, #cbcaa5, #334d50)"
      );
      r.style.setProperty("--outer-text2", "#334d50");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#0f3d5c, #cbcaa5, #0f3d5c)"
      );
      r.style.setProperty("--center-text2", "#d3e3fc");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function goldGradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#A2790D, #EBD197)");
      r.style.setProperty("--primary-text", "#d3e3fc");
      r.style.setProperty("--table-bg", "linear-gradient(#EBD197, #A2790D)");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#A2790D, #EBD197, #A2790D)"
      );
      r.style.setProperty("--outer-text", "#A2790D");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52, #EBD197, #1B2F52)"
      );
      r.style.setProperty("--center-text", "#1B2F52");
      r.style.setProperty("--text", "#A2790D");
      r.style.setProperty("--hover", "#EBD197");
      r.style.setProperty("--running", "#A2790D");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#EBD197, #A2790D)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#A2790D, #EBD197, #A2790D)"
      );
      r.style.setProperty("--outer-text2", "#A2790D");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, #EBD197, #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }
  function pinkDarknessTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#000000, #E84393)");
      r.style.setProperty("--primary-text", "#d3e3fc");
      r.style.setProperty("--table-bg", "linear-gradient(#E84393, #000000)");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#000000, #E84393, #000000)"
      );
      r.style.setProperty("--outer-text", "#d3e3fc");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52, #E84393, #1B2F52)"
      );
      r.style.setProperty("--center-text", "#d3e3fc");
      r.style.setProperty("--text", "#000000");
      r.style.setProperty("--hover", "#E84393");
      r.style.setProperty("--running", "#000000");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#E84393, #000000)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#000000, #E84393, #000000)"
      );
      r.style.setProperty("--outer-text2", "#000000");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, #E84393, #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "#9c9c9c");
    }
  }

  useEffect(() => {
    if (isComponentMounted) {
      localStorage.setItem("color", JSON.stringify(chosenTheme));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    } else if (chosenThemeColor === '"futuristic"') {
      futuristicTheme();
    } else if (chosenThemeColor === '"innovative"') {
      innovativeTheme();
    } else if (chosenThemeColor === '"flatcolors"') {
      flatcolorsTheme();
    } else if (chosenThemeColor === '"duskgradient"') {
      duskGradientTheme();
    } else if (chosenThemeColor === '"bluegradient"') {
      bluegradientTheme();
    } else if (chosenThemeColor === '"anwar"') {
      anwarGradientTheme();
    } else if (chosenThemeColor === '"gold"') {
      goldGradientTheme();
    } else if (chosenThemeColor === '"pinkdarkness"') {
      pinkDarknessTheme();
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
