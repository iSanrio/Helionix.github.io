import { useState } from 'react';
import QrScanner from './components/QrScanner';
import ElementInfo from './components/ElementInfo';
import { elements } from './mock/elements';
import { predictElement } from './utils/classifier';

export default function App() {
  const [currentElement, setCurrentElement] = useState(null);

  const handleScan = (data) => {
    const elementId = parseInt(data);
    const element = elements[elementId];
    if (element) {
      const classified = predictElement(element);
      setCurrentElement(classified);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Elemental Scanner</h1>
        <p className="text-gray-600">Escanea códigos QR de elementos químicos</p>
      </header>

      <QrScanner onScan={handleScan} />
      <ElementInfo element={currentElement} />
    </div>
  );
}

// DONE