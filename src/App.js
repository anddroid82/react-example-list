import logo from './logo.svg';
import './App.css';
import List from './List';
import Actions from './Actions';

function App() {
  let left = [
    {id:1,value:"1"},
    {id:2,value:"2"},
    {id:3,value:"3"},
    {id:4,value:"4"},
  ];
  let right = [];

  return (
    <div className="App">
      <List items={left} />
      <Actions/>
      <List items={right}/>
    </div>
  );
}

export default App;
