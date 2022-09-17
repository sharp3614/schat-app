import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ChatContextProvider from './context/chat';
import { AuthContextProvider } from './context/useAuth';
import AuthLayout from './layouts/authLayout';
import Layout from './layouts/layout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Setting from './pages/setting';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/setting' element={<Setting />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Routes>
        </div>
        <ToastContainer />
      </ChatContextProvider>
    </AuthContextProvider>
  );
}

export default App;
