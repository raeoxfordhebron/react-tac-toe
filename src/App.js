import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading"
import Header from "./components/Header"
import Player from "./components/Player"
import Board from "./components/Board"

function App(){
  return (<>
  <Header/>
  <Player whichPlayer='X'/>
  <Player whichPlayer='O'/>
  <Board/>
  </>)
}

export default App;
