import { useState } from 'react';
import ColorsList from './components/ColorsList';

function App() {
  const [color,setColor] = useState('#000');

  function handleColorChange(newColor){
    setColor(newColor);
  }

  return (
    <div className="w-screen h-screen" style={{ backgroundColor : `${color}` }}>
      <ColorsList callback={handleColorChange} />
    </div>
  )
}

export default App;
