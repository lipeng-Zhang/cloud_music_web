import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '@/router/index';

import AppHeader from './components/App-header';
import AppFooter from './components/App-footer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <AppFooter />
    </div>
  );
}

export default App;
