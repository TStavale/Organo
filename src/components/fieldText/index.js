import './FieldText.css'

const FieldText = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoValor = (evento) => {
        props.aoAlterado (evento.target.value)
    }

    return (
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoValor} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default FieldText