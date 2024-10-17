import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
const CargarVistaEquipos = () => {
   
    const [misequipos, setEquipos ] = useState([]);
    const cargarData = (() => {
        return new Promise(async(resolve, reject) => {
            await fetch('http://localhost:8080/api/equipos/')
            .then(response => response.json())
            .then(data => {
                setEquipos(data);
                resolve()
            }).catch(error => {reject('Error al recolectar datos del JSON:', error);})}, []) 
    });

    useEffect(() => {
        //Código para ejecutar la función al cargar la página
        cargarData();
    }, []);

    return (<><h1 style={ { textAlign: 'center' }}>Tabla Equipos</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Categoria</th>
                    <th scope="col">Motor</th>
                    <th scope="col">Kms</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Climatizado</th>
                </tr>
            </thead>
            <tbody>
                {(misequipos.length === 0) ? <h1>No existen equipos</h1> :
                    misequipos.map( (e, index) => {
                        const {uid, _PotenciaMotor,_KmRecorridos,_Categoria,_Marca, _Climatizado} = e;
                        return (<tr key= {uid} >
                            <td>{_Categoria}</td>
                            <td>{_PotenciaMotor}</td>
                            <td>{_KmRecorridos}</td>
                            <td>{(_Categoria === 'LOCOMOTORAS') ? _Marca : 'No aplica.'}</td>
                            <td>{(_Categoria === 'COCHE-MOTOR') ? (_Climatizado) ? 'SI': 'NO' : 'No aplica'}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table></>);
}

// misequipos.equipos.map((e, index) => {
//     const {uid, _Categoria,_KmRecorridos,_Marca,_PotenciaMotor, _Climatizado} = e;
//     console.log(uid, _Categoria,_KmRecorridos,_Marca,_PotenciaMotor, _Climatizado);
//     return (<tr key={uid}>
//         <td> {_Categoria} </td>
//         <td> {_KmRecorridos} </td>
//         <td> {_Categoria === 'LOCOMOTORAS' ? _Marca : (_Climatizado) ? 'SI' : 'NO'} </td>
//     </tr>)
// })

// const TableEquipos = styled.table`
//     border: 1px solid #000;
//     border-collapse: collapse;
//     width: 100%;
//     text-Align center

//     {}
// `;

export default CargarVistaEquipos;