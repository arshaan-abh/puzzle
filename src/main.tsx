import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // I (Arshaan) had to remove the strictMode because it would call the set state methods twice. Which in the setMatrix case, it would sabotage its functionality (Since the second run would undo the first).
  <App />
);
