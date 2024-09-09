import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '@/router';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import PlayerBar from '@/views/player/app-player-bar/playerBar';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      {/*<PlayerBar />*/}
    </div>
  );
}

export default App;
