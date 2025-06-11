import React from 'react';
import { ChatInterface } from './components/ChatInterface';
import { Header } from './components/Header';
import { Disclaimer } from './components/Disclaimer';
export function App() {
  return <div className="flex flex-col w-full h-screen bg-gray-50">
      <Header />
      <Disclaimer />
      <div className="w-full max-w-[768px] mx-auto flex flex-col flex-1 overflow-hidden">
        <ChatInterface />
      </div>
    </div>;
}