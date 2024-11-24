import { useRef } from 'react';
import './App.css';
//useImperativeHandle
// import CustomInpunt from './components/CustomInput';
import USeFetchHook from './components/UseFetchHook'

const API_URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  // const inputRef = useRef()

  const {data, loading, error} = USeFetchHook(API_URL)
  console.log('data == ', data)
//useImperativeHandle
  // const handleClear = () => {
  //   inputRef.current.clear()
  // }
  // const handleFocus = () => {
  //   inputRef.current.focus()
  // }
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      {loading && <div>Loading.....</div>}
      {error && <div>{error.message}</div>}
      {data && <ul>
        {data.map(ele => (
          <li key={ele.name}>{ele.name}</li>
        ))}
      </ul>}


       {/*<h1>useImperativeHandle to send child to parent data in react</h1>
      <CustomInpunt ref={inputRef}/>
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button> */}

    </div>
  );
}

export default App;
