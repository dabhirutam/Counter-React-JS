import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Counter from './componant/counter-com/Counter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
  </StrictMode>
)