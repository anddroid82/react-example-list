import logo from './logo.svg';
import './App.css';
import List from './List';
import Actions from './Actions';
import { useState } from 'react';

function App() {
  let [left,setLeft] = useState([]);
  let [right,setRight] = useState([
    {id:1,value:"1"},
    {id:2,value:"2"},
    {id:3,value:"3"},
    {id:4,value:"4"},
  ]);
  const [leftSelectedItems,setLeftSelectedItems] = useState([]);
  const [rightSelectedItems,setRightSelectedItems] = useState([]);

  const rightClick = () => {
    let newRightElements = left.filter(l => leftSelectedItems.includes(l.value));
    setRight([...right,...newRightElements]);
    let newLeftArray = left.filter( l => !leftSelectedItems.includes(l.value));
    setLeft(newLeftArray);
    setLeftSelectedItems([]);
  }

  const leftClick = () => {
    let newLeftElements = right.filter( r => rightSelectedItems.includes(r.value));
    setLeft([...left,...newLeftElements]);
    let newRightArray = right.filter( r => !rightSelectedItems.includes(r.value));
    setRight(newRightArray);
    setRightSelectedItems([]);
  }

  return (
    <div className="container">
      <List allItems={left} selectedItems={leftSelectedItems} setSelectedItems={setLeftSelectedItems}  />
      <Actions leftClicked={leftClick} rightClicked={rightClick} />
      <List allItems={right} selectedItems={rightSelectedItems} setSelectedItems={setRightSelectedItems} />
    </div>
  );
}

export default App;
