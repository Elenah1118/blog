// src/Components/ChatIcon/ChatIcon.js
import React from 'react';
import './ChatIcon.css';
import useChat from '../../hooks/useChat'; // Importa el hook directamente en el componente

const ChatIcon = () => {
  const { isChatOpen, toggleChat } = useChat();

  return (
    <>
      <div className="chat-icon" onClick={toggleChat}>
        {/* SVG o ícono del chat */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 15s6-3.686 6-7.5S10.418 0 8 0 2 3.5 2 7.5 8 15 8 15zm0-1.011C8.5 12.275 12 9.415 12 7.5 12 4.42 9.613 1 8 1S4 4.42 4 7.5c0 1.915 3.5 4.775 4 6.489z" />
          <path d="M5.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0 .5.5 0 0 1-.5.5z" />
        </svg>
      </div>
      {isChatOpen && <div className="chat-widget">Chat en vivo</div>} {/* Componente de chat */}
    </>
  );
};

export default ChatIcon;
