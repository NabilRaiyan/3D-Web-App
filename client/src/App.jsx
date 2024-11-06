// until 1 hr 26 min
// link: https://www.youtube.com/watch?v=ZqEa8fTxypQ

import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
// main app function

function App() {

  return (
    <main className='app transition-all ease-in'> 
        <Home />
        <Canvas />
        <Customizer />   
    </main>
  )
}

export default App
