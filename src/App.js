import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthLayout from './layouts/authLayout';
import Layout from './layouts/layout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
