import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    // O className abaixo garante um fundo cinza claro em toda a tela por padrão
    <div className="min-h-screen bg-gray-50">
      <Dashboard />
    </div>
  );
}

export default App;