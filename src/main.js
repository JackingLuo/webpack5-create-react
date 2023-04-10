import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import '@ant-design/plots/dist/index.css';
import './global.scss';
//埋点监控
import './data-monitor';

const root = createRoot(document.getElementById('app'));

root.render(<App />);
