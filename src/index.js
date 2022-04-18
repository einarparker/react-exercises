import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "Przemek"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
    <h1>Hello {name}</h1>
    </>
  </React.StrictMode>
);

