import React from "react";

const InputComponent = ({
  setListInputData,
  resetListHandler,
  listInputData,
  createFieldHandler,
}: any) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 bg-slate-500 rounded-md">
        <div className="w-36">
          <div className="grid grid-cols-2 place-items-center w-36 pt-8">
            <div
              onClick={() =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  treslag: "Gran",
                }))
              }
              className="border grid place-content-center h-16 w-16 rounded-full bg-green-600 hover:cursor-pointer hover:bg-green-700"
            >
              <p>Gran</p>
            </div>
            <div
              onClick={() =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  treslag: "Furu",
                }))
              }
              className="border grid place-content-center h-16 w-16 rounded-full bg-orange-400 hover:cursor-pointer hover:bg-orange-500"
            >
              <p>Furu</p>
            </div>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Klasse</p>
            <select
              value={listInputData.klasse}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  klasse: e.target.value,
                }))
              }
            >
              <option selected disabled hidden value="">
                Velg
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Klassetype</p>
            <select
              value={listInputData.klType}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  klType: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="Spesial">Spesial</option>
              <option value="Panel">Panel</option>
              <option value="Kort">Kort</option>
              <option value="Lang">Lang</option>
              <option value="Malm">Malm</option>
              <option value="X-ray">X-ray</option>
              <option value="Krok">Krok</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Antall</p>
            <input
              value={listInputData.ant}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  ant: e.target.value,
                }))
              }
              type="number"
              className="w-20"
            />
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">M3</p>
            <input
              value={listInputData.m3}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  m3: e.target.value,
                }))
              }
              type="number"
              className="w-20"
            />
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Status</p>
            <select
              value={listInputData.status}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  status: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="tøm">tøm</option>
              <option value="stopp">stopp</option>
            </select>
          </div>
          <div className="bg-stone-600 mt-5 rounded-md p-2">
            <button className="mr-5 text-slate-50" onClick={resetListHandler}>
              Nullstill
            </button>
            <button onClick={createFieldHandler} className="text-slate-50">
              Lagre
            </button>
          </div>
        </div>
        <div className="w-36">
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Post</p>
            <input
              value={listInputData.post}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  post: e.target.value,
                }))
              }
              type="text"
              className="w-20"
            />
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Bredde</p>
            <select
              value={listInputData.breddePost}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  breddePost: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="84">84</option>
              <option value="85">85</option>
              <option value="92">92</option>
              <option value="95">95</option>
              <option value="100">100</option>
              <option value="105">105</option>
              <option value="112">112</option>
              <option value="125">125</option>
              <option value="127">127</option>
              <option value="128">128</option>
              <option value="130">130</option>
              <option value="132">132</option>
              <option value="135">135</option>
              <option value="140">140</option>
              <option value="142">142</option>
              <option value="150">150</option>
              <option value="152">152</option>
              <option value="155">155</option>
              <option value="165">165</option>
              <option value="166">166</option>
              <option value="170">170</option>
              <option value="172">172</option>
              <option value="175">175</option>
              <option value="180">180</option>
              <option value="185">185</option>
              <option value="186">186</option>
              <option value="195">195</option>
              <option value="200">200</option>
              <option value="210">210</option>
              <option value="215">215</option>
              <option value="225 ">225</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">X-log</p>
            <select
              value={listInputData.xLog}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  xLog: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="1X">1X</option>
              <option value="2X">2X</option>
              <option value="3X">3X</option>
              <option value="4X">4X</option>
              <option value="5X">5X</option>
              <option value="1X/OS">1X/OS</option>
              <option value="2X/OS">2X/OS</option>
              <option value="3X/OS">3X/OS</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Tørkeprosent</p>
            <select
              value={listInputData.prosent}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  prosent: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="18">18</option>
              <option value="12">12</option>
              <option value="12/18">12/18</option>
              <option value="18/12">18/12</option>
              <option value="16">16</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Anm</p>
            <input
              value={listInputData.anm}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  anm: e.target.value,
                }))
              }
              type="text"
              className="w-20"
            />
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">Anm 2</p>
            <input
              value={listInputData.anm2}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  anm2: e.target.value,
                }))
              }
              type="text"
              className="w-20"
            />
          </div>
        </div>
        <div className="w-44">
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">VS-66 ty</p>
            <select
              value={listInputData.vs66}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  vs66: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="16">16</option>
              <option value="19">19</option>
              <option value="22">22</option>
              <option value="25">25</option>
              <option value="32">32</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">VS-66 Br</p>
            <select
              value={listInputData.vs66Br}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  vs66Br: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="75">75</option>
              <option value="100">100</option>
              <option value="125">125</option>
              <option value="75, 100">75, 100</option>
              <option value="100, 125">100, 125</option>
              <option value="125, 150">125, 150</option>
              <option value="75, 100, 125">75, 100, 125</option>
              <option value="100, 125, 150">100, 125, 150</option>
              <option value="125, 150, 175">125, 150, 175</option>
              <option value="75, 100, 125, 150">75, 100, 125, 150</option>
              <option value="100, 125, 150, 175">100, 125, 150, 175</option>
            </select>
          </div>
          <div className="p-2 bg-orange-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">VS-66 xtra ty</p>
            <select
              value={listInputData.vs66Xtra}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  vs66Xtra: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="16">16</option>
              <option value="19">19</option>
              <option value="22">22</option>
              <option value="25">25</option>
              <option value="32">32</option>
            </select>
          </div>
          <div className="p-2 bg-orange-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">VS-66 xtra br</p>
            <select
              value={listInputData.vs66XtraBr}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  vs66XtraBr: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="75">75</option>
              <option value="100">100</option>
              <option value="125">125</option>
              <option value="75, 100">75, 100</option>
              <option value="100, 125">100, 125</option>
              <option value="125, 150">125, 150</option>
              <option value="75, 100, 125">75, 100, 125</option>
              <option value="100, 125, 150">100, 125, 150</option>
              <option value="125, 150, 175">125, 150, 175</option>
              <option value="75, 100, 125, 150">75, 100, 125, 150</option>
              <option value="100, 125, 150, 175">100, 125, 150, 175</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">MKV ty</p>
            <select
              value={listInputData.mkvBord}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  mkvBord: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="16">16</option>
              <option value="19">19</option>
              <option value="22">22</option>
              <option value="25">25</option>
              <option value="32">32</option>
            </select>
          </div>
          <div className="p-2 bg-slate-300 mt-5 rounded-md">
            <p className="text-slate-700 mb-3">MKV br</p>
            <select
              value={listInputData.mkvBr}
              onChange={(e) =>
                setListInputData((prevState: any) => ({
                  ...prevState,
                  mkvBr: e.target.value,
                }))
              }
            >
              <option value="">Velg</option>
              <option value="75">75</option>
              <option value="100">100</option>
              <option value="125">125</option>
              <option value="75, 100">75, 100</option>
              <option value="100, 125">100, 125</option>
              <option value="125, 150">125, 150</option>
              <option value="75, 100, 125">75, 100, 125</option>
              <option value="100, 125, 150">100, 125, 150</option>
              <option value="125, 150, 175">125, 150, 175</option>
              <option value="75, 100, 125, 150">75, 100, 125, 150</option>
              <option value="100, 125, 150, 175">100, 125, 150, 175</option>
            </select>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default InputComponent;
