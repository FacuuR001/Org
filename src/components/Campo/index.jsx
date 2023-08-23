import "./Campo.css"

const Campo = (props) => {

    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value);
    }

    const placeholderModificado = `${props.placeholder}...`

    
    const { type = "text" } = props;

    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input 
            placeholder={placeholderModificado} 
            type={type}
            required={props.required}
            value={props.valor}
            onChange={manejarCambios}
        />
    </div>
}

export default Campo;

