import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import About from './routes/about/about.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
