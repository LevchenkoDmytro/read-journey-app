import { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Fallback from './components/Fallback';
import setUpInterceptors from './api/helpers/interceptors';
import store from './redux/store';
import './styles/fonts/fonts.css';

const RootLayout = lazy(() => import('./components/Loyouts/RootLayout'));
const AuthLayout = lazy(() => import('./components/Loyouts/AuthLoyout'));
const Home = lazy(() => import('./pages/Home'));
const Library = lazy(() => import('./pages/Library'));
const Reading = lazy(() => import('./pages/Reading'));
const SigninForm = lazy(() => import('./components/Forms/SigninForm'));
const SignupForm = lazy(() => import('./components/Forms/SignupForm'));

import './styles/globalStyles.ts';

const App = () => {
  useEffect(() => {
    setUpInterceptors(store);
  }, []);

  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={'/sign-up'} element={<SignupForm />} />
          <Route path={'/sign-in'} element={<SigninForm />} />
        </Route>

        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path={'/library'} element={<Library />} />
          <Route path={'/reading/:id'} element={<Reading />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
