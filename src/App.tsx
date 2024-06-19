import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Fallback from './components/Fallback';
import setUpInterceptors from './api/helpers/interceptors';
import { useStore } from 'react-redux';

const RootLayout = lazy(() => import('./_root/RootLayout'));
const AuthLayout = lazy(() => import('./_auth/AuthLoyout'));
const Home = lazy(() => import('./pages/Home'));
const Library = lazy(() => import('./pages/Library'));
const Reading = lazy(() => import('./pages/Reading'));
const SigninForm = lazy(() => import('./_auth/forms/SigninForm'));
const SignupForm = lazy(() => import('./_auth/forms/SignupForm'));

import './style/globalStyles.ts';

const App = () => {
  const store = useStore();
  setUpInterceptors(store);

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
          <Route path={'/reading :id'} element={<Reading />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
