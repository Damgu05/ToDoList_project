import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div>
            <h2>Hello React depuis Laravel 11 🚀</h2>
        </div>
    );
}

const rootElement = document.getElementById('react-root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
