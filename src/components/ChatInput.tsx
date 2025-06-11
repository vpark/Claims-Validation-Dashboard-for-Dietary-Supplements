import React, { useState } from 'react';
export const ChatInput = ({
  onSendMessage
}) => {
  const [message, setMessage] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  return <div className="p-4 bg-white border-t">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Send a message..." className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6A36FC]" />
        <button type="submit" className="p-3 rounded-lg bg-white border hover:bg-gray-50" disabled={!message.trim()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={message.trim() ? 'text-[#6A36FC]' : 'text-gray-400'}>
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
        <button type="button" className="p-3 rounded-lg bg-white border hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <path d="M12 18v-6" />
            <path d="M8 18v-1" />
            <path d="M16 18v-3" />
            <rect width="20" height="12" x="2" y="6" rx="2" />
          </svg>
        </button>
      </form>
    </div>;
};