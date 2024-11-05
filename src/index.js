import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'; // Asegúrate de que esta sea la ruta correcta a tu store
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  </Provider>
);



