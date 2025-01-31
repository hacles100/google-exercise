import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import All from './pages/all/All';
import Images from './pages/images/Images';
import Layout from './pages/layout/Layout';
import Videos from './pages/videos/Videos';
import reportWebVitals from './reportWebVitals';
import Counter from './pages/counter/Counter';
import NewPage from './pages/newPage/NewPage';
import LoginPage from './pages/loginPage/LoginPage';
import TablePage from './pages/TablePage/TablePage';
import TextoPage from './pages/TextoPage/TextoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="counter" element={<Counter />} />
          <Route path="newPage" element={<NewPage />} />
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="TablePage" element={<TablePage />} />
          <Route path="TextoPage" element={<TextoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
