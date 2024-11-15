// src/pages/ProfilePage.js
import React from 'react';
import Profile from '../Components/Profile/Profile'; // Importa el componente de perfil

const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <h1>Mi Perfil</h1>
      <Profile /> {/* Renderiza el componente de perfil */}
    </div>
  );
};

export default ProfilePage;
