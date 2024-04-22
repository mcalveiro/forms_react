import React from 'react';
import ReactDOM from 'react-dom';
import '././styles/css/bootstrap.min.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';

// Otros imports y código de tu aplicación...

import CasoDeUsoFormulario from './CasoDeUsoFormulario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CasoDeUsoFormulario /> {/* Agrega el componente aquí */}
  </React.StrictMode>
);

// Resto del código...
reportWebVitals();
