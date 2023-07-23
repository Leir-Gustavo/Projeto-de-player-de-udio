import "./styles.css";


function Cards({ music, setStateMusic, audioRef, setIsPlaying }) {
    return (
        <div className="container-card"
            onClick={() => {
                setIsPlaying(true)
                setStateMusic(music)
                console.log(music)
                setTimeout(() => {
                    audioRef.current.play()
                }, "200")
            }}
        >
            <img
                className="card"
                src={music.cover}
                alt="card"
            >
            </img>
            <h1>{music.title}</h1>
            <p>{music.description}</p>
        </div>
    )
}

export default Cards;