import Loadable from 'react-loadable';

const loading = () => null;

const HomePage = Loadable({
  loader: () => import('./home-page/HomePage' /* webpackChunkName: "HomePage" */),
  loading,
});

const NotFound = Loadable({
  loader: () => import('./not-found/NotFound' /* webpackChunkName: "NotFound" */),
  loading,
});

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    component: NotFound,
  },
];
