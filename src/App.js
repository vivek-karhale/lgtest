import React, { useState } from 'react';
import './App.css';

const tvs = [
  {
      family: 's90d',
      title: '42” Class OLED Gaming TV S90D',
      price: 2999.99,
      variant: '42',
  },
  {
      family: 's90d',
      title: '48” Class OLED Gaming TV S90D',
      price: 3999.99,
      variant: '48',
  },
  {
      family: 's95d',
      title: '55" Class OLED S95D',
      price: 4999.99,
      variant: '55',
  },
  {
      family: 's95d',
      title: '65" Class OLED S95D',
      price: 5999.99,
      variant: '65',
  }
];

function App() {

  const [selectedTvs, setSelectedTvs] = useState(
    tvs.reduce((acc, tv) => {
      if (!acc[tv.family]) {
        acc[tv.family] = tv;
      }
      return acc;
    }, {})
  );

  const handleVariantClick = (family, variant) => {
    const selTV = tvs.find(
      (tv) => tv.family === family && tv.variant === variant
    );
    setSelectedTvs((prevState) => ({
      ...prevState,
      [family]: selTV
    }));
  };

  const groupedtvs = tvs.reduce((acc, tv) => {
    if (!acc[tv.family]) {
      acc[tv.family] = [];
    }
    acc[tv.family].push(tv);
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>tv Family Display</h1>

      {Object.keys(groupedtvs).map((family) => (
        <div key={family} className="tv-card">
          <div className="variants">
            {groupedtvs[family].map((tv) => (
              <button
                key={tv.variant}
                onClick={() => handleVariantClick(family, tv.variant)}
              >
                {tv.variant}"
              </button>
            ))}
          </div>

          <div className="tv-title">
            <h2>{selectedTvs[family].title}</h2>
            <h3>{selectedTvs[family].price}</h3>
          </div>

        </div>
      ))}
    </div>
  );
}

export default App;