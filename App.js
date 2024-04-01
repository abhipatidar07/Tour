import './App.css';
import { useState } from 'react';
import data from './components/data';
import Tours from './components/Tours';

function App() {
  const [tours, setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);
  }
  if(tours.length===0){
    return(
      <div className='refresh'>
        <h3 className='ntl'>No Tour Left</h3>
        <button className='btn2' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className='App'>
    <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
