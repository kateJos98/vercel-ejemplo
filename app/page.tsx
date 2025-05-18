'use client';

import { useState } from 'react';

export default function PortalDistribuido() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] max-w-2xl w-full p-10 border border-gray-200">
        
        {/* Título principal */}
        <h1 className="text-5xl font-extrabold fond-semibold text-center text-gray-900 mb-8">
          🌐 Portal Distribuido
        </h1>

        {/* Sección de información */}
        <div className="bg-gradient-to-br from-indigo-100 to-white border border-indigo-200 rounded-2xl p-6 transition-all hover:shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">🛠️ Bienvenido a Vercel</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Te encuentras en la entrada del Frontend, desplegado gracias a <strong>Vercel</strong>, 
            una plataforma especializada en llevar interfaces web modernas directamente al navegador del usuario.<br/>
            <br/>
           Vercel se caracteriza por ser una plataforma enfocada en el despliegue rápido y eficiente de aplicaciones frontend, 
           especialmente aquellas desarrolladas con frameworks como Next.js, React, Vue, entre otras. 
           Destaca por su facilidad de uso, ya que permite desplegar directamente desde repositorios Git con configuración mínima, 
           creando entornos de previsualización automáticos para cada cambio. 
           <br/>Gracias a su <em>CDN global</em>, garantiza escalabilidad automática sin configuración y una experiencia de desarrollo ágil y fluida.
          </p>
        </div>
      </div>
    </main>
  );
}

