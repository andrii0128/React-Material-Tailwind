import React from 'react';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import { Auth } from './components/auth/Auth';
import NotFound from './components/layout/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/*" element={<NotFound />} />
       </Routes>
     </BrowserRouter>
    </Provider>
  )
}

export default App;