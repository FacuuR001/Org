import "./MiOrg.css"

const MiOrg = (props) => {

    /*
    Como definir un estado:
    const [nombreVariable, funcionARealizar] = useState(valorInicial);
    

    const [mostrar, actualizarMostrar] = useState(true);
    
    const manejarClick = () => {
        console.log("mostrat/ocultar", mostrar);
        actualizarMostrar(!mostrar)
    }
    */

    return (
        <section className="org-section">
            <h3 className="titulo">Mi Organización</h3>
            <img onClick={props.cambiarMostrar} src="/img/btn-añadir.png" alt="añadir-personal" />
        </section>
    );
}

export default MiOrg;