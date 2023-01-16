import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// import Discover from '@/pages/Discover/index';
// import Mine from '@/pages/Mine/index';
// import Focus from '@/pages/Focus/index';
// import Download from '@/pages/Download/index';

const Discover = lazy(() => import('@/pages/Discover/index'));
const Recommend = lazy(() => import('@/pages/Discover/Recommend/index'));
const Song = lazy(() => import('@/pages/Discover/Song/index'));
const Ranking = lazy(() => import('@/pages/Discover/Ranking/index'));
const Djradio = lazy(() => import('@/pages/Discover/Djradio/index'));
const Singer = lazy(() => import('@/pages/Discover/Singer/index'));
const Album = lazy(() => import('@/pages/Discover/Album/index'));

const Mine = lazy(() => import('@/pages/Mine/index'));
const Focus = lazy(() => import('@/pages/Focus/index'));
const Download = lazy(() => import('@/pages/Download/index'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/Ranking',
        element: <Ranking />
      },
      {
        path: '/discover/Song',
        element: <Song />
      },
      {
        path: '/discover/Djradio',
        element: <Djradio />
      },
      {
        path: '/discover/Singer',
        element: <Singer />
      },
      {
        path: '/discover/Album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
];

export default routes;
