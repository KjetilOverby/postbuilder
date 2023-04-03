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
      r.style.setProperty("--primary", "#4c4b4f");
      r.style.setProperty("--primary-text", "#c2c2c2");
      r.style.setProperty("--table-bg", "#282729");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#557a95,#bcd9ee, #557a95)"
      );
      r.style.setProperty("--outer-text", "#557a95");
      r.style.setProperty(
        "--center",
        "linear-gradient(#b1a296, #eddfd3, #b1a296)"
      );
      r.style.setProperty("--center-text", "#98806b");
      r.style.setProperty("--text", "#7395ae");
      r.style.setProperty("--hover", "#464646");
      r.style.setProperty("--running", "#7395ae");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#394046");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#557a95,#bcd9ee, #557a95)"
      );
      r.style.setProperty("--outer-text2", "#557a95");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#b1a296, #eddfd3, #b1a296)"
      );
      r.style.setProperty("--center-text2", "#98806b");
      r.style.setProperty("--mark", "#bcd9ee");
      r.style.setProperty("--text2", "#7395ae");
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
      r.style.setProperty(
        "--outer",
        "linear-gradient(#2b7a78,#ceeeda, #2b7a78)"
      );
      r.style.setProperty("--outer-text", "#2b7a78");
      r.style.setProperty(
        "--center",
        "linear-gradient(#9ecfcc,#ffffff, #9ecfcc)"
      );
      r.style.setProperty("--center-text", "#436268");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "#395352");
      r.style.setProperty("--running", "#26706d");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#394046");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#2b7a78,#ceeeda, #2b7a78)"
      );
      r.style.setProperty("--outer-text2", "#2b7a78");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#9ecfcc,#ffffff, #9ecfcc)"
      );
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#ceeeda");
      r.style.setProperty("--text2", "#9ecfcc");
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
      r.style.setProperty(
        "--outer",
        "linear-gradient(#8e8d8a,#eae7dc, #8e8d8a)"
      );
      r.style.setProperty("--outer-text", "#8e8d8a");
      r.style.setProperty(
        "--center",
        "linear-gradient(#e98074,#f2b2ab, #e98074)"
      );
      r.style.setProperty("--center-text", "#864942");
      r.style.setProperty("--text", "#8e8d8a");
      r.style.setProperty("--hover", "#aeaba1");
      r.style.setProperty("--running", "#d8c3a5");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#706f6c");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#8e8d8a,#eae7dc, #8e8d8a)"
      );
      r.style.setProperty("--outer-text2", "#8e8d8a");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#e98074,#f2b2ab, #e98074)"
      );
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#e98074");
      r.style.setProperty("--text2", "#e98074");
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
      r.style.setProperty(
        "--outer",
        "linear-gradient(#116466,#8edddf, #116466)"
      );
      r.style.setProperty("--outer-text", "#2f6c6a");
      r.style.setProperty(
        "--center",
        "linear-gradient(#b78b65,#f1d4ba, #b78b65)"
      );
      r.style.setProperty("--center-text", "#73573f");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "#272f2b");
      r.style.setProperty("--running", "#26706d");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#1f2522");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#116466,#8edddf, #116466)"
      );
      r.style.setProperty("--outer-text2", "#2f6c6a");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#d9b08c,#f1d4ba, #d9b08c)"
      );
      r.style.setProperty("--center-text2", "#73573f");
      r.style.setProperty("--mark", "#8edddf");
      r.style.setProperty("--text2", "#45a29e");
    }
  }
  function innovativeTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#46344e");
      r.style.setProperty("--primary-text", "#def2f1");
      r.style.setProperty("--table-bg", "#5a5560");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#5a5560,#8edddf, #5a5560"
      );
      r.style.setProperty("--outer-text", "#406568");
      r.style.setProperty(
        "--center",
        "linear-gradient(#9b786f,#d1e8e2, #9b786f"
      );
      r.style.setProperty("--center-text", "#9b786f");
      r.style.setProperty("--text", "#5a5560");
      r.style.setProperty("--hover", "#34273a");
      r.style.setProperty("--running", "#99ced3");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#3c567a");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#5a5560,#8edddf, #5a5560"
      );
      r.style.setProperty("--outer-text2", "#5a5560");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#9b786f,#d1e8e2, #9b786f"
      );
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#d1e8e2");
      r.style.setProperty("--text2", "#9d8d8f");
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
      r.style.setProperty(
        "--outer",
        "linear-gradient(#406568, #79b3b9, #406568)"
      );
      r.style.setProperty("--outer-text", "#fff");
      r.style.setProperty(
        "--center",
        "linear-gradient(#77a6f7,#ccdcf9, #77a6f7)"
      );
      r.style.setProperty("--center-text", "#3a537d");
      r.style.setProperty("--text", "#45a29e");
      r.style.setProperty("--hover", "rgb(196, 196, 196)");
      r.style.setProperty("--running", "#99ced3");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#d3e3fc");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#77a6f7,#ccdcf9, #77a6f7)"
      );
      r.style.setProperty("--outer-text2", "#3a537d");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#406568, #79b3b9, #406568)"
      );
      r.style.setProperty("--center-text2", "#3f2f29");
      r.style.setProperty("--mark", "#9c9c9c");
      r.style.setProperty("--text2", "#3a537d");
    }
  }
  function greenPearlTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#a3bcb6");
      r.style.setProperty("--primary-text", "#39603d");
      r.style.setProperty("--table-bg", "#daded4");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#39603d, #daded4, #39603d)"
      );
      r.style.setProperty("--outer-text", "#39603d");
      r.style.setProperty(
        "--center",
        "linear-gradient(#3c403d,#c4e1da, #3c403d)"
      );
      r.style.setProperty("--center-text", "#3c403d");
      r.style.setProperty("--text", "#39603d");
      r.style.setProperty("--hover", "#c4e1da");
      r.style.setProperty("--running", "#99ced3");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#a3bcb6");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#3c403d,#c4e1da, #3c403d)"
      );
      r.style.setProperty("--outer-text2", "#3c403d");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#39603d, #daded4, #39603d)"
      );
      r.style.setProperty("--center-text2", "#39603d");
      r.style.setProperty("--mark", "#39603d");
      r.style.setProperty("--text2", "#39603d");
    }
  }
  // SAND THEME not in use
  function sandTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#2d545e");
      r.style.setProperty("--primary-text", "#c89666");
      r.style.setProperty("--table-bg", "#daded4");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#2d545e, #daded4, #2d545e)"
      );
      r.style.setProperty("--outer-text", "e1b382");
      r.style.setProperty(
        "--center",
        "linear-gradient(#c89666,#daded4, #c89666)"
      );
      r.style.setProperty("--center-text", "#c89666");
      r.style.setProperty("--text", "e1b382");
      r.style.setProperty("--hover", "#c4e1da");
      r.style.setProperty("--running", "#99ced3");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#a3bcb6");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#e1b382,#c89666, #e1b382)"
      );
      r.style.setProperty("--outer-text2", "#e1b382");
      r.style.setProperty(
        "--center2",
        "linear-gradient(e1b382, #daded4, e1b382)"
      );
      r.style.setProperty("--center-text2", "#39603d");
      r.style.setProperty("--mark", "#39603d");
      r.style.setProperty("--text2", "#39603d");
    }
  }

  function duskGradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#19547b, #ffd89b)");
      r.style.setProperty("--primary-text", "#000000)");
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
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "#19547b");
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
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "#d3e3fc");
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
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "#0f3d5c");
    }
  }
  function goldGradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty(
        "--primary",
        "linear-gradient(#292929, rgb(212,154,119)"
      );
      r.style.setProperty("--primary-text", "#d3e3fc");
      r.style.setProperty(
        "--table-bg",
        "linear-gradient(rgb(212,154,119), #292929)"
      );
      r.style.setProperty(
        "--outer",
        "linear-gradient(#292929, rgb(212,154,119), #292929)"
      );
      r.style.setProperty("--outer-text", "#292929");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52, rgb(212,154,119), #1B2F52)"
      );
      r.style.setProperty("--center-text", "#1B2F52");
      r.style.setProperty("--text", "#292929");
      r.style.setProperty("--hover", "rgb(212,154,119)");
      r.style.setProperty("--running", "#292929");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty(
        "--finish-text",
        "linear-gradient(rgb(212,154,119), #292929)"
      );
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#292929, rgb(212,154,119), #292929)"
      );
      r.style.setProperty("--outer-text2", "#292929");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, rgb(212,154,119), #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "rgb(212,154,119)");
      r.style.setProperty("--text2", "rgb(239, 202, 179)");
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
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "#f093c0");
    }
  }
  function greenDarknessTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#000000, #55EFC4)");
      r.style.setProperty("--primary-text", "#d3e3fc");
      r.style.setProperty("--table-bg", "linear-gradient(#55EFC4, #000000)");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#000000, #55EFC4, #000000)"
      );
      r.style.setProperty("--outer-text", "#000000");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52, #55EFC4, #1B2F52)"
      );
      r.style.setProperty("--center-text", "#000000");
      r.style.setProperty("--text", "#000000");
      r.style.setProperty("--hover", "#55EFC4");
      r.style.setProperty("--running", "#000000");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#55EFC4, #000000)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#000000, #55EFC4, #000000)"
      );
      r.style.setProperty("--outer-text2", "#000000");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, #55EFC4, #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "#1B2F52");
    }
  }
  function lightTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#dfdfde");
      r.style.setProperty("--primary-text", "#1B2F52");
      r.style.setProperty("--table-bg", "#cfcfcf");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#697184,#9aa6c4, #697184)"
      );
      r.style.setProperty("--outer-text", "#f2f1ef");
      r.style.setProperty(
        "--center",
        "linear-gradient(#b1a6a4, #f2f1ef, #b1a6a4)"
      );
      r.style.setProperty("--center-text", "#1B2F52");
      r.style.setProperty("--text", "#b1a6a4");
      r.style.setProperty("--hover", "#c8c8c8");
      r.style.setProperty("--running", "#b1a6a4");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#f2f1ef, #b1a6a4)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#b1a6a4, #f2f1ef, #b1a6a4)"
      );
      r.style.setProperty("--outer-text2", "#1B2F52");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, #f2f1ef, #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "#1B2F52");
      r.style.setProperty("--text2", "#697184");
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
    if (chosenThemeColor === '"Cadet"') {
      greenTheme();
    } else if (chosenThemeColor === '"Steelblue"') {
      purpleTheme();
    } else if (chosenThemeColor === '"Tomato"') {
      brightTheme();
    } else if (chosenThemeColor === '"Futuristic"') {
      futuristicTheme();
    } else if (chosenThemeColor === '"Innovative"') {
      innovativeTheme();
    } else if (chosenThemeColor === '"Dodger"') {
      flatcolorsTheme();
    } else if (chosenThemeColor === '"Dusk"') {
      duskGradientTheme();
    } else if (chosenThemeColor === '"Dark blue"') {
      bluegradientTheme();
    } else if (chosenThemeColor === '"Anwar"') {
      anwarGradientTheme();
    } else if (chosenThemeColor === '"Dark bronze"') {
      goldGradientTheme();
    } else if (chosenThemeColor === '"Pink darkness"') {
      pinkDarknessTheme();
    } else if (chosenThemeColor === '"Green darkness"') {
      greenDarknessTheme();
    } else if (chosenThemeColor === '"Quick silver"') {
      lightTheme();
    } else if (chosenThemeColor === '"Green pearl"') {
      greenPearlTheme();
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
          chosenThemeColor,
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
