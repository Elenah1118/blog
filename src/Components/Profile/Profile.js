// src/Components/Profile/Profile.js
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Estados locales para la información del perfil
  const [name, setName] = useState('Nombre de Usuario');
  const [email, setEmail] = useState('usuario@ejemplo.com');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  // Maneja la carga de una nueva imagen de perfil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Maneja la actualización de la información del perfil
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Perfil actualizado con éxito');
  };

  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-image">
          <img src={profileImage || 'ruta/de/imagen/por/defecto.jpg'} alt="Perfil" />
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="profile-info">
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="button">Actualizar Perfil</button>
        <button type="button" className="button">Cambiar Contraseña</button>
      </form>
    </div>
  );
};

export default Profile;
