import "./styles.css";
import LogoCubos from "../../assets/logo.svg";
import ImagemPerfil from "../../assets/profile.jpg"
function Header() {
    return (
        <header>
            <div>
                <img className="logo-cubos" src={LogoCubos} alt={"logo cubos academy"}></img>
            </div>
            <div className="bem-vindo">
                <img className="img-perfil" src={ImagemPerfil} alt={"Imagem do perfil"}></img>
                <p>Bem vindo, Leir.</p>
            </div>
        </header>
    )
}

export default Header;