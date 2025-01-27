// src/Components/Footer/Footer.js

import React from 'react';
import './Footer.css';
import logo from '../../assets/images/Makeup.png';
import { Link } from 'react-router-dom'; // Para navegación interna

function Footer() {
    return (
        <footer className="footer">
            {/* Contenedor principal del contenido del footer */}
            <div className="footer-content">
                
                {/* Sección izquierda del footer: logo, descripción, redes sociales */}
                <section className="footer-left">
                    {/* Logo de la empresa */}
                    <img src={logo} alt="Logo" className="footer-logo" />
                    
                    {/* Descripción breve del blog */}
                    <p className="footer-description">
                        Bienvenido a nuestro blog de maquillaje, donde compartimos tips, tutoriales y las últimas tendencias en belleza.
                    </p>
                    
                    {/* Íconos de redes sociales */}
                    <nav className="social-icons" aria-label="Redes Sociales">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </nav>
                </section>

                {/* Sección derecha del footer: enlaces adicionales */}
                <section className="footer-right">
                    <nav className="footer-links" aria-label="Enlaces del Footer">
                        <Link to="/">Inicio</Link>
                        <Link to="/about">Sobre nosotros</Link>
                        <Link to="/contact">Contacto</Link>
                        <Link to="/legal">Aviso legal</Link>
                    </nav>
                </section>
            </div>

            {/* Texto del copyright debajo de todo */}
            <div className="footer-bottom">
                © 2024 MakeupGlow.com
            </div>
        </footer>
    );
}

export default Footer;
