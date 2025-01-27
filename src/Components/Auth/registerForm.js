// src/Components/Auth/RegisterForm.js
import React, { useState } from 'react';
import './registerForm.css';

const RegisterForm = ({ userType = 'general' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
