import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://app.aminos.ai/js/chat_plugin.js';
    script.dataset.botId = '31441';
    script.async = true;
    
    // Append to document body
    document.body.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
}