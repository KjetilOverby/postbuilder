import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import React, { useState, useRef, useEffect, createContext } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { ContextAppData } from "../data/context/ContextAppData";

export default function App({ Component, pageProps }: AppProps) {
  const [darkModeLocal, setDarkModeLocal] = useState<any>(false);
  const [darkModeGet, setDarkModeGet] = useState<any>();
  const [darkMode, setDarkMode] = useState<any>(false);
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
  const [chosenFont, setChosenFont] = useState<any>("");
  const [chosenThemeFont, setChosenThemeFont] = useState<any>("");

  const [editRingPanelValue, setEditRingPanelValue] = useState(true);
  const [savedValuesFromCalc, setSavedValuesFromCalc] = useState({});
  const [getCalcValues, setGetCalcValues] = useState<any>();
  const [parsedCalcValues, setParsedCalcValues] = useState<any>();

  useEffect(() => {
    if (darkModeLocal && isComponentMounted) {
      localStorage.setItem("darkMode", "true");
    } else if (!darkModeLocal && isComponentMounted) {
      localStorage.setItem("darkMode", "false");
    }
  }, [darkModeLocal]);

  useEffect(() => {
    setDarkModeGet(localStorage.getItem("darkMode"));
  }, [darkModeLocal]);
  console.log("dd" + darkModeLocal);

  useEffect(() => {
    if (darkModeGet === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  });

  useEffect(() => {
    if (getCalcValues) {
      setDarkMode(JSON.parse(darkModeGet));
    }
  }, [darkMode]);
  console.log(darkMode);

  useEffect(() => {
    setGetCalcValues(localStorage.getItem("calculations"));
  }, [update]);

  useEffect(() => {
    if (getCalcValues) {
      setParsedCalcValues(JSON.parse(getCalcValues));
    }
  }, [getCalcValues, update]);

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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #282729,#557a95 )"
      );
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #17252a,#2b7a78 )"
      );
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right,#c9c6bc,#e98074 )"
      );
    }
  }
  function futuristicTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#2c3531");
      r.style.setProperty("--primary-text", "#8edddf");
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #1f2522,#116466 )"
      );
    }
  }
  function innovativeTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#46344e");
      r.style.setProperty("--primary-text", "#8dc2c3");
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
      r.style.setProperty("--running", "#787082");
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #5a5560,#3c567a )"
      );
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
      r.style.setProperty("--center-text2", "#406568");
      r.style.setProperty("--mark", "#9c9c9c");
      r.style.setProperty("--text2", "#3a537d");
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, rgb(231, 231, 231),#406568 )"
      );
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #daded4,#a3bcb6 )"
      );
    }
  }

  function sandTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "#2d545e");
      r.style.setProperty("--primary-text", "#c89666");
      r.style.setProperty("--table-bg", "#234249");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#2d545e, #daded4, #2d545e)"
      );
      r.style.setProperty("--outer-text", "rgb(29, 55, 61)");
      r.style.setProperty(
        "--center",
        "linear-gradient(#c89666,#f9e6d2, #c89666)"
      );
      r.style.setProperty("--center-text", "#72553a");
      r.style.setProperty("--text", "#c89666");
      r.style.setProperty("--hover", "rgb(29, 55, 61)");
      r.style.setProperty("--running", "#45727d");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "#2d545e");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#2d545e, #daded4, #2d545e)"
      );
      r.style.setProperty("--outer-text2", "#2d545e");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#c89666,#f9e6d2, #c89666)"
      );
      r.style.setProperty("--center-text2", "#72553a");
      r.style.setProperty("--mark", "#f9e6d2");
      r.style.setProperty("--text2", "#f9e6d2");
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #234249,#72553a )"
      );
    }
  }

  function duskGradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#19547b, #ffd89b)");
      r.style.setProperty("--primary-text", "#fff0d7");
      r.style.setProperty("--table-bg", " #19547b");
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
      r.style.setProperty("--text", "#221f1f");
      r.style.setProperty("--hover", "#7395ae");
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #19547b,#ffd89b)"
      );
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
      r.style.setProperty("--table-bg", " #09203f");
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #09203f,#d3e3fc)"
      );
    }
  }
  function anwarGradientTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#334d50, #cbcaa5)");
      r.style.setProperty("--primary-text", "black");
      r.style.setProperty("--table-bg", "#334d50");
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
      r.style.setProperty("--text", "#b8b697");
      r.style.setProperty("--hover", "#8f8d6a");
      r.style.setProperty("--running", "#b8b697");
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #334d50,#cbcaa5)"
      );
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
      r.style.setProperty("--primary-text", "rgb(245, 218, 201)");
      r.style.setProperty("--table-bg", "#292929");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#292929, rgb(212,154,119), #292929)"
      );
      r.style.setProperty("--outer-text", "rgb(245, 218, 201)");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52, rgb(212,154,119), #1B2F52)"
      );
      r.style.setProperty("--center-text", "#1B2F52");
      r.style.setProperty("--text", "rgb(212,154,119)");
      r.style.setProperty("--hover", "rgb(130, 85, 57)");
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
      r.style.setProperty("--outer-text2", "rgb(245, 218, 201)");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, rgb(212,154,119), #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "rgb(212,154,119)");
      r.style.setProperty("--text2", "rgb(239, 202, 179)");
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right, #292929,rgb(212,154,119))"
      );
    }
  }
  function pinkDarknessTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#000000, #E84393)");
      r.style.setProperty("--primary-text", "#ec9ec4");
      r.style.setProperty("--table-bg", "linear-gradient(#E84393, #000000)");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#000000, #E84393, #000000)"
      );
      r.style.setProperty("--outer-text", "#7a204c");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52, #E84393, #1B2F52)"
      );
      r.style.setProperty("--center-text", "#d3e3fc");
      r.style.setProperty("--text", "#000000");
      r.style.setProperty("--hover", "#7a204c");
      r.style.setProperty("--running", "#000000");
      r.style.setProperty("--finish", "#221f1f");
      r.style.setProperty("--finish-text", "linear-gradient(#E84393, #000000)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#000000, #E84393, #000000)"
      );
      r.style.setProperty("--outer-text2", "#7a204c");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, #E84393, #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "#f093c0");
    }
  }
  function khakiTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#000000,  #A0AECD)");
      r.style.setProperty("--primary-text", "khaki");
      r.style.setProperty("--table-bg", "#393a47");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#000000,  #A0AECD, #000000)"
      );
      r.style.setProperty("--outer-text", "khaki");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52,  #A0AECD, #1B2F52)"
      );
      r.style.setProperty("--center-text", "#1B2F52");
      r.style.setProperty("--text", "#415487");
      r.style.setProperty("--hover", "#262626");
      r.style.setProperty("--running", "#0c3d29");
      r.style.setProperty("--finish", "slategray");
      r.style.setProperty("--finish-text", "black");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#000000,  #A0AECD, #000000)"
      );
      r.style.setProperty("--outer-text2", "#226351");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52,  #A0AECD, #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "white");
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right,  #000000, #A0AECD)"
      );
    }
  }
  function greenDarknessTheme() {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--primary", "linear-gradient(#000000, #55EFC4)");
      r.style.setProperty("--primary-text", "#a1f3db");
      r.style.setProperty("--table-bg", " #000000");
      r.style.setProperty(
        "--outer",
        "linear-gradient(#000000, #55EFC4, #000000)"
      );
      r.style.setProperty("--outer-text", "#226351");
      r.style.setProperty(
        "--center",
        "linear-gradient(#1B2F52, #55EFC4, #1B2F52)"
      );
      r.style.setProperty("--center-text", "#1B2F52");
      r.style.setProperty("--text", "#55EFC4");
      r.style.setProperty("--hover", "#226351");
      r.style.setProperty("--running", "#000000");
      r.style.setProperty("--finish", "#157256");
      r.style.setProperty("--finish-text", "linear-gradient(#55EFC4, #000000)");
      r.style.setProperty(
        "--outer2",
        "linear-gradient(#000000, #55EFC4, #000000)"
      );
      r.style.setProperty("--outer-text2", "#226351");
      r.style.setProperty(
        "--center2",
        "linear-gradient(#1B2F52, #55EFC4, #1B2F52)"
      );
      r.style.setProperty("--center-text2", "#1B2F52");
      r.style.setProperty("--mark", "#d3e3fc");
      r.style.setProperty("--text2", "#1B2F52");
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right,  #000000,#55EFC4)"
      );
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
      r.style.setProperty(
        "--main-to-right",
        "linear-gradient(to right,#cfcfcf,#697184 )"
      );
    }
  }

  const abelFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Abel");
    }
  };
  const krubFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Krub");
    }
  };
  const chakraFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Chakra Petch");
    }
  };
  const exoFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Exo");
    }
  };
  const fjallaFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Fjalla One");
    }
  };
  const orbitronFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Orbitron");
    }
  };
  const redHatFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Red Hat Display");
    }
  };
  const robotoFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Roboto");
    }
  };
  const sairaFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Saira Condensed");
    }
  };
  const spaceGroteskFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Space Grotesk");
    }
  };
  const unicaOneFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Unica One");
    }
  };
  const poiretOneFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Poiret One");
    }
  };
  const electrolizeFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Electrolize");
    }
  };
  const armataFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Armata");
    }
  };
  const firaCodeFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Fira Code");
    }
  };
  const maitreeFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Maitree");
    }
  };
  const nixieFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Nixie One");
    }
  };
  const budaFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Buda");
    }
  };
  const minaFontHandler = () => {
    if (typeof window !== "undefined") {
      const r: any = document.querySelector(":root");
      // Get the styles (properties and values) for the root
      var rs = getComputedStyle(r);
      // Alert the value of the --blue variable
      r.style.setProperty("--font", "Mina");
    }
  };

  // ************** COLOR THEMES ************** //

  useEffect(() => {
    if (isComponentMounted) {
      localStorage.setItem("color", JSON.stringify(chosenTheme));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenTheme]);

  useEffect(() => {
    setChosenThemeColor(localStorage.getItem("color"));
  }, [chosenTheme]);

  // *************** FONTS ******************* //

  useEffect(() => {
    if (isComponentMounted) {
      localStorage.setItem("font", JSON.stringify(chosenFont));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenFont]);

  useEffect(() => {
    setChosenThemeFont(localStorage.getItem("font"));
  }, [chosenFont]);

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
    } else if (chosenThemeColor === '"Sahara night"') {
      sandTheme();
    } else if (chosenThemeColor === '"Khaki"') {
      khakiTheme();
    }
  }, [chosenThemeColor]);

  useEffect(() => {
    if (chosenThemeFont === '"Abel"') {
      abelFontHandler();
    } else if (chosenThemeFont === '"Krub"') {
      krubFontHandler();
    } else if (chosenThemeFont === '"Chakra Petch"') {
      chakraFontHandler();
    } else if (chosenThemeFont === '"Exo"') {
      exoFontHandler();
    } else if (chosenThemeFont === '"Fjalla One"') {
      fjallaFontHandler();
    } else if (chosenThemeFont === '"Orbitron"') {
      orbitronFontHandler();
    } else if (chosenThemeFont === '"Red Hat Display"') {
      redHatFontHandler();
    } else if (chosenThemeFont === '"Roboto"') {
      robotoFontHandler();
    } else if (chosenThemeFont === '"Saira Condensed"') {
      sairaFontHandler();
    } else if (chosenThemeFont === '"Space Grotesk"') {
      spaceGroteskFontHandler();
    } else if (chosenThemeFont === '"Unica One"') {
      unicaOneFontHandler();
    } else if (chosenThemeFont === '"Poiret One"') {
      poiretOneFontHandler();
    } else if (chosenThemeFont === '"Electrolize"') {
      electrolizeFontHandler();
    } else if (chosenThemeFont === '"Armata"') {
      armataFontHandler();
    } else if (chosenThemeFont === '"Fira Code"') {
      firaCodeFontHandler();
    } else if (chosenThemeFont === '"Maitree"') {
      maitreeFontHandler();
    } else if (chosenThemeFont === '"Nixie One"') {
      nixieFontHandler();
    } else if (chosenThemeFont === '"Buda"') {
      budaFontHandler();
    } else if (chosenThemeFont === '"Mina"') {
      minaFontHandler();
    }
  }, [chosenThemeFont]);

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
      redirectUri={typeof window !== "undefined" && window.location.origin}>
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
          chosenThemeFont,
          editRingPanelValue,
          setEditRingPanelValue,
          setSavedValuesFromCalc,
          savedValuesFromCalc,
          setGetCalcValues,
          parsedCalcValues,
          setParsedCalcValues,
          setDarkMode,
          darkMode,
          setDarkModeLocal,
          darkModeLocal,
        }}>
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
          setChosenFont={setChosenFont}
          darkMode={darkMode}
        />
      </ContextAppData.Provider>
    </Auth0Provider>
  );
}
