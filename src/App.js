import { useRef } from 'react';
import './App.css';
import CustomInpunt from './components/CustomInput';
function App() {
  const inputRef = useRef()
  
  const handleClear = () => {
    inputRef.current.clear()
  }
  const handleFocus = () => {
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <h1>useImperativeHandle to send child to parent data in react</h1>
      <CustomInpunt ref={inputRef}/>
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
