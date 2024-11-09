// src/hooks/useChat.js
import { useState } from 'react';

const useChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return {
    isChatOpen,
    toggleChat,
  };
};

export default useChat;
