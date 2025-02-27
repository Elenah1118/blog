import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importa los componentes dinámicamente
import HomePage from './pages/HomePage';
import HomeLoggedInPage from './pages/HomeLoggedInPage';
import ProfilePage from './pages/ProfilePage';
import WishlistPage from './pages/WishlistPage';

import '@fortawesome/fontawesome-free/css/all.min.css';
// import useWishlist from './hooks/useWishlist';
import BlogPage from './pages/BlogPage'; // Importa tu página de blog
import RegisterPage from './pages/RegisterPage';


const components = {
  HomePage,
  HomeLoggedInPage,
  ProfilePage,
  WishlistPage,
  RegisterPage,
  BlogPage,
};

function App() {
  return (
    <Router>
      <div className="main-content"> {/* Se reemplaza "p-6" por una clase más específica */}
        <Routes>
          {routes.map(({ path, component }) => {
            const Component = components[component]; // Carga dinámica del componente
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
