import "./styles.css";
import ImagemPlay from "../../assets/play.svg"
import ImagemPause from "../../assets/pause.svg"
import ImagemStop from "../../assets/stop.svg"
import ImagemPrevious from "../../assets/previous.svg"
import ImagemNext from "../../assets/next.svg"

function Controls({ audioRef, music, musics, setIsPlaying, isPlaying, setStateMusic }) {

    function handleStop() {
        audioRef.current.pause()
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;

        setIsPlaying(!prevValue);

        if (!prevValue) {
            music = musics[0];
            setStateMusic(music)
            setTimeout(() => {
                audioRef.current.play()
            }, "200")

        } else {
            audioRef.current.pause()
        }
    }

    const prevNextMusic = (type = "next") => {
        let index = music.id === undefined ? 0 : music.id;
        let bound = musics.length;
        setIsPlaying(true);
        if (type === "next") {
            if (index + 1 > bound) {
                index = 1;
            } else {
                index++;
            }
        } else {
            if (index - 1 < 1) {
                index = bound;
            } else {
                index--;
            }
        }
        music = musics[index - 1];
        setStateMusic(music)
        setTimeout(() => {
            audioRef.current.play()
        }, "200")

    }

    return (
        <>
            <div className="nome">
                <div className="now-playing-title">
                    {music.title}
                </div>
                <div className="now-playing-artist">
                    {music.artist}
                </div>

            </div>
            <div className="control-bar">
                <div className="button-reset button-style">
                    <div>
                        <button className="button-reset button-stop" onClick={() => handleStop()}>
                            <img src={ImagemStop} alt={"imagem com o botão de stop, que executa a função de interromper a música e voltar ela ao seu ponto inicial"}></img>
                        </button>
                    </div>

                    <div>
                        <button className="button-reset button-previous" onClick={() => prevNextMusic("prev")}>
                            <img src={ImagemPrevious} alt={"imagem com o botão de retroceder, que executa a função de selecionar  a música anterior e voltar ela ao seu ponto inicial"}></img>
                        </button>
                    </div>

                    <div>
                        <button className="button-reset button-play" onClick={togglePlayPause}>
                            {isPlaying ? <img src={ImagemPause}></img> : <img src={ImagemPlay}></img>}
                            <audio src={music.url} ref={audioRef}></audio>
                        </button>
                    </div>

                    <div>
                        <button className="button-reset button-next" onClick={() => prevNextMusic()}>
                            <img src={ImagemNext} alt={"imagem com o botão de next, que executa a função de avançar para a próxima música e voltar ela ao seu ponto inicial"}></img>
                        </button>
                    </div>

                    <div>
                    </div>
                </div>
                <div className="timer">
                    <div className="current-time">1:45</div>
                    <div className="progress-bar">
                        <div className="progressed"></div>
                        <div className="ellipse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <circle cx="5.5" cy="5.5" r="5.5" fill="#E5007B" />
                            </svg>
                        </div>
                    </div>
                    <div className="duration">3:34</div>
                </div>
            </div>

        </>
    )
}

export default Controls;
