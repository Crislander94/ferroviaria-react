import React, {useState} from 'react';

const FormularioEquipos = () => {
    const [inputPotencia, cambiarInputPotencia] = useState('');
    const [inputMarca, cambiarMarca] = useState('');
    const [inputKms, cambiarKms] = useState('');
    const [selectCat, cambiarCat] = useState('LOCOMOTORAS');
    const [selectCli, cambiarCli] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const datos = {
            _PotenciaMotor: inputPotencia,
            _Categoria: selectCat,
            _KmRecorridos: inputKms
        };

        if(selectCat === 'LOCOMOTORAS') datos._Marca = inputMarca;
        if(selectCat === 'COCHE-MOTOR') datos._Climatizado = (selectCli === 'No') ? false : true;

        fetch('http://localhost:8080/api/equipos/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            const {equipo, errors} = respuestaJson;
            if(errors) return errors.forEach( ({msg, param}) => console.log(msg, 'Param: ', param));

            console.log(equipo);
            alert('Exito!!');
            cambiarInputPotencia('');
            cambiarMarca('');
            cambiarKms('');
        })
        .catch(error => console.error(error));
    }

    const handleInput = (e, input = '') => {
        switch(input){
            case 'potencia':
                cambiarInputPotencia(e.target.value);
                break;
            case 'kms':
                cambiarKms(e.target.value);
                break;
            case 'marca':
                cambiarMarca(e.target.value);
                break;
            case 'selectCat':
                const txtMarca = document.querySelector('.txtMarca');
                const cmb_climatizado = document.querySelector('#cmb_climatizado');
                txtMarca.classList.toggle('inactive');
                cmb_climatizado.classList.toggle('inactive');
                cambiarCat(e.target.value);
                break;
            case 'selectCli':
                cambiarCli(e.target.value);
                break;
            default:
                console.log('Este input no ha sido controlado');
            break;
        }
    }
    return(
        <form method="POST" style={{position:"relative"}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="_Categoria">Seleccione la categoria</label>
                <select id='_Categoria' onChange={(e) => handleInput(e, 'selectCat')}>
                    <option value="LOCOMOTORAS">LOCOMOTORAS</option>
                    <option value="COCHE-MOTOR">COCHE-MOTOR</option>
                </select>
            </div>

            <input
                type="text"
                className='formulario-tareas__input'
                placeholder="Escribe la Potencia del Motor"
                value = {inputPotencia}
                onChange = {(e) => handleInput(e, 'potencia')}
            />

            <input 
                type="text"
                placeholder="Km's Recorridos"
                className="formulario-tareas__input"
                id="_KmRecorridos"
                value = {inputKms}
                onChange = {(e) => handleInput(e, 'kms')}
            />

            <input 
                type="text"
                placeholder="Marca"
                className="formulario-tareas__input txtMarca"
                value = {inputMarca}
                onChange = {(e) => handleInput(e, 'marca')}
            />

            <div id="cmb_climatizado" className="inactive">
                <label htmlFor="_Climatizado">Climatizado:</label>
                <select id="_Climatizado"  onChange={(e) => handleInput(e, 'selectCli')}>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
            </div>

            <button
                type="submit"
                className="formulario-tareas__btn"
            >
                Enviar
            </button>
        </form>
    );
}

export default FormularioEquipos;