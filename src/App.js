import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LiveData from './components/LiveData/LiveData';

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('https://data.covid19india.org/data.json')
    .then(response => response.json())
    .then(data => setDatas(data.statewise));  
  });

  return (
    <div className='homeContent'>
    <Header></Header>
    <h1>Live Covid-19 Update Of India</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, assumenda totam impedit autem minus sapiente ab reprehenderit mollitia voluptates animi dignissimos sequi commodi neque debitis qui id! Natus, ipsa obcaecati!</p>
    <ul>
      {
        datas.map(data => <LiveData key={data.state} data={data}></LiveData>)
      }
    </ul>
    </div>
  );
}

export default App;
