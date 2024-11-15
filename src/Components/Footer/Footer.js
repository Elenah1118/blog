// Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../assets/images/Makeup.png';

function Footer() {
    return (
        <footer className="footer">
            {/* Contenedor principal del contenido del footer */}
            <div className="footer-content">
                
                {/* Sección izquierda del footer: logo, descripción, redes sociales */}
                <div className="footer-left">
                    {/* Logo de la empresa */}
                    <img src={logo} alt="Logo" className="footer-logo" />
                    
                    {/* Descripción breve del blog */}
                    <p className="footer-description">
                        Bienvenido a nuestro blog de maquillaje, donde compartimos tips, tutoriales y las últimas tendencias en belleza.
                    </p>
                    
                    {/* Íconos de redes sociales */}
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Sección derecha del footer: enlaces adicionales */}
                <div className="footer-right">
                    <div className="footer-links">
                        <a href="#home">Inicio</a>
                        <a href="#about">Sobre nosotros</a>
                        <a href="#contact">Contacto</a>
                        <a href="#legal">Aviso legal</a>
                    </div>
                </div>
            </div>

            {/* Texto del copyright debajo de todo */}
            <div className="footer-bottom">
                © 2024 MakeupGlow.com
            </div>
        </footer>
    );
}

export default Footer;

