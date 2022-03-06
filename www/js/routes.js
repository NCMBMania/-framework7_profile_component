const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/profile/:objectId',
    componentUrl: './pages/profile.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
