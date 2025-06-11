import React, { useState, useEffect, useRef } from 'react';
// Importación directa del archivo minificado para evitar problemas de resolución de módulos
// Asegúrate de que 'html5-qrcode' esté instalado con 'npm install html5-qrcode'
import { Html5QrcodeScanner } from 'html5-qrcode/minified/html5-qrcode.min.js'; 

const QrScanner = ({ onScan }) => {
  const scannerRef = useRef(null);
  const [status, setStatus] = useState('iniciando');
  const [message, setMessage] = useState('Iniciando escáner...');
  const [lastScanned, setLastScanned] = useState(null);

  useEffect(() => {
    // Solo inicializar el escáner una vez
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "qr-reader", // ID del elemento donde se renderizará el escáner
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false // Deshabilitar el escaneo de archivos
      );

      const onScanSuccess = (decodedText) => {
        const elementNumber = parseInt(decodedText);
        if (!isNaN(elementNumber) && elementNumber >= 1 && elementNumber <= 118) {
          if (lastScanned !== elementNumber) {
            setLastScanned(elementNumber);
            setStatus('encontrado');
            setMessage(`Elemento ${elementNumber} detectado`);
            onScan(elementNumber.toString());
            
            // Pausar y reanudar para evitar múltiples detecciones rápidas
            scannerRef.current.pause();
            setTimeout(() => {
              scannerRef.current.resume();
              setStatus('escaneando');
              setMessage('Enfoque el código QR del elemento');
              setLastScanned(null);
            }, 2000);
          }
        } else {
          setStatus('error');
          setMessage('QR inválido: No es un número atómico (1-118)');
        }
      };

      const onScanError = (errorMessage) => {
        // Solo mostrar errores críticos, no los de "no QR detectado"
        if (errorMessage.includes("No cameras found") || errorMessage.includes("Permission denied")) {
          setStatus('error');
          setMessage('Error: No se encontraron cámaras o no hay permisos.');
        } else if (status !== 'error') {
          // Mantener el mensaje de escaneo si no hay un error crítico
          setStatus('escaneando');
          setMessage('Enfoque el código QR del elemento');
        }
      };

      scannerRef.current.render(onScanSuccess, onScanError);
      setStatus('escaneando');
      setMessage('Enfoque el código QR del elemento');
    }

    // Función de limpieza al desmontar el componente
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(error => {
          console.error("Error al limpiar html5QrcodeScanner", error);
        });
        scannerRef.current = null;
      }
    };
  }, [onScan, lastScanned, status]); // Dependencias del useEffect

  const getStatusColor = () => {
    switch(status) {
      case 'encontrado': return 'bg-green-100 text-green-800 border-green-300';
      case 'error': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="relative aspect-square bg-black rounded-xl overflow-hidden border-2 border-gray-200">
        {/* Este div es donde html5-qrcode renderizará el video y el escáner */}
        <div id="qr-reader" className="w-full h-full flex items-center justify-center">
          {/* El escáner se renderizará aquí */}
        </div>
        
        {status === 'escaneando' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border-4 border-white border-opacity-70 rounded-lg w-64 h-64 animate-pulse"></div>
          </div>
        )}

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className={`px-4 py-2 rounded-full ${getStatusColor()} border-2 backdrop-blur-sm`}>
            <p className="font-medium text-center">{message}</p>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center">
        {status === 'escaneando' && (
          <p>El código debe contener solo el número atómico (1-118)</p>
        )}
        {status === 'error' && (
          <p>Verifica los permisos de la cámara o el formato del QR.</p>
        )}
      </div>
    </div>
  );
};

export default QrScanner;