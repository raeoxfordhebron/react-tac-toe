import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading"
import Header from "./components/Header"
import Player from "./components/Player"
import Board from "./components/Board"
import Square from "./components/Square"
import "./styles.css"

function App(){
  return (<>
  <Header/>
  <Player whichPlayer='X'/>
  <Player whichPlayer='O'/>
  <Board/>

  </>)
}

export default App;
