import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'
import "./Equipo.css"

const Equipo = (props) => {
    //Distintas formas de aplicar los estilos
    //Destructuracion
    const {colorPrimario, titulo, id} = props.datos; //forma 1 destructurado
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6) //forma 2
    }

    const estiloTitulo = { borderColor: colorPrimario } //forma 3

    return (
        <> 
            { colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    <input 
                        type="color" 
                        className="input-color"
                        value={ colorPrimario }
                        onChange={ e => {
                            actualizarColor(e.target.value, id);
                        }}
                    />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, index) => <Colaborador 
                        key={index} 
                        datos={colaborador} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            </section>
            } 
        </>
    );
}

export default Equipo;