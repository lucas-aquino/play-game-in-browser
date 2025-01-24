import './App.css'
import GameView from './components/GameView'

function App() {

  return (
    <div className='bg-slate-900 text-white h-svh flex items-center justify-center'>
      <div className='bg-red-500 h-full'>
        <GameView></GameView>
      </div>
    </div>
  )
}

export default App
