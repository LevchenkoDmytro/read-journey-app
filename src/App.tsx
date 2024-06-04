import './App.css';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Home from './pages/Home';
import RootLayout from './components/RootLayout';
import SigninForm from './components/SigninForm';
import SingupForm from './components/SingupForm';
import AuthLayout from './components/AuthLayout';
import Library from './pages/Library';
import Reading from './pages/Reading';

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SingupForm />} />
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
