import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Home from './pages/Home';
import RootLayout from './_root/RootLayout/RootLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLoyout';
import Library from './pages/Library';
import Reading from './pages/Reading';
import './style/globalStyles.ts';

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/reading :id" element={<Reading />} />
      </Route>
    </Routes>
  );
};

export default App;
