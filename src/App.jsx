import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"

function App() {
  

  return <main>
    <div id="game-container">
      <ol id="players">
        <Player name="player 1" symbol="X"></Player>
        <Player name="player 2" symbol="O"></Player>
      </ol>
      <GameBoard></GameBoard>
    </div>

  </main>
}

export default App
