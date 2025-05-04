import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './routes/App.jsx';
import Bag from "./routes/Bag.jsx";
import Home from './routes/Home.jsx';
import myntraStore from './store/index.js';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <BrowserRouter basename="/9-myntra-clone">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="bag" element={<Bag />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

