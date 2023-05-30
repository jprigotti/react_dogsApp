import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DogsView from './views/DogsView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DogsView />
  </React.StrictMode>,
)
