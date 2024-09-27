import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Data from './Data.json';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    // Simulate a data fetch
    const fetchData = () => {
      // For the purpose of this example, we're using the static `Data` imported above.
      // You could replace this with a fetch from an API if needed.
      setState(Data);
    };

    fetchData();
    // Optional: Add an empty dependency array to only run on mount.
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {state.map((item) => (
          <div key={item.id} className='col-md-4 mb-4' align="center">
            <div className="card" style={{ width: '18rem' }}>
              <img src={item.pic} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
