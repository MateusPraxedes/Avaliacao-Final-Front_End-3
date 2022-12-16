import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MyProvider from "./Provider/MyProvider";
import Home from "./Routes/Home";
import "./index.css";
import LoginForm from "./Components/LoginForm";
import App from "./App";
import DetailCard from "./Components/DetailCard";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui


root.render(

  <MyProvider>

  <BrowserRouter>
   
   <Routes>


   <Route path="" element={<App/>}>

   <Route path="" element={< LoginForm/>} />

    <Route path="/home" element={<Home/>} />

    <Route path="" element={<LoginForm/>} />

    <Route path="dentist/matricula:id" element={<DetailCard/>} />

   </Route>


  </Routes>

  </BrowserRouter>

  </MyProvider>



);
