'use client';

import { useState } from 'react';

export default function PortalDistribuido() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] max-w-2xl w-full p-10 border border-gray-200">
        
        {/* Título principal */}
        <h1 className="text-5xl font-extrabold fond-semibold text-center text-gray-900 mb-8">
          🌐 Distributed Portal
        </h1>

        {/* Sección de información */}
        <div className="bg-gradient-to-br from-indigo-100 to-white border border-indigo-200 rounded-2xl p-6 transition-all hover:shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">🛠️ Welcome to Vercel</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            You are at the entrance of the Frontend, deployed thanks to <strong>Vercel</strong>, 
            a platform specialized in bringing modern web interfaces directly to the user's browser.<br/>
            <br/>
            Vercel is characterized as a platform focused on the rapid and efficient deployment of front-end applications,
            especially those developed with frameworks such as Next.js, React, Vue, among others.
            It stands out for its ease of use, allowing deployment directly from Git repositories with minimal configuration,
            creating automatic preview environments for each change. 
           <br/>Thanks to your <em>CDN global</em>, ensures automatic scalability without configuration and a smooth, agile development experience.
          </p>
        </div>
      </div>
    </main>
  );
}

