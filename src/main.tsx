import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './styles/index.scss';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
