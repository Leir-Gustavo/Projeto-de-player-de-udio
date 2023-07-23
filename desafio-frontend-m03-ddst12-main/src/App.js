import './App.css';
import Header from "./components/Header"
import Cards from "./components/Cards"
import musics from './musics';
import { useState, useRef } from "react";
import Controls from './components/Controls';


function App() {
  const audioRef = useRef(null)
  const [stateMusics, setStateMusics] = useState([...musics]);
  const [stateMusic, setStateMusic] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container">
      <Header></Header>
      <div className='container-main'>
        <div className='card-titulo'>
          <div className="titulo">
            The best playlist
          </div>
          <div className='border'></div>
          <div className='container-cards'>
            {stateMusics.map((music) => (
              <Cards
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                setStateMusic={setStateMusic}
                key={music.id}
                music={music}>
              </Cards>
            ))}
          </div>

        </div>


      </div>
      <div className='footer'>
        <Controls
          setStateMusic={setStateMusic}
          musics={musics}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          music={stateMusic}
          audioRef={audioRef}>
        </Controls>
      </div>
    </div>

  );
}

export default App;

