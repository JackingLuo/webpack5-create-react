import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './global.scss';

const root = createRoot(document.getElementById('app'));

root.render(<App />);
