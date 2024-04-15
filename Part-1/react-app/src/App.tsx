
import reactLogo from './assets/img_1.png'

import './App.css'

import ColoredUserPic from './components/ColoredUserpic.tsx'

function App() {


  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'} }>
          <h1>Первая часть </h1>
          <ColoredUserPic
              src={reactLogo}
              size={150}
              margin={4}
              backgroundColor="red"
              colors={['green', 'blue']}
              hoverColors={['blue', 'green']}
              colorWidth={6}
          />
      </div>
  )
}

export default App
