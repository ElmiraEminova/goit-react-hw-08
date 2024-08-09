import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import "./reset.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
