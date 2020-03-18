import React, { useState, useEffect } from 'react';

import DevForm from '../../components/DevForm';
import DevItem from '../../components/DevItem';

import api from '../../services/api';

import './styles.css';

function Main() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    };

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  };

  return (
    <div id="app">
      <aside>
        <strong>DevRadar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Main;
