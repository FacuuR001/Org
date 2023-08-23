import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {

    const {nombre, puesto, foto, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;

    return (
        <div className="colaborador">
            <AiFillCloseCircle 
                onClick={() => eliminarColaborador(id)}
                className="eliminar"
            />
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={foto} alt={nombre} />
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                    {fav ? 
                        <AiFillHeart 
                            className="icon-pointer" 
                            color="#F00" 
                            onClick={() => like(id)}
                        /> 
                    : 
                        <AiOutlineHeart 
                            className="icon-pointer"
                            onClick={() => like(id)}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default Colaborador;