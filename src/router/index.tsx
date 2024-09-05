//配置所有路由
import { Navigate, RouteObject } from 'react-router-dom';
//懒加载
import { lazy } from 'react';
// import Recommend from '@/views/discover/c-views/recommend/recommend'
// import Albums from '@/views/discover/c-views/albums/albums'
// import Djradio from '@/views/discover/c-views/djradio/djradio'
// import Ranking from '@/views/discover/c-views/ranking/ranking'
// import Singer from '@/views/discover/c-views/singer/singer'
// import Songs from '@/views/discover/c-views/songs/songs'
// import My from '@/views/my';
// import Focus from '@/views/focus';
// import Download from '@/views/download';
// import Discover from '@/views/discover'
const Discover = lazy(() => import('@/views/discover'));
const My = lazy(() => import('@/views/my'));
const Focus = lazy(() => import('@/views/focus'));
const Download = lazy(() => import('@/views/download'));
const Recommend = lazy(() => import('@/views/discover/c-views/recommend/recommend'));
const Albums = lazy(() => import('@/views/discover/c-views/albums/albums'));
const Djradio = lazy(() => import('@/views/discover/c-views/djradio/djradio'));
const Ranking = lazy(() => import('@/views/discover/c-views/ranking/ranking'));
const Singer = lazy(() => import('@/views/discover/c-views/singer/singer'));
const Songs = lazy(() => import('@/views/discover/c-views/songs/songs'));

export const routes: RouteObject[] = [
  {
    path: '/',
    //主页
    element: <Navigate to={'/discover'}></Navigate>
  },
  {
    path: '/discover',
    element: <Discover></Discover>, // import { Discover } from '@/views/discover'
    //discover下的子路由
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover'}></Navigate>
      },
      {
        path: '/discover/recommend',
        element: <Recommend></Recommend>
      },
      {
        path: '/discover/album',
        element: <Albums></Albums>
      },
      {
        path: '/discover/djradio',
        element: <Djradio></Djradio>
      },
      {
        path: '/discover/ranking',
        element: <Ranking></Ranking>
      },
      {
        path: '/discover/singer',
        element: <Singer></Singer>
      },
      {
        path: '/discover/songs',
        element: <Songs></Songs>
      }
    ]
  },
  {
    path: '/my',
    element: <My></My>
  },
  {
    path: '/focus',
    element: <Focus></Focus>
  },
  {
    path: '/download',
    element: <Download></Download>
  }
];
