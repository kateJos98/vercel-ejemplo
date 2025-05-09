'use client';

import { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState('');
  const [animal, setAnimal] = useState('');
  const [fruta, setFruta] = useState('');

  return (
    <main style={{ padding: 20 }}>
      <h1>3 Selects lado a lado</h1>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div>
          <label>Color:<br /></label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">-- Elige --</option>
            <option value="rojo">Rojo</option>
            <option value="verde">Verde</option>
            <option value="azul">Azul</option>
          </select>
        </div>

        <div>
          <label>Animal:<br /></label>
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            <option value="">-- Elige --</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="pájaro">Pájaro</option>
          </select>
        </div>

        <div>
          <label>Fruta:<br /></label>
          <select value={fruta} onChange={(e) => setFruta(e.target.value)}>
            <option value="">-- Elige --</option>
            <option value="manzana">Manzana</option>
            <option value="banana">Banana</option>
            <option value="naranja">Naranja</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <p><strong>Color seleccionado:</strong> {color}</p>
        <p><strong>Animal seleccionado:</strong> {animal}</p>
        <p><strong>Fruta seleccionada:</strong> {fruta}</p>
      </div>
    </main>
  );
}
