import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './scss/index.scss'
import App from './App.jsx'

import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
