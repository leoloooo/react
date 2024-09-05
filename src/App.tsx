import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '@/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import PlayerBar from '@/views/player/app-player-bar/playerBar';

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => ({
    count: state.counter.counter
  }));
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <PlayerBar />
    </div>
  );
}

export default App;
