import { useState } from 'react';
import './App.css';
import SearchItem from './SearchItem';
import Content from './Content';
function App() {
  const [colorval, setColor] = useState("")
  const [hexValue, setHexValue] = useState("")
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div>
      <Content colorval={colorval} hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <SearchItem colorval={colorval} setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );

}

export default App;
